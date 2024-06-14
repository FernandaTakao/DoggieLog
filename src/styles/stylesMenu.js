


import { StyleSheet } from "react-native";

const StylesMenu = StyleSheet.create({
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
    fontFamily: "NunitoRegular",
    color: "black",
    fontSize: 10,
  },
});

export default StylesMenu;