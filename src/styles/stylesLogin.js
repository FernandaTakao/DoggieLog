import { StyleSheet, Dimensions } from "react-native";
import React from "react";
const spacingPercentageDados = 40;
const spacingWidth = (screenWidth * spacingPercentageDados) / 100;
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const maxHeight = 0.9 * screenHeight;

const StylesLogin = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    backgroundColor: "#2A3F00",
  },
  containerFrente: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFACD",
    flex: 0.9,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    width: "100%",
    elevation: 5,
    shadowColor: "black",
    paddingTop: -3,
  },
  title: {
    fontFamily: "Brugty",
    fontSize: 40,
    color: "#FF8E73",
    textAlign: "left",
    //marginBottom: 40,
    marginLeft: 50,
  },
  subtitle: {
    fontFamily: "NunitoRegular",
    fontSize: 22,
    color: "white",
    marginBottom: 30,
    marginLeft: 50,
    opacity: 0.6,
  },
  txtBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    width: "80%",
    height: "8.5%",
    elevation: 5,
    shadowColor: "black",
    borderRadius: 30,
    marginBottom: 43,
  },
  icons: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
    opacity: 0.4,
    marginLeft: -50,
  },
  foto: {
    width: "38%",
    height: "38%",
    opacity: 0.8,
    resizeMode: "contain",
    //top: -20,
  },
  txtInput: {
    width: "100%",
    height: "100%",
    color: "black",
    textAlign: "justify",
    marginLeft: -50,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2A3F00",
    width: "80%",
    height: "8.5%",
    borderRadius: 30,
    elevation: 5,
    shadowColor: "black",
    marginTop: 33,
  },
  txtCadastroSenha: {
    fontFamily: "RobotoRegular",
    color: "black",
    fontSize: 15,
    textAlign: "center",
  },
  enfeite: {
    flex: 1,
    width: "100%",
    alignSelf: "baseline",
    resizeMode: "contain",
    width: "190%",
    height: "180%",
    transform: [{rotate: '35deg'}],
    position: "absolute",
    marginTop: "-35%",
    marginLeft: "-55%",
    opacity: 0.4,
    //maxHeight: maxHeight,
  },
});

export default StylesLogin;
