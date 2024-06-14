import { StyleSheet } from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

const StylesSearchBar = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 40,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: widthPercentageToDP("75%"),
    height: heightPercentageToDP("5%"),
  },
  icon: {
    marginLeft: 5,
    marginRight: 5,
    width: 20,
    height: 20,
    opacity: 0.3,
  },
  input: {
    flex: 1,
    height: heightPercentageToDP("10%"),
  },
});

export default StylesSearchBar;
