import { StyleSheet } from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

const StylesNote = StyleSheet.create({
  
  // para a representação gráfica das notas na página do bloco de notas
  containerPrincipal: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: widthPercentageToDP("37%"),
    height: heightPercentageToDP("30%"),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 10,
    marginLeft: 23,
  },
  containerTitle: {
    width: "100%",
    backgroundColor: "#3F5E00",
    flex: 0.13,
  },
  title: {
    fontFamily: "NunitoSemiBold",
    textAlign: "center",
    color: "white",
    fontSize: 13.5,
    marginTop: 3,
  },
  containerText: {
    width: "100%",
    flex: 0.77,
    padding: 5,
    fontFamily: "RobotoRegular",
  },
  txt: {
    fontSize: 11,
    textAlign: "justify",
    fontFamily: "RobotoRegular",
    color: "black",
    marginHorizontal: 5,
  },
  containerDate: {
    width: "100%",
    flex: 0.1,
    fontFamily: "NunitoRegular",
  },
  date: {
    textAlign: "right",
    alignSelf: "flex-end",
    marginRight: 10,
    fontFamily: "NunitoSemiBold",
    fontSize: 11,
    color: "black",
  },

  // para uma nota em específico
  fundo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    flex: 0.1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFACD",
    elevation: 0.2,
    paddingHorizontal: 10,
  },
  containerTxt: {
    flex: 0.9,
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontFamily: "RobotoRegular",
    textAlign: "justify",
    fontSize: 16,
  },
  texto: {
    fontFamily: "RobotoRegular",
    textAlign: "justify",
    fontSize: 18,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: -80,
  },
  icons: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 10,
    opacity: 0.9,
  },
  voltar: {
    fontFamily: "NunitoSemiBold",
    textAlign: "left",
    fontSize: 24,
    color: "black",
    marginRight: 15,
  },
  titulo: {
    fontFamily: "RobotoMedium",
    textAlign: "left",
    fontSize: 22,
  },
  modalContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  colorPicker: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 5,
    elevation: 3,
  },
});

export default StylesNote;
