import React from "react";
import Styles from "../styles/styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
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

  const navigateEP = () => {
    navigation.navigate("editProfile");
  };

  return (
    <View style={Styles.containerPrincipal}>
      <View style={Styles.containerCima}>
        <View style={Styles.containerCimaCima}>
          <TouchableOpacity
            styles={Styles.toachableOEditarProfile}
            onPress={navigateEP}
          >
            <Image
              source={require("../../assets/image/editar.png")}
              style={Styles.imageEditarProfile}
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.containerMeio}>
          {/*AQUI, FAZER O USUÁRIO ESCOLHER A FOTO */}
          <Image
            source={require("../../assets/image/carregarFoto.png")}
            styles={Styles.fotoHome}
          />
          <Text style={[Styles.txtHome, { fontSize: 25, flex: 1 }]}>Nome</Text>
        </View>
        <View style={Styles.containerBaixo}>
          <Text style={[Styles.txtHome, Styles.txtDados]}>Peso</Text>
          <Text style={[Styles.txtHome, Styles.txtDados]}>Idade</Text>
        </View>
        <View style={Styles.containerBaixo}>
          <Text style={[Styles.txtHome, Styles.txtValores]}>...kg</Text>
          <Text style={[Styles.txtHome, Styles.txtValores]}>... A + ... M</Text>
        </View>
      </View>
      <View style={Styles.containerMedias}>
        <Text>Container médias</Text>
      </View>
      <View style={Styles.containerMenu}>
        <TouchableOpacity onPress={navigateH}>
          <Image
            style={Styles.buttonsMenu}
            source={require("../../assets/image/principal.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateL}>
          <Image
            style={Styles.buttonsMenu}
            source={require("../../assets/image/registros.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateM}>
          <Image
            style={ {width: 74, height: 74} }
            source={require("../../assets/image/monitorar.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateC}>
          <Image
            style={Styles.buttonsMenu}
            source={require("../../assets/image/calendario.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateG}>
          <Image
            style={Styles.buttonsMenu}
            source={require("../../assets/image/manual.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.containerEtiquetas}>
        <Text style={Styles.etiquetas}>Principal</Text>
        <Text style={[Styles.etiquetas, {marginRight: 20}]}>Registros</Text>
        <Text style={[Styles.etiquetas, {marginRight: 15}]}>Monitorar</Text>
        <Text style={[Styles.etiquetas, {marginRight: 5}]}>Calendário</Text>
        <Text style={Styles.etiquetas}>Manual</Text>
      </View>
    </View>
  );
};

export default Home;
