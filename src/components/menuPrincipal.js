import StylesMenu from '../styles/stylesMenu'
import React from "react";
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
  const navigateN = () =>{
    navigation.navigate("note")
  }

  return (
      <View style={StylesMenu.containerMenu}>
        <TouchableOpacity onPress={navigateH}>
          <Image
            style={StylesMenu.buttonsMenu}
            source={require("../../assets/image/principal.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateL}>
          <Image
            style={StylesMenu.buttonsMenu}
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
            style={StylesMenu.buttonsMenu}
            source={require("../../assets/image/calendario.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateG}>
          <Image
            style={StylesMenu.buttonsMenu}
            source={require("../../assets/image/manual.png")}
          />
        </TouchableOpacity>
      </View>
  );
};

export const MenuPrincipalRotulos = () => {
  return (
    <View style={StylesMenu.containerEtiquetas}>
      <Text style={StylesMenu.etiquetas}>Principal</Text>
      <Text style={[StylesMenu.etiquetas, { marginRight: 20 }]}>Registros</Text>
      <Text style={[StylesMenu.etiquetas, { marginRight: 15 }]}>Monitorar</Text>
      <Text style={[StylesMenu.etiquetas, { marginRight: 5 }]}>Calendário</Text>
      <Text style={StylesMenu.etiquetas}>Manual</Text>
    </View>
  );
};

export default MenuPrincipalIcones;
