import * as SQLite from "expo-sqlite";

const InitDB = async () => {
  const db = await SQLite.openDatabaseAsync("doggielog.db");

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS Caozinho (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      nome TEXT NOT NULL, 
      dataNascimento TEXT NOT NULL, 
      sexo TEXT NOT NULL, 
      peso REAL NOT NULL, 
      porte TEXT NOT NULL, 
      raca TEXT, 
      statusReprodutivo TEXT NOT NULL,
      userTutor TEXT NOT NULL,
      FOREIGN KEY (userTutor) REFERENCES Tutor (user) ON DELETE CASCADE
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS Dia (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      comida TEXT, 
      agua TEXT, 
      xixi TEXT, 
      coco TEXT, 
      sono TEXT, 
      humor TEXT, 
      atividadeFisica TEXT, 
      idCaozinho INTEGER NOT NULL,
      FOREIGN KEY (idCaozinho) REFERENCES Caozinho (id) ON DELETE CASCADE
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS Tutor (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      user TEXT UNIQUE NOT NULL,
      senha TEXT NOT NULL
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS Log (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      titulo TEXT NOT NULL, 
      data DATE NOT NULL, 
      conteudo TEXT NOT NULL,
      idCaozinho INTEGER NOT NULL,
      FOREIGN KEY (idCaozinho) REFERENCES Caozinho (id) ON DELETE CASCADE
    );
  `);

  return db;
};

export default InitDB;
