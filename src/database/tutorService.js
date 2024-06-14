// src/database/tutorService.js

import * as SQLite from "expo-sqlite";
import { useSQLiteContext } from "expo-sqlite";

export function TutorService() {
  const database = useSQLiteContext();

  async function createTutor(user, senha) {
    const statement = await database.prepareAsync(
      "INSERT INTO Tutor (user, senha) VALUES ($user, $senha);"
    );

    try {
      const result = await statement.executeAsync({
        $user: user,
        $senha: senha,
      });

      console.log("Insertion result:", result);

      const insertedRowId = result.lastInsertRowId.toString();
      return { insertedRowId };
    } catch (error) {
      console.error("Error inserting data:", error);
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function readTutor(user) {
    if (!database) return;

    const tutor = await database.getAllAsync(
      "SELECT * FROM Tutor WHERE user = ?",
      [user]
    );
    return tutor;
  }

  async function updateTutor(userId, newUser, newPassword) {
    if (!database) return;

    await database.runAsync(
      "UPDATE Tutor SET user = ?, senha = ? WHERE id = ?",
      [newUser, newPassword, userId]
    );
    return { success: true };
  }

  async function deleteTutor(userId) {
    if (!database) return;

    await database.runAsync("DELETE FROM Tutor WHERE id = ?", [userId]);
    return { success: true };
  }

  async function checkIfUserExists(user) {
    if (!database) return;

    const result = await database.getAllAsync(
      "SELECT * FROM Tutor WHERE user = ?",
      [user]
    );
    return result.length > 0;
  }

  return {
    createTutor,
    readTutor,
    updateTutor,
    deleteTutor,
    checkIfUserExists,
  };
}

export default TutorService;
