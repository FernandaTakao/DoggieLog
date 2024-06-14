
//StylesHome

import { StyleSheet} from "react-native";

const StylesHome = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  containerCima: {
    flex: 0.36,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FF8E72",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    width: "100%",
    elevation: 1,
    shadowColor: "#CBCBCB",
    paddingTop: "8%",
    paddingBottom: 10,
  },
  containerCimaCima: {
    flex: 0.10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: "80%",
    paddingto: "-10%",
  },
  containerMeio: {
    paddingBottom: "%2",
    paddingTop: "%5",
    flex: 0.72,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginBottom: 10,
  },
  fotoHome: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
  },
  containerBaixo: {
    flex: 0.085,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 0.5,
  },
  containerMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 0.06,
    backgroundColor: "#FFFACD",
    width: "100%",
    elevation: 1,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 4,
  },
  containerEtiquetas: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 0.02,
    backgroundColor: "#FFFACD",
    width: "100%",
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 3,
  },
  buttonsMenu: {
    width: 40,
    height: 35,
    resizeMode: "contain"
  },
  etiquetas: {
    fontFamily: "RobotoRegular",
    color: "black",
    fontSize: 10,
  },
  containerMedias: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 0.56,
    backgroundColor: "white",
    width: "100%",
    paddingTop: "8%"
  },
  containerDropdown: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2A3F00",
    width: "70%",
    height: "10%",
    borderRadius: 40,
    marginTop: 10,
    color: "white",
    fontFamily: "NunitoSemiBold",
  },
  imageEditarProfile: {
    width: "260%",
    height: "260%",
    resizeMode: "contain",
    marginRight: 15,
    marginBottom: 10,
  },
  toachableOEditarProfile: {
    width: "100",
    height: '100',
    marginLeft: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  /*Usou-se aqui um espaçador para posicionar corretamente o botão de ediçao de dados
    Foi preferida essa forma à utilização do position "absolute" no containerCimaCima
    por razões de responsividade */
  espacador: {
    opacity: 0,
  },
  txtHome: {
    fontFamily: "RobotoMedium",
    color: "#FFFFFF",
  },
  txtDados: {
    fontSize: 17,
    paddingRight: "17%",
    paddingLeft: "17%",
  },
  txtValores: {
    fontSize: 15,
    fontFamily: "RobotoRegular",
    paddingRight: "15%",
    paddingLeft: "17%",
  },
  buttonMenu:{
    backgroundColor: '#2A3F00',
    width: 50,
    height: 15,
    
    justifyContent: "center",
    alignItems: "center",
  },
  txtButton: {
    fontFamily: "RobotoMedium",
    color: "#black",
    textAlign: "center",
    fontSize: 19,
  },
  placeholder: {
    color: "#EEE69C",
    fontFamily: "NunitoSemiBold",
    fontSize: 16,
    textAlign: "justify",
  },
});

export default StylesHome;
