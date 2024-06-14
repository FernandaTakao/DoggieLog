

// src/sreens/singupCaozinho

import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import StylesLoginSingups from "../styles/stylesLoginSingups";
import RNPickerSelect from "react-native-picker-select";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { useRegisterContext } from "../components/registerContext";
import Caozinho from "../model/caozinhoModel";

const SingupCaozinho = () => {
  const [nome, setNome] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [sexo, setSexo] = useState("");
  const [peso, setPeso] = useState("");
  const [porte, setPorte] = useState("");
  const [raca, setRaca] = useState("");
  const [statusReprodutivo, setStatusReprodutivo] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigation = useNavigation();
  const { saveCaozinhoData, tutorData } = useRegisterContext();
  const { createC } = Caozinho();
  const [errorMessage, setErrorMessage] = useState("");

  
  console.log(tutorData.user)
  const userTutor = tutorData.user;
  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
      setAniversario(moment(date).format("DD/MM/YYYY"));
    }
    setShowDatePicker(false);
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  // Estilo do Picker
  const pickerStyle = {
    inputIOS: [
      StylesLoginSingups.txtInput,
      StylesLoginSingups.txtCaozinho,
      StylesLoginSingups.placeholder,
      { color: sexo ? "black" : "#b6b6b6" },
    ],
    inputAndroid: [
      StylesLoginSingups.txtInput,
      StylesLoginSingups.txtCaozinho,
      StylesLoginSingups.placeholder,
      { color: sexo ? "black" : "#b6b6b6" },
    ],
    placeholder: StylesLoginSingups.placeholder,
  };

  const sexos = [
    { label: "Feminino", value: "f" },
    { label: "Masculino", value: "m" },
  ];
  const portes = [
    { label: "Pequeno", value: "P" },
    { label: "Médio", value: "M" },
    { label: "Grande", value: "G" },
  ];
  const status = [
    { label: "Sim", value: "s" },
    { label: "Não", value: "n" },
  ];

  // Função para Salvar o Caozinho
  const saveCaozinho = async () => {
    try {
      if (
        !nome.trim() ||
        !aniversario.trim() ||
        !sexo.trim() ||
        !peso.trim() ||
        !porte.trim() ||
        !raca.trim() ||
        !statusReprodutivo.trim()
      ) {
        throw new Error("Por favor, preencha todos os campos obrigatórios.");
      }

      const caozinhoData = {
        nome,
        aniversario,
        sexo,
        peso,
        porte,
        raca,
        statusReprodutivo,
        userTutor,
      };

      saveCaozinhoData(caozinhoData);

      console.log("Antes de chamar create no caozinho");
      await createC(
        nome,
        aniversario,
        sexo,
        peso,
        porte,
        raca,
        statusReprodutivo,
        userTutor
      );
      console.log("Depois de chamar create em caozinho");

      setErrorMessage("");
      navigation.navigate("home");
    } catch (error) {
      console.log("Erro ao tentar criar o caozinho:", error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[StylesLoginSingups.containerPrincipal]}
    >
      <ScrollView contentContainerStyle={StylesLoginSingups.scrollViewContent}>
        <Text style={[StylesLoginSingups.title, { marginTop: 20 }]}>CADASTRE-SE!</Text>
        <Text style={StylesLoginSingups.subtitle}>CÃOZINHO</Text>
        <View style={[StylesLoginSingups.containerFrente, { flex: 0.95 }]}>
          <Image
            source={require("../../assets/image/enfeiteInverso.png")}
            style={[StylesLoginSingups.enfeiteInverso]}
          />
          <Image
            source={require("../../assets/image/passo2.png")}
            style={StylesLoginSingups.passo2}
          />
          <Image
            source={require("../../assets/image/enviarFoto.png")}
            style={StylesLoginSingups.enviarFoto}
          />
          <Text style={[StylesLoginSingups.mensagem]}>Carregue uma foto</Text>
          <View style={[StylesLoginSingups.inputContainer, StylesLoginSingups.inputCaozinho]}>
            <Image
              source={require("../../assets/image/nome.png")}
              style={[StylesLoginSingups.icons, { marginLeft: -60 }]}
            />
            <TextInput
              style={[StylesLoginSingups.txtInput, StylesLoginSingups.txtCaozinho]}
              placeholder="Nome"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={[StylesLoginSingups.inputContainer, StylesLoginSingups.inputCaozinho]}>
            <Image
              source={require("../../assets/image/nascimento.png")}
              style={[StylesLoginSingups.icons, { marginLeft: -60 }]}
            />
            <View
              style={{
                width: "95%",
                alignSelf: "center",
                marginTop: "3.5%",
                marginLeft: -20,
              }}
            >
              <TouchableOpacity onPress={showDatePickerModal}>
                <Text
                  style={[
                    StylesLoginSingups.txtInput,
                    StylesLoginSingups.txtCaozinho,
                    StylesLoginSingups.placeholder,
                    { color: aniversario ? "black" : "#b6b6b6" },
                  ]}
                >
                  {aniversario ? aniversario : "Data de nascimento"}
                </Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display="spinner"
                  onChange={handleDateChange}
                  style={{ backgroundColor: 'white' }} // Estilo do DateTimePicker
                />
              )}
            </View>
          </View>
          <View style={[StylesLoginSingups.inputContainer, StylesLoginSingups.inputCaozinho]}>
            <Image
              source={require("../../assets/image/sexo.png")}
              style={[StylesLoginSingups.icons, { marginLeft: -57 }]}
            />
            <View
              style={{
                width: "95%",
                alignSelf: "center",
                marginLeft: -20,
              }}
            >
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                style={pickerStyle}
                placeholder={{ label: "Selecione o sexo", value: null }}
                placeholderTextColor="#b6b6b6"
                underlineColorAndroid="transparent"
                items={sexos}
                onValueChange={(value) => setSexo(value)}
                value={sexo}
              />
            </View>
          </View>

          <View style={[StylesLoginSingups.inputContainer, StylesLoginSingups.inputCaozinho]}>
            <Image
              source={require("../../assets/image/peso.png")}
              style={[StylesLoginSingups.icons, { marginLeft: -60 }]}
            />
            <TextInput
              style={[StylesLoginSingups.txtInput, StylesLoginSingups.txtCaozinho]}
              placeholder="Peso"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={peso}
              onChangeText={setPeso}
            />
          </View>
          <View style={[StylesLoginSingups.inputContainer, StylesLoginSingups.inputCaozinho]}>
            <Image
              source={require("../../assets/image/porte.png")}
              style={[StylesLoginSingups.icons, { marginLeft: -60 }]}
            />
            <View
              style={{
                width: "95%",
                alignSelf: "center",
                marginLeft: -20,
              }}
            >
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                style={pickerStyle}
                placeholder={{ label: "Selecione o porte", value: null }}
                placeholderTextColor="#b6b6b6"
                underlineColorAndroid="transparent"
                items={portes}
                onValueChange={(value) => setPorte(value)}
                value={porte}
              />
            </View>
          </View>
          <View style={[StylesLoginSingups.inputContainer, StylesLoginSingups.inputCaozinho]}>
            <Image
              source={require("../../assets/image/raca.png")}
              style={[StylesLoginSingups.icons, { marginLeft: -60 }]}
            />
            <TextInput
              style={[StylesLoginSingups.txtInput, StylesLoginSingups.txtCaozinho]}
              placeholder="Raça"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={raca}
              onChangeText={setRaca}
            />
          </View>
          <View style={[StylesLoginSingups.inputContainer, StylesLoginSingups.inputCaozinho]}>
            <Image
              source={require("../../assets/image/castrado.png")}
              style={[StylesLoginSingups.icons, { marginLeft: -60, opacity: 0.65 }]}
            />
            <View
              style={{
                width: "95%",
                alignSelf: "center",
                marginTop: "-1%",
                marginLeft: -20,
                fontSize: 4,
              }}
            >
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                style={pickerStyle}
                placeholder={{ label: "Castrado?", value: null }}
                placeholderTextColor="#b6b6b6"
                underlineColorAndroid="transparent"
                items={status}
                onValueChange={(value) => setStatusReprodutivo(value)}
                value={statusReprodutivo}
              />
            </View>
          </View>
          {errorMessage ? (
            <Text style={StylesLoginSingups.error}>{errorMessage}</Text>
          ) : null}
          <View style={[StylesLoginSingups.button, StylesLoginSingups.buttonCaozinho]}>
            <TouchableOpacity onPress={saveCaozinho}>
              <Text style={{ fontFamily: "NunitoSemiBold", fontSize: 23, color: "#FFFACD" }}>
                ENVIAR
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  datePicker: {
    backgroundColor: 'white',
  },
  datePickerContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default SingupCaozinho;
