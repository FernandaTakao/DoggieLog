class Caozinho {
  constructor(id, comida, agua, xixi, coco, sono, humor, atividadeFisica) {
    this._id = id;
    this._comida = comida;
    this._agua = agua;
    this._xixi = xixi;
    this._coco = coco;
    this._sono = sono;
    this._humor = humor;
    this._atividadeFisica = atividadeFisica;
  }
  get id() {
    return this._id;
  }
  get comida() {
    return this._comida;
  }
  get agua() {
    return this._agua;
  }
  get xixi() {
    return this._xixi;
  }
  get coco() {
    return this._coco;
  }
  get sono() {
    return this._sono;
  }
  get humor() {
    return this._humor;
  }
  get atividadeFisica() {
    return this._atividadeFisica;
  }

  set comida(novaComida) {
    this._comida = novaComida;
  }
  set agua(novaAgua) {
    this._agua = novaAgua;
  }
  set xixi(novoXixi) {
    this._xixi = novoXixi;
  }
  set coco(novoCoco) {
    this._coco = novoCoco;
  }
  set sono(novoSono) {
    this._sono = novoSono;
  }
  set humor(novoHumor) {
    this._humor = novoHumor;
  }
  set atividadeFisica(novaAtividadeFisica) {
    this._atividadeFisica = novaAtividadeFisica;
  }

exibirInfo() {
    console.log(`Agua: ${this.agua}`);
    console.log(`Comida: ${this.comida}`);
    console.log(`Xixi: ${this.xixi}`);
    console.log(`Coco: ${this.coco}`);
    console.log(`Sono: ${this.sono}`);
    console.log(`Humor: ${this.humor}`);
    console.log(`Atvidade Fisica: ${this.atividadeFisica}`);
  }
}

export default Tutor;