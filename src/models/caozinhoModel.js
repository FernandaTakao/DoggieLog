class Caozinho {
  constructor(
    id,
    nome,
    dataNascimento,
    sexo,
    peso,
    porte,
    raca,
    statusReprodutivo,
    userTutor
  ) {
    this._id = id;
    this._nome = nome;
    this._dataNascimento = dataNascimento;
    this._sexo = sexo;
    this._peso = peso;
    this._porte = porte;
    this._raca = raca;
    this._statusReprodutivo = statusReprodutivo;
    this._userTutor = userTutor;
  }
  get id() {
    return this._id;
  }
  get nome() {
    return this._nome;
  }
  get dataNascimento() {
    return this._dataNascimento;
  }
  get sexo() {
    return this._sexo;
  }
  get porte() {
    return this._porte;
  }
  get statusReprodutivo() {
    return this._statusReprodutivo;
  }
  get raca() {
    return this._raca;
  }
  get peso() {
    return this._peso;
  }
  get userTutor() {
    return this._userTutor;
  }

  set nome(novoNome) {
    const aux = /^[A-Za-z\s]+$/;
    if (aux.test(novoNome) && novoNome.lenght > 0) {
      this._nome = novoNome;
    } else {
      console.error("O nome não pode ser vazio nem conter números!");
    }
  }
  set dataNascimento(novaDataNascimento) {
    this._dataNascimento = novaDataNascimento;
  }
  set sexo(novoSexo) {
    this._sexo = novoSexo;
  }
  set peso(novoPeso) {
    if (novoPeso > 0 && novoPeso < 200) {
      this._peso = novoPeso;
    } else {
      console.error("Peso inválido! Lembre-se de informá-lo em Kg!");
    }
  }
  set porte(novoPorte) {
    this._porte = novoPorte;
  }
  set raca(novoRaca) {
    this._raca = novoRaca;
  }
  set statusReprodutivo(novoStatusReprodutivo) {
    this._statusReprodutivo = novoStatusReprodutivo;
  }

  exibirInfo() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Data de Nascimento: ${this.dataNascimento}`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Peso: ${this.peso}`);
    console.log(`Porte: ${this.porte}`);
    console.log(`Raça: ${this.raca}`);
    console.log(`Status Reprodutivo: ${this.statusReprodutivo}`);
  }
}

export default Caozinho;
