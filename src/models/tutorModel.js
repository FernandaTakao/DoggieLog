import { CreateTutor as dbCreateTutor, DeleteTutor as dbDeleteTutor } from "../database/tutorService";

export const createTutor = async (user, password, passwordConfirm ) => {
  if (user.trim() === "" || password.trim() === "") {
    throw new Error("Por favor, preencha todos os campos.");
  } else if (password.trim() !== passwordConfirm.trim()) {
    throw new Error("As senhas não coincidem!");
  } else if (user.length < 8 || password.length < 8) {
    throw new Error("A senha e o nome de usuário devem ter no mínimo 8 caracteres!");
  } else {
    await dbCreateTutor( user, password );
  }
};

export const deleteTutor = async (db, user) => {
  await dbDeleteTutor(db, user);
};
