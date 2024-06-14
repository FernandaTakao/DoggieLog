import React, { useState } from "react";
import StylesHome from "../styles/stylesHome";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuPrincipalIcones from "../components/menuPrincipal";
import { MenuPrincipalRotulos } from "../components/menuPrincipal";
import RNPickerSelect from "react-native-picker-select";
import StylesMenu from "../styles/stylesMenu";

const Home = () => {
  const [relatorio, setRelatorio] = useState("");

  const navigation = useNavigation();

  const navigateEP = () => {
    navigation.navigate("editProfile");
  };
  const navigateL = () => {
    navigation.navigate("login.");
  };
  const navigateCT = () => {
    navigation.navigate("singupTutor");
  };
  const navigateCC = () => {
    navigation.navigate("singupCaozinho");
  }

  const pickerStyle = {
    inputIOS: [
      StylesHome.containerDropdown,
      StylesHome.placeholder,
      { color: relatorio ? "white" : "#EEE69C" },
    ],
    inputAndroid: [
      StylesHome.placeholder,
      { color: relatorio ? "#ffffff" : "#EEE69C" },
    ],
  };

  const relatorios = [
    { label: "Água e comida", value: "AC" },
    { label: "Xixi e cocô", value: "XC" },
    { label: "Sono e humor", value: "SH" },
    { label: "Atividade física", value: "A" },
  ];

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
          <Text style={[StylesHome.txtHome, { fontSize: 25, flex: 1 }]}>
            Nome
          </Text>
        </View>
        <View style={StylesHome.containerBaixo}>
          <Text style={[StylesHome.txtHome, StylesHome.txtDados]}>Peso</Text>
          <Text style={[StylesHome.txtHome, StylesHome.txtDados]}>Idade</Text>
        </View>
        <View style={StylesHome.containerBaixo}>
          <Text style={[StylesHome.txtHome, StylesHome.txtValores]}>...kg</Text>
          <Text style={[StylesHome.txtHome, StylesHome.txtValores]}>
            ... A + ... M
          </Text>
        </View>
      </View>
      <View style={StylesHome.containerMedias}>
        <View style={StylesHome.containerDropdown}>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            color="white"
            style={pickerStyle}
            placeholder={{ label: "Selecione um relatório", value: null }}
            placeholderTextColor="#ffffff"
            underlineColorAndroid="transparent"
            items={relatorios}
            onValueChange={(value) => setRelatorio(value)} 
            value={relatorio}
          />
        </View>
        <TouchableOpacity onPress={navigateCT}>
          <Text style={{fontSize: 20}}>CADASTRO TUTOR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateCT}>
          <Text style={{fontSize: 20}}>CADASTRO TUTOR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateCC}>
          <Text style={{fontSize: 20}}>CADASTRO CAOZINHO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateL}>
          <Text style={{fontSize: 20}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <MenuPrincipalIcones style={StylesMenu.containerMenu} />
      <MenuPrincipalRotulos style={StylesMenu.containerEtiquetas} />
    </View>
  );
};

export default Home;
