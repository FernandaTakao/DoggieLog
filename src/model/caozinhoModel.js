

// src/model/caozinhoModel.js

import CaozinhoService from "../database/caozinhoService";

const Caozinho = () => {
  const { createCaozinho } = CaozinhoService();

  const createC = async (
    nome,
    dataNascimento,
    sexo,
    peso,
    porte,
    raca,
    statusReprodutivo,
    userTutor,
  ) => {
    await createCaozinho(
      nome,
      dataNascimento,
      sexo,
      peso,
      porte,
      raca,
      statusReprodutivo,
      userTutor
    );
  };

  const removeC = async (id) => {
    await CaozinhoService.deleteCaozinho(id);
  };

  return { createC, removeC };
};

export default Caozinho;