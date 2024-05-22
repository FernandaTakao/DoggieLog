

import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const spacingPercentageDados = 40;
const spacingWidth = (screenWidth * spacingPercentageDados) / 100;

const StylesHome = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  containerCima: {
    flex: 0.45,
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
  },
  containerCimaCima: {
    flex: 0.10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    //backgroundColor: "red",
    width: "100%",
    paddingLeft: "80%",
    paddingto: "-10%",
  },
  containerMeio: {
    paddingBottom: "%5",
    paddingTop: "%5",
    flex: 0.74,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    //backgroundColor: "gray",
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
    flex: 0.083,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    //backgroundColor: "blue",
    width: "100%",
    //paddingTop: "5%",
  },
  containerMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 0.065,
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
    flex: 0.025,
    backgroundColor: "#FFFACD",
    width: "100%",
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 3,
  },

  buttonsMenu: {
    width: 40,
    height: 40,
    //resizeMode: "contain",
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
    flex: 0.65,
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
    fontFamily: "RobotoRegular",
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
    //backgroundColor: "green",
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
    // textAlign: "center",
  },
  txtDados: {
    fontSize: 18,
    //marginHorizontal: spacingWidth / 2,
    paddingRight: "17%",
    paddingLeft: "17%",
  },
  txtValores: {
    fontSize: 15,
    fontFamily: "RobotoRegular",
    //marginHorizontal: spacingWidth / 2,
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
    fontFamily: "RobotoRegular",
    fontSize: 18,
    textAlign: "justify",
    //marginLeft: 20,
  },
});

export default StylesHome;
