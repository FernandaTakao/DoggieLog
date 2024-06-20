import DiaService from "../database/diaService";

const Dia = () => {
  const { createDia } = DiaService();

  const createD = async (
    agua,
    comida,
    xixi,
    coco,
    sono,
    humor,
    atividadeFisica,
    idCaozinho
  ) => {
    console.log("Entrou em createD");
    await createDia(
      agua,
      comida,
      xixi,
      coco,
      sono,
      humor,
      atividadeFisica,
      idCaozinho
    );
  };

  const removeD = async (id) => {
    await DiaService.deleteCaozinho(id);
  };

  return { createD, removeD };
};

export default Dia;
