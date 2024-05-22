import db from "./connection";

const createDia = (dia) => {
  const { comida, agua, xixi, coco, sono, humor, atividadeFisica, caozinhoId } = dia;
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Dia (comida, agua, xixi, coco, sono, humor, atividadeFisica, id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [comida, agua, xixi, coco, sono, humor, atividadeFisica, caozinhoId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

const getDias = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Dia",
        [],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => reject(error)
      );
    });
  });
};

const updateDia = (id, dia) => {
  const { comida, agua, xixi, coco, sono, humor, atividadeFisica } = dia;
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE Dia SET comida = ?, agua = ?, xixi = ?, coco = ?, sono = ?, humor = ?, atividadeFisica = ? WHERE id = ?",
        [comida, agua, xixi, coco, sono, humor, atividadeFisica, id],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

const deleteDia = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM Dia WHERE id = ?",
        [id],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export { createDia, getDias, updateDia, deleteDia };
