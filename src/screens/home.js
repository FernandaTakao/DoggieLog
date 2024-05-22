import React, { useState } from "react";
import StylesHome from "../styles/stylesHome";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuPrincipalIcones from "../components/menuPrincipal";
import { MenuPrincipalRotulos } from "../components/menuPrincipal";
import RNPickerSelect from "react-native-picker-select";


const Home = () => {
  const [relatorio, setRelatorio] = useState("");

  const navigation = useNavigation();

  const navigateEP = () => {
    navigation.navigate("singupCaozinho");
  };
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
            placeholderTextColor="#EEE69C"
            underlineColorAndroid="transparent"
            items={relatorios}
            onValueChange={(value) => setRelatorio(value)} 
            value={relatorio}
          />
        </View>
      </View>
      <MenuPrincipalIcones style={StylesHome.containerMenu} />
      <MenuPrincipalRotulos style={StylesHome.containerEtiquetas} />
    </View>
  );
};

export default Home;
