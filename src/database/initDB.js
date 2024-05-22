import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";
import { SQLiteProvider } from "expo-sqlite";


const useLocalDB = () => {
  const nameDB = "doggielogDB.db";
  const dbAsset = require("../database/doggielogDB.db");
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${nameDB}`;
  const [db, setDb] = useState(null);

  useEffect(() => {
    const loadDatabase = async () => {
      try {
        const { exists } = await FileSystem.getInfoAsync(dbFilePath);
        if (!exists) {
          await FileSystem.makeDirectoryAsync(
            `${FileSystem.documentDirectory}SQLite`,
            { intermediates: true }
          );
          await FileSystem.downloadAsync(
            Asset.fromModule(dbAsset).uri,
            dbFilePath
          );
        }
        const openedDb = SQLite.openDatabaseAsync(nameDB);
        setDb(openedDb);
      } catch (error) {
        console.error("Erro ao carregar o banco de dados: ", error);
      }
    };

    loadDatabase();
  }, [dbAsset, dbFilePath]);

  return db;
};

const LocalDB = ({ children }) => {
  const db = useLocalDB();

  if (!db) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <SQLiteProvider db={db}>{children}</SQLiteProvider>;
};

export default LocalDB;
