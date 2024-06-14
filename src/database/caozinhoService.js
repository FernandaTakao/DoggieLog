

// src/database/caozinhoService.js

import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";

export function CaozinhoService() {
  const database = useSQLiteContext();

 {/*async function createCaozinho(
    nome,
    dataNascimento,
    sexo,
    peso,
    porte,
    raca,
    statusReprodutivo,
    userTutor
  ) {
    if (!database) return;

    const result = await database.runAsync(
      "INSERT INTO Caozinho (nome, dataNascimento, sexo, peso, porte, raca, statusReprodutivo, userTutor) VALUES (?, ?, ?, ?, ?, ?,?, ?)",
      [nome, dataNascimento, sexo, peso, porte, raca, statusReprodutivo, userTutor]
    );
    
    return { insertedRowId: result.lastInsertRowId };
  }
*/ } 
  async function createCaozinho(nome,
    dataNascimento,
    sexo,
    peso,
    porte,
    raca,
    statusReprodutivo,
    userTutor) {
    const statement = await database.prepareAsync(
      "INSERT INTO Caozinho (nome, dataNascimento, sexo, peso, porte, raca, statusReprodutivo, userTutor) VALUES ($nome, $dataNascimento, $sexo, $peso, $porte, $raca, $statusReprodutivo, $userTutor);"
    )

    try {
      const result = await statement.executeAsync({
        $nome: nome,
        $dataNascimento: dataNascimento,
        $sexo: sexo,
        $peso: peso,
        $porte: porte,
        $raca: raca,
        $statusReprodutivo: statusReprodutivo,
        $userTutor: userTutor
      })

      const insertedRowId = result.lastInsertRowId.toLocaleString()

      return { insertedRowId }
    } catch (error) {
      console.error('Error inserting data:', error);
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  async function readCaozinho(id) {
    if (!database) return;

    const caozinho = await database.getAllAsync(
      "SELECT * FROM Caozinho WHERE id = ?",
      [id]
    );
    return caozinho;
  }

  async function updateCaozinho(
    newNome,
    newNascimento,
    newSexo,
    newPeso,
    newPorte,
    newRaca,
    newStatusReprodutivo,
    id
  ) {
    if (!database) return;

    await database.runAsync(
      "UPDATE Tutor SET nome = ?, dataNascimento = ?, sexo =?, peso = ?, porte = ?, raca = ?, statusReprodutivo = ? WHERE id = ?",
      [
        newNome,
        newNascimento,
        newSexo,
        newPeso,
        newPorte,
        newRaca,
        newStatusReprodutivo,
        id,
      ]
    );
    return { success: true };
  }

  async function deleteCaozinho(id) {
    if (!database) return;

    await database.runAsync("DELETE FROM Caozinho WHERE id = ?", [id]);
    return { success: true };
  }

  return {
    createCaozinho,
    readCaozinho,
    updateCaozinho,
    deleteCaozinho,
  };
}

export default CaozinhoService;
