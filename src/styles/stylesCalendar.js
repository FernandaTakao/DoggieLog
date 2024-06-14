// stylesCalendar.js
import { StyleSheet } from "react-native";

const StylesCalendar = StyleSheet.create({
  containerFundo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFFACD",
    elevation: 2,
    flex: 0.07,
  },
  calendario: {
    flex: 0.85,
    width: "100%",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 20,
    borderRadius: 5,
  },
  noteContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 10,
  },
});

export default StylesCalendar;
