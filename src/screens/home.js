import React, { useState } from "react";
import StylesHome from "../styles/stylesHome";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuPrincipalIcones from "../components/menuPrincipal";
import { MenuPrincipalRotulos } from "../components/menuPrincipal";
import RNPickerSelect from "react-native-picker-select";
import StylesMenu from "../styles/stylesMenu";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

const Home = () => {
  const [relatorio, setRelatorio] = useState("");

  const navigation = useNavigation();

  const navigateEP = () => {
    navigation.navigate("editProfile");
  };
  const navigateL = () => {
    navigation.navigate("login");
  };
  const navigateCT = () => {
    navigation.navigate("singupTutor");
  };
  const navigateCC = () => {
    navigation.navigate("singupCaozinho");
  };
  const navigateN = () => {
    navigation.navigate("note");
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
          {/*AQUI, EXIBIR A FOTO ARMAZENADA NO BANCO DE DADOS */}
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
        <TouchableOpacity
          style={[styles.buttons, { backgroundColor: "#E4FFF2" }]}
          onPress={navigateCT}
        >
          <Text style={styles.txt}>Cadastro Tutor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, { backgroundColor: "#FF9385" }]}
          onPress={navigateCC}
        >
          <Text style={styles.txt}>Cadastro Cãozinho</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, { backgroundColor: "#E2FFA4" }]}
          onPress={navigateL}
        >
          <Text style={styles.txt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, { backgroundColor: "#F2D6FF" }]}
          onPress={navigateN}
        >
          <Text style={styles.txt}>Notas</Text>
        </TouchableOpacity>
      </View>
      <MenuPrincipalIcones style={StylesMenu.containerMenu} />
      <MenuPrincipalRotulos style={StylesMenu.containerEtiquetas} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  buttons: {
    width: widthPercentageToDP("70%"),
    height: heightPercentageToDP("6%"),
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    borderRadius: 30,
  },
  txt: {
    fontFamily: "NunitoSemiBold",
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
});
