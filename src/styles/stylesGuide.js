import { StyleSheet } from "react-native";

const StylesGuide = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  containerCima: {
    flex: 0.08,
    backgroundColor: "#FFFACD",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    elevation: 4,
  },
  containerMeio: {
    flex: 0.84,
    flexDirection: "column",
    alignItems: "center",
    //paddingTop: 30,
    //paddingHorizontal: 20,
    width: "100%",
    backgroundColor: "white",
  },
  scrollview: {
    flexGrow: 1,
  },
  titulo: {
    marginTop: 30,
    fontFamily: "NunitoBold",
    fontSize: 20,
    flexDirection: "row",
    color: "#2A3F00",
    textAlign: "center",
    marginHorizontal: 20
  },
  texto: {
    fontFamily: "NunitoMedium",
    fontSize: 17,
    textAlign: "justify",
    lineHeight: 28,
    marginHorizontal: 20
  },
  enfeite: {
    opacity: 0.12,
    flex: 1,
    alignSelf: "center",
    resizeMode: "contain",
    width: 800,
    height: 800,
    // transform: [{ rotate: "35deg" }],
    position: "absolute",
    marginBottom: 100,
    // marginTop: "-10%",
    // marginLeft: "-40%",
  },
});

export default StylesGuide;
