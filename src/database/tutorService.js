import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";

export const CreateTutor = async (user, password ) => {
  const db = useSQLiteContext();
  return db.runAsync("INSERT INTO Tutor (user, senha) VALUES (?, ?)", [
    user,
    password,
  ]);
};

export const GetTutor = async () => {
  const db = useSQLiteContext();
  const result = await db.getAllAsync("SELECT * FROM Tutor");
  return result;
};

export const UpdateTutor = async (user, senha) => {
  const db = useSQLiteContext();
  return db.runAsync("UPDATE Tutor SET senha = ? WHERE user = ?", [
    senha,
    user,
  ]);
};

export const DeleteTutor = async (user) => {
  const db = useSQLiteContext();
  return db.runAsync("DELETE FROM Tutor WHERE user = ?", [user]);
};
