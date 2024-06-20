import { useSQLiteContext } from "expo-sqlite";

export function DiaService() {
  const database = useSQLiteContext();

  async function createDia(
    agua,
    comida,
    xixi,
    coco,
    sono,
    humor,
    atividadeFisica,
    idCaozinho
  ) {
    const statement = await database.prepareAsync(
      "INSERT INTO Caozinho (agua, comida, xixi, coco, sono, humor, atividadeFisica, idCaozinho) VALUES ($comida, $agua, $xixi, $coco, $sono, $humor, $atividadeFisica, $idCaoozinho);"
    );

    try {
      const result = await statement.executeAsync({
        $comida: comida,
        $agua: agua,
        $xixi: xixi,
        $coco: coco,
        $sono: sono,
        $humor: humor,
        $atividadeFisica: atividadeFisica,
        $idCaozinho: idCaozinho,
      });

      const insertedRowId = result.lastInsertRowId.toLocaleString();

      return { insertedRowId };
    } catch (error) {
      console.error("Error inserting data:", error);
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function readDia(id) {
    const dia = await database.getAllAsync("SELECT * FROM Dia WHERE id = ?", [
      id,
    ]);
    return dia;
  }

  async function readAllDias() {
    const dias = await database.getAllAsync("SELECT * FROM Dia");
    return dias;
  }

  async function updateDia(
    newAgua,
    newComida,
    newXixi,
    newCoco,
    newSono,
    newHumor,
    newAtividadeFisica,
    id
  ) {
    await database.runAsync(
      "UPDATE Dia SET comida = ?, agua = ?, xixi =?, coco = ?, sono = ?, humor = ?, atividadeFisica = ? WHERE id = ?",
      [
        newAgua,
        newComida,
        newXixi,
        newCoco,
        newSono,
        newHumor,
        newAtividadeFisica,
        id,
      ]
    );
    return { success: true };
  }

  async function deleteDia(id) {
    await database.runAsync("DELETE FROM Dia WHERE id = ?", [id]);
    return { success: true };
  }

  return {
    createDia,
    readDia,
    readAllDias,
    updateDia,
    deleteDia,
  };
}

export default DiaService;
