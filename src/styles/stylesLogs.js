import { StyleSheet } from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import StylesMenu from "./stylesMenu";

const StylesLogs = StyleSheet.create({
  containerFundo: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  containerCima: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF8E72",
    elevation: 1,
    width: "100%",
    height: heightPercentageToDP("8%"),
  },
  containerMeio: {
    flex: 0.95,
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  containerMenu: {
    ...StylesMenu.containerMenu,
  },
  containerEtiquetas: {
    marginTop: "-10%",
    ...StylesMenu.containerEtiquetas,
  },
  scrollViewContent: {
    flexGrow: 1,
    width: widthPercentageToDP("100%"),
    height: heightPercentageToDP("100%"),
  },
});

export default StylesLogs;
