import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  View,
  Platform,
  TouchableOpacity,
  FlatList,
} from "react-native";
import StylesLogs from "../styles/stylesLogs";
import MenuPrincipalIcones, {
  MenuPrincipalRotulos,
} from "../components/menuPrincipal";
import StylesMenu from "../styles/stylesMenu";
import SearchBar from "../components/searchBar";
import Notepad from "../components/notepad";

const Logs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const notes = [
    {
      id: "1",
      title: "Antialérgico",
      text: "Administrar doses de 10mg\n✅ Dia 1\n✅ Dia 2\n✅ Dia 3",
      date: "12/03/2024",
      color: "#A2C38F",
    },
    {
      id: "2",
      title: "Sangramento",
      text: "Começou a sangrar dia 18\nContinuou até o dia 2 de abril\nApresentou sangramento leve",
      date: "18/03/2024",
      color: "#FF9385",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => console.log("Nota clicada")}>
      <Notepad
        title={item.title}
        text={item.text}
        date={item.date}
        color={item.color}
      />
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={StylesLogs.containerFundo}
    >
      <View style={StylesLogs.containerCima}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </View>
      <View style={StylesLogs.containerMeio}>
        <Text
          style={{
            fontFamily: "RobotoMedium",
            textAlign: "left",
            fontSize: 24,
            color: "black",
            marginLeft: 7,
            marginBottom: 20,
          }}
        >
          Registros
        </Text>
        <FlatList
          data={notes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>

      <MenuPrincipalIcones style={StylesMenu.containerMenu} />
      <MenuPrincipalRotulos style={StylesMenu.containerEtiquetas} />
    </KeyboardAvoidingView>
  );
};

export default Logs;
