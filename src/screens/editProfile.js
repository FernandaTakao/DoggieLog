import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import StylesLogin from "../styles/stylesLogin";
import RNPickerSelect from "react-native-picker-select";
import { Calendar, LocaleConfig } from "react-native-calendars";

const SingupCaozinho = () => {
  const [nome, setNome] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [sexo, setSexo] = useState("");
  const [peso, setPeso] = useState("");
  const [porte, setPorte] = useState("");
  const [raca, setRaca] = useState("");
  const [statusReprodutivo, setStatusReprodutivo] = useState("");
  const [date, setDate] = useState("");

  const showCalendar = () => {
    <Calendar
      style={{
        borderWidth: 1,
        borderColor: "gray",
        height: 350,
      }}
      theme={{
        backgroundColor: "#ffffff",
        calendarBackground: "#ffffff",
        textSectionTitleColor: "#b6c1cd",
        selectedDayBackgroundColor: "#00adf5",
        selectedDayTextColor: "#ffffff",
        todayTextColor: "#00adf5",
        dayTextColor: "#2d4150",
        textDisabledColor: "#b6b6b6",
      }}
      onDayPress={(day) => {
        setDate(day.handleDateSelect);
      }}
      markedDates={{
        [date]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: "orange",
        },
      }}
    />;
  };

  const hideCalendar = () => {
    
  };

  const handleDateSelect = (day) => {
    setAniversario(day.dateString);
    hideCalendar();
  };

  const sexos = [
    { label: "Feminino", value: "f" },
    { label: "Masculino", value: "m" },
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
        <Text style={[StylesLogin.title, { marginTop: 20 }]}>DADOS</Text>
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
                marginTop: "2.5%",
                marginLeft: -20,
              }}
            >
              <TouchableOpacity onPress={showCalendar}>
                <Text
                  style={[
                    StylesLogin.txtInput,
                    StylesLogin.txtCaozinho,
                    StylesLogin.placeholder,
                    { color: sexo ? "black" : "#b6b6b6" },
                  ]}
                >
                  {aniversario ? aniversario : "Data de nascimento"}
                </Text>
              </TouchableOpacity>
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
                marginTop: "-1%",
                marginLeft: -20,
                fontSize: 4,
              }}
            >
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                style={{
                  inputIOS: [
                    StylesLogin.txtInput,
                    StylesLogin.txtCaozinho,
                    StylesLogin.placeholder,
                  ],
                  inputAndroid: [
                    StylesLogin.txtInput,
                    StylesLogin.txtCaozinho,
                    StylesLogin.placeholder,
                  ],
                  placeholder: StylesLogin.placeholder,
                }}
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
            <TextInput
              style={[StylesLogin.txtInput, StylesLogin.txtCaozinho]}
              placeholder="Porte"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={porte}
              onChangeText={setPorte}
            />
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
                style={{
                  inputIOS: [
                    StylesLogin.txtInput,
                    StylesLogin.txtCaozinho,
                    StylesLogin.placeholder,
                  ],
                  inputAndroid: [
                    StylesLogin.txtInput,
                    StylesLogin.txtCaozinho,
                    StylesLogin.placeholder,
                  ],
                  placeholder: StylesLogin.placeholder,
                }}
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
            <TouchableOpacity>
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
