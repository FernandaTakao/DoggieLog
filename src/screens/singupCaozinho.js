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
  Modal,
} from "react-native";
import StylesLogin from "../styles/stylesLogin";
import RNPickerSelect from "react-native-picker-select";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import HandleCadastro from "../utils/handleCaozinho"

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

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setSelectedDate(currentDate);
    setAniversario(moment(currentDate).format("DD/MM/YYYY"));
  };

  const showMode = () => {
    setShowDatePicker(true);
  };

  const hideDatePicker = () => {
    setShowDatePicker(false);
  };
  const pickerStyle = {
    inputIOS: [
      StylesLogin.txtInput,
      StylesLogin.txtCaozinho,
      StylesLogin.placeholder,
      { color: sexo ? "black" : "#b6b6b6" },
    ],
    inputAndroid: [
      StylesLogin.txtInput,
      StylesLogin.txtCaozinho,
      StylesLogin.placeholder,
      { color: sexo ? "black" : "#b6b6b6" },
    ],
    placeholder: StylesLogin.placeholder,
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[StylesLogin.containerPrincipal]}
    >
      <ScrollView contentContainerStyle={StylesLogin.scrollViewContent}>
        <Text style={[StylesLogin.title, { marginTop: 20 }]}>CADASTRE-SE!</Text>
        <Text style={StylesLogin.subtitle}>CÃOZINHO</Text>
        <View style={[StylesLogin.containerFrente, { flex: 0.95 }]}>
          <Image
            source={require("../../assets/image/enfeiteInverso.png")}
            style={[StylesLogin.enfeiteInverso]}
          />
          <Image
            source={require("../../assets/image/passo2.png")}
            style={StylesLogin.passo2}
          />
          <Image
            source={require("../../assets/image/enviarFoto.png")}
            style={StylesLogin.enviarFoto}
          />
          <Text style={[StylesLogin.mensagem]}>Carregue uma foto</Text>
          <View style={[StylesLogin.inputContainer, StylesLogin.inputCaozinho]}>
            <Image
              source={require("../../assets/image/nome.png")}
              style={[StylesLogin.icons, { marginLeft: -60 }]}
            />
            <TextInput
              style={[StylesLogin.txtInput, StylesLogin.txtCaozinho]}
              placeholder="Nome"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={[StylesLogin.inputContainer, StylesLogin.inputCaozinho]}>
            <Image
              source={require("../../assets/image/nascimento.png")}
              style={[StylesLogin.icons, { marginLeft: -60 }]}
            />
            <View
              style={{
                width: "95%",
                alignSelf: "center",
                marginTop: "3.5%",
                marginLeft: -20,
              }}
            >
              <TouchableOpacity onPress={showMode}>
                <Text
                  style={[
                    StylesLogin.txtInput,
                    StylesLogin.txtCaozinho,
                    StylesLogin.placeholder,
                    { color: aniversario ? "black" : "#b6b6b6" },
                  ]}
                >
                  {aniversario ? aniversario : "Data de nascimento"}
                </Text>
              </TouchableOpacity>
              {showDatePicker && (
                <Modal transparent animationType="slide">
                  <View style={StylesLogin.overlay}>
                    <DateTimePicker
                      value={selectedDate}
                      mode="date"
                      display="spinner"
                      onChange={handleDateChange}
                    />
                    <TouchableOpacity
                      style={StylesLogin.closeButton}
                      onPress={hideDatePicker}
                    >
                      <Text>Fechar</Text>
                    </TouchableOpacity>
                  </View>
                </Modal>
              )}
            </View>
          </View>
          <View style={[StylesLogin.inputContainer, StylesLogin.inputCaozinho]}>
            <Image
              source={require("../../assets/image/sexo.png")}
              style={[StylesLogin.icons, { marginLeft: -57 }]}
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

          <View style={[StylesLogin.inputContainer, StylesLogin.inputCaozinho]}>
            <Image
              source={require("../../assets/image/peso.png")}
              style={[StylesLogin.icons, { marginLeft: -60 }]}
            />
            <TextInput
              style={[StylesLogin.txtInput, StylesLogin.txtCaozinho]}
              placeholder="Peso"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={peso}
              onChangeText={setPeso}
            />
          </View>
          <View style={[StylesLogin.inputContainer, StylesLogin.inputCaozinho]}>
            <Image
              source={require("../../assets/image/porte.png")}
              style={[StylesLogin.icons, { marginLeft: -60 }]}
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
          <View style={[StylesLogin.inputContainer, StylesLogin.inputCaozinho]}>
            <Image
              source={require("../../assets/image/raca.png")}
              style={[StylesLogin.icons, { marginLeft: -60 }]}
            />
            <TextInput
              style={[StylesLogin.txtInput, StylesLogin.txtCaozinho]}
              placeholder="Raça"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={raca}
              onChangeText={setRaca}
            />
          </View>
          <View style={[StylesLogin.inputContainer, StylesLogin.inputCaozinho]}>
            <Image
              source={require("../../assets/image/castrado.png")}
              style={[StylesLogin.icons, { marginLeft: -60, opacity: 0.65 }]}
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
          <View style={[StylesLogin.button, StylesLogin.buttonCaozinho]}>
            <TouchableOpacity onPress={HandleCadastro}>
              <Text
                style={{
                  fontFamily: "NunitoSemiBold",
                  fontSize: 23,
                  color: "#FFFACD",
                }}
              >
                ENVIAR
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SingupCaozinho;
