import { Platform } from "react-native";
import RobotoRegular from "./assets/fonts/Roboto-Regular.ttf";
import RobotoMedium from "./assets/fonts/Roboto-Medium.ttf";
import NunitoRegular from "./assets/fonts/Nunito-Regular.ttf";
import NunitoSemiBold from "./assets/fonts/Nunito-SemiBold.ttf";

export const Fonts = {
  Robotoregular: Platform.OS === "ios" ? "Roboto-Regular" : "RobotoRegular",
  RoobotoMedium: Platform.OS === "ios" ? "Roboto-Medium" : "RobotoMedium",
  Nunitoregular: Platform.OS === "ios" ? "Nunito-Regular" : "NunitoRegular",
  NunitoSemiBold: Platform.OS === "ios" ? "Nunito-SemiBold" : "NunitoSemiBold",
};
