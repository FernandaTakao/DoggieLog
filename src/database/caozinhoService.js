import db from "./connection";

const createCaozinho = (caozinho) => {
  const { nome, dataNascimento, sexo, peso, porte, raca, statusReprodutivo } = caozinho;
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Caozinho (nome, dataNascimento, sexo, peso, porte, raca, statusReprodutivo) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [nome, dataNascimento, sexo, peso, porte, raca, statusReprodutivo],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

const getCaozinhos = (id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM Caozinho WHERE id = ?",
          [id],
          (_, { rows: { _array } }) => {
            if (_array.length > 0) {
              resolve(_array[0]); 
            } else {
              resolve(null); 
            }
          },
          (_, error) => reject(error)
        );
      });
    });
  };
  

const updateCaozinho = (id, caozinho) => {
  const { nome, dataNascimento, sexo, peso, porte, raca, statusReprodutivo } = caozinho;
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE Caozinho SET nome = ?, dataNascimento = ?, sexo = ?, peso = ?, porte = ?, raca = ?, statusReprodutivo = ? WHERE id = ?",
        [nome, dataNascimento, sexo, peso, porte, raca, statusReprodutivo, id],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

const deleteCaozinho = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM Caozinho WHERE id = ?",
        [id],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export { createCaozinho, getCaozinhos, updateCaozinho, deleteCaozinho };
