// stylesMonitoring.js
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

const StylesMonitoring = StyleSheet.create({
  containerFundo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  containerHeader: {
    backgroundColor: "#FFFACD",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 4,
    width: "100%",
    height: heightPercentageToDP("8%"),
    paddingLeft: 20,
  },
  subcontainers: {
    height: heightPercentageToDP("16%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 40,
    paddingLeft: 45,
    width: "100%",
  },
  titles: {
    fontSize: 18,
    fontFamily: "NunitoSemiBold",
    textAlign: "center",
    marginTop: 10,
  },
  scrollviewContainer: {
    paddingVertical: 10,
    flexGrow: 1,
    width: "100%",
  },
  images: {
    width: 104,
    height: 123,
    resizeMode: "contain",
    marginRight: 40,
    marginLeft: 2.5,
  },
  day: {
    fontFamily: "NunitoBold",
    color: "black",
    fontSize: 19,
    textAlign: "center",
  },
  etiquetas: {
    fontFamily: "NunitoSemiBold",
    fontSize: 12.5,
    textAlign: "center",
    marginLeft: "15%",
  },
  containerEtiquetas: {
    marginTop: -10,
    width: "100%",
    height: heightPercentageToDP("5%"),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  buttons: {
    width: 107,
    height: 106,
    resizeMode: "contain",
    marginRight: 10,
    marginLeft: 12,
  },
});

export default StylesMonitoring;
