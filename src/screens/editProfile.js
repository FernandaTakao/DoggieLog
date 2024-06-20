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
} from "react-native";
import StylesLoginSingups from "../styles/stylesLoginSingups";
import RNPickerSelect from "react-native-picker-select";
import { Calendar } from "react-native-calendars";

const EditeProfile = () => {
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

  const hideCalendar = () => {};

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
      style={[StylesLoginSingups.containerPrincipal]}
    >
      <ScrollView contentContainerStyle={StylesLoginSingups.scrollViewContent}>
        <Text style={[StylesLoginSingups.title, { marginTop: 20 }]}>DADOS</Text>
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
          <View
            style={[
              StylesLoginSingups.inputContainer,
              StylesLoginSingups.inputCaozinho,
            ]}
          >
            <Image
              source={require("../../assets/image/nome.png")}
              style={[StylesLoginSingups.icons, { marginLeft: -60 }]}
            />
            <TextInput
              style={[
                StylesLoginSingups.txtInput,
                StylesLoginSingups.txtCaozinho,
              ]}
              placeholder="Nome"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={nome}
              onChangeText={setNome}
            />
          </View>
          <View
            style={[
              StylesLoginSingups.inputContainer,
              StylesLoginSingups.inputCaozinho,
            ]}
          >
            <Image
              source={require("../../assets/image/nascimento.png")}
              style={[StylesLoginSingups.icons, { marginLeft: -60 }]}
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
                    StylesLoginSingups.txtInput,
                    StylesLoginSingups.txtCaozinho,
                    StylesLoginSingups.placeholder,
                    { color: sexo ? "black" : "#b6b6b6" },
                  ]}
                >
                  {aniversario ? aniversario : "Data de nascimento"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={[
              StylesLoginSingups.inputContainer,
              StylesLoginSingups.inputCaozinho,
            ]}
          >
            <Image
              source={require("../../assets/image/sexo.png")}
              style={[StylesLoginSingups.icons, { marginLeft: -57 }]}
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
                    StylesLoginSingups.txtInput,
                    StylesLoginSingups.txtCaozinho,
                    StylesLoginSingups.placeholder,
                  ],
                  inputAndroid: [
                    StylesLoginSingups.txtInput,
                    StylesLoginSingups.txtCaozinho,
                    StylesLoginSingups.placeholder,
                  ],
                  placeholder: StylesLoginSingups.placeholder,
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

          <View
            style={[
              StylesLoginSingups.inputContainer,
              StylesLoginSingups.inputCaozinho,
            ]}
          >
            <Image
              source={require("../../assets/image/peso.png")}
              style={[StylesLoginSingups.icons, { marginLeft: -60 }]}
            />
            <TextInput
              style={[
                StylesLoginSingups.txtInput,
                StylesLoginSingups.txtCaozinho,
              ]}
              placeholder="Peso"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={peso}
              onChangeText={setPeso}
            />
          </View>
          <View
            style={[
              StylesLoginSingups.inputContainer,
              StylesLoginSingups.inputCaozinho,
            ]}
          >
            <Image
              source={require("../../assets/image/porte.png")}
              style={[StylesLoginSingups.icons, { marginLeft: -60 }]}
            />
            <TextInput
              style={[
                StylesLoginSingups.txtInput,
                StylesLoginSingups.txtCaozinho,
              ]}
              placeholder="Porte"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={porte}
              onChangeText={setPorte}
            />
          </View>
          <View
            style={[
              StylesLoginSingups.inputContainer,
              StylesLoginSingups.inputCaozinho,
            ]}
          >
            <Image
              source={require("../../assets/image/raca.png")}
              style={[StylesLoginSingups.icons, { marginLeft: -60 }]}
            />
            <TextInput
              style={[
                StylesLoginSingups.txtInput,
                StylesLoginSingups.txtCaozinho,
              ]}
              placeholder="Raça"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={raca}
              onChangeText={setRaca}
            />
          </View>
          <View
            style={[
              StylesLoginSingups.inputContainer,
              StylesLoginSingups.inputCaozinho,
            ]}
          >
            <Image
              source={require("../../assets/image/castrado.png")}
              style={[
                StylesLoginSingups.icons,
                { marginLeft: -60, opacity: 0.65 },
              ]}
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
                    StylesLoginSingups.txtInput,
                    StylesLoginSingups.txtCaozinho,
                    StylesLoginSingups.placeholder,
                  ],
                  inputAndroid: [
                    StylesLoginSingups.txtInput,
                    StylesLoginSingups.txtCaozinho,
                    StylesLoginSingups.placeholder,
                  ],
                  placeholder: StylesLoginSingups.placeholder,
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
          <View
            style={[
              StylesLoginSingups.button,
              StylesLoginSingups.buttonCaozinho,
            ]}
          >
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

export default EditeProfile;
