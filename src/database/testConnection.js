

//testConnection.js

import { getConnection } from "./connection";

const testDatabase = async () => {
  const db = await getConnection();
  const result = await db.getAllAsync(
    "SELECT name FROM sqlite_master WHERE type='table' AND name='Tutor';"
  );

  if (result.length > 0) {
    console.log("Tabela Tutor existe.");
  } else {
    console.log("Tabela Tutor não existe.");
  }
};

export { testDatabase };
