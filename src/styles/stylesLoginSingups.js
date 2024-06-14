
//stylesLoginSingups.js

import { StyleSheet} from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

const StylesLoginSingups = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    paddingTop: 2,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    backgroundColor: "#2A3F00",
    overflow: "scroll",
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    width: widthPercentageToDP("80%"),
    height: heightPercentageToDP("8.3%"),
    elevation: 5,
    shadowColor: "black",
    borderRadius: 30,
    marginBottom: 43,
    marginTop: -20,
  },
  icons: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
    opacity: 0.4,
    marginLeft: -50,
  },
  foto: {
    width: widthPercentageToDP("38%"),
    height: heightPercentageToDP("38%"),
    opacity: 0.8,
    resizeMode: "contain",
    top: "-5%",
    marginBottom: "-10%",
  },
  txtInput: {
    width: "100%",
    height: "100%",
    color: "black",
    textAlign: "justify",
    marginLeft: -50,
    fontFamily: "RobotoRegular",
    fontSize: 18,
  },
  scrollViewContent: {
    flexGrow: 1,
    width: widthPercentageToDP("100%"),
    height: heightPercentageToDP("100%"),
    justifyContent: "flex-end",
  },
  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2A3F00",
    width: widthPercentageToDP("80%"),
    height: heightPercentageToDP("8.3%"),
    borderRadius: 30,
    elevation: 5,
    shadowColor: "black",
    marginTop: 15,
  },
  singupLink: {
    fontFamily: "RobotoRegular",
    color: "black",
    fontSize: 15,
    textAlign: "center",
  },
  enfeite: {
    flex: 1,
    alignSelf: "baseline",
    resizeMode: "contain",
    width: "170%",
    height: "150%",
    transform: [{ rotate: "35deg" }],
    position: "absolute",
    marginTop: "-10%",
    marginLeft: "-40%",
    opacity: 0.3,
  },

  passo1: {
    width: widthPercentageToDP("27%"),
    height: heightPercentageToDP("27%"),
    resizeMode: "contain",
    marginTop: "-18%",
  },
  text: {
    fontFamily: "NunitoMedium",
    color: "black",
    fontSize: 14,
    textAlign: "justify",
    width: widthPercentageToDP("80%"),
    marginTop: "-14%",
  },
  enfeiteInverso: {
    flex: 1,
    alignSelf: "baseline",
    resizeMode: "contain",
    width: widthPercentageToDP("210%"),
    height: heightPercentageToDP("190%"),
    transform: [{ rotate: "-40deg" }],
    position: "absolute",
    marginTop: "-50%",
    marginLeft: "-50%",
    opacity: 0.2,
  },

  enviarFoto: {
    width: "22%",
    height: "22%",
    resizeMode: "contain",
    opacity: 0.8,
    marginTop: "-23%",
  },
  passo2: {
    width: widthPercentageToDP("20.5%"),
    height: heightPercentageToDP("20.5%"),
    resizeMode: "contain",
    marginTop: "-14%",
  },
  mensagem: {
    fontFamily: "NunitoMedium",
    fontSize: 11,
    textAlign: "center",
    marginTop: "-8%",
    marginBottom: "10%",
  },
  inputCaozinho: {
    height: heightPercentageToDP("5%"),
    marginBottom: 36,
  },
  txtCaozinho: {
    fontSize: 14,
    marginLeft: "-20%",
  },
  picker: {
    color: "black",
    textAlign: "center",
    paddingHorizontal: 100,
  },
  placeholder: {
    color: "#b6b6b6",
    fontFamily: "RobotoRegular",
    fontSize: 14.5,
    textAlign: "justify",
    marginLeft: "-15%",
  },
  tapador: {
    width: 1,
    height: 1,
    opacity: 0,
  },
  buttonCaozinho: {
    width: widthPercentageToDP("80%"),
    height: heightPercentageToDP("6.3%"),
    marginTop: -2,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  error: {
    color: "red",
    marginTop: -10,
    marginBottom: 5,
    textAlign: "center",
    paddingHorizontal: 5,
    fontSize: 12.5,
  },
});

export default StylesLoginSingups;