import react from "react-native";

const HandleCadastro = () => {
  while (
    !nome ||
    !aniversario ||
    !sexo ||
    !peso ||
    !porte ||
    !statusReprodutivo
  ) {
    alert("Por favor, preencha todos os campos obrigatórios!");
    return;
  }

  const caozinho = {
    nome: nome,
    aniversario: aniversario,
    sexo: sexo,
    peso: peso,
    porte: porte,
    raca: raca,
    statusReprodutivo: statusReprodutivo,
  };

  console.log("Dados do cãozinho:", caozinho);
};

export default HandleCadastro;
