
import React from "react";
import StylesHome from "../styles/stylesHome";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuPrincipalIcones from "../components/menuPrincipal";
import { MenuPrincipalRotulos } from "../components/menuPrincipal";
import Dropdown from "../components/dropdown";

const Home = () => {
  const navigation = useNavigation();

  const navigateEP = () => {
    navigation.navigate("login");
  };

  return (
    <View style={StylesHome.containerPrincipal}>
      <View style={StylesHome.containerCima}>
        <View style={StylesHome.containerCimaCima}>
          <TouchableOpacity
            style={StylesHome.toachableOEditarProfile}
            onPress={navigateEP}
          >
            <Image
              source={require("../../assets/image/editar.png")}
              style={StylesHome.imageEditarProfile}
            />
          </TouchableOpacity>
        </View>
        <View style={StylesHome.containerMeio}>
          {/*AQUI, FAZER O USUÁRIO ESCOLHER A FOTO */}
          <Image
            source={require("../../assets/image/carregarFoto.png")}
            style={StylesHome.fotoHome}
          />
          <Text style={[StylesHome.txtHome, { fontSize: 25, flex: 1 }]}>Nome</Text>
        </View>
        <View style={StylesHome.containerBaixo}>
          <Text style={[StylesHome.txtHome, StylesHome.txtDados]}>Peso</Text>
          <Text style={[StylesHome.txtHome, StylesHome.txtDados]}>Idade</Text>
        </View>
        <View style={StylesHome.containerBaixo}>
          <Text style={[StylesHome.txtHome, StylesHome.txtValores]}>...kg</Text>
          <Text style={[StylesHome.txtHome, StylesHome.txtValores]}>... A + ... M</Text>
        </View>
      </View>
      <View style={StylesHome.containerMedias}>
        <Dropdown style={StylesHome.containerDropdown}/>
        
      </View>
      <MenuPrincipalIcones style={StylesHome.containerMenu}/>
      <MenuPrincipalRotulos style={StylesHome.containerEtiquetas}/>
    </View>
  );
};

export default Home;
