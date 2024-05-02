import React from "react";
import StylesHome from "../styles/stylesHome";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuPrincipalIcones = () => {
  const navigation = useNavigation();

  const navigateH = () => {
    navigation.navigate("home");
  };

  const navigateL = () => {
    navigation.navigate("logs");
  };

  const navigateM = () => {
    navigation.navigate("monitoring");
  };

  const navigateC = () => {
    navigation.navigate("calendar");
  };

  const navigateG = () => {
    navigation.navigate("guide");
  };

  return (
      <View style={StylesHome.containerMenu}>
        <TouchableOpacity onPress={navigateH}>
          <Image
            style={StylesHome.buttonsMenu}
            source={require("../../assets/image/principal.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateL}>
          <Image
            style={StylesHome.buttonsMenu}
            source={require("../../assets/image/registros.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateM}>
          <Image
            style={{ width: 74, height: 74 }}
            source={require("../../assets/image/monitorar.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateC}>
          <Image
            style={StylesHome.buttonsMenu}
            source={require("../../assets/image/calendario.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateG}>
          <Image
            style={StylesHome.buttonsMenu}
            source={require("../../assets/image/manual.png")}
          />
        </TouchableOpacity>
      </View>
  );
};

export const MenuPrincipalRotulos = () => {
  return (
    <View style={StylesHome.containerEtiquetas}>
      <Text style={StylesHome.etiquetas}>Principal</Text>
      <Text style={[StylesHome.etiquetas, { marginRight: 20 }]}>Registros</Text>
      <Text style={[StylesHome.etiquetas, { marginRight: 15 }]}>Monitorar</Text>
      <Text style={[StylesHome.etiquetas, { marginRight: 5 }]}>Calendário</Text>
      <Text style={StylesHome.etiquetas}>Manual</Text>
    </View>
  );
};

export default MenuPrincipalIcones;
