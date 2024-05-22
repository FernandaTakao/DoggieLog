import React, { useState, useContext } from "react";
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
import StylesLogin from "../styles/stylesLogin";
import { useNavigation } from "@react-navigation/native";
import { SQLiteContext } from "expo-sqlite";
import { createTutor } from "../models/tutorModel";

const SingupTutor = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();

  const saveTutor = async () => {
    try {
      await createTutor(user, password, passwordConfirm);
      setErrorMessage("");
      navigation.navigate("singupCaozinho");
    } catch (error) {
      console.log("não conseguiu entrar na função de criar");
      setErrorMessage(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={StylesLogin.containerPrincipal}
    >
      <ScrollView contentContainerStyle={StylesLogin.scrollViewContent}>
        <Text style={StylesLogin.title}>CADASTRE-SE!</Text>
        <Text style={StylesLogin.subtitle}>TUTOR</Text>
        <View style={StylesLogin.containerFrente}>
          <Image
            source={require("../../assets/image/enfeiteInverso.png")}
            style={[StylesLogin.enfeiteInverso]}
          />
          <Image
            source={require("../../assets/image/passo1.png")}
            style={StylesLogin.passo1}
          />
          <Text style={StylesLogin.text}>
            Vamos adicionar seus dados cadastrais. Memorize-os bem ou anote-os
            num lugar seguro, pois será com eles que você acessará o sistema
            daqui em diante.
          </Text>
          <View style={[StylesLogin.inputContainer, { marginTop: 30 }]}>
            <Image
              source={require("../../assets/image/email.png")}
              style={StylesLogin.icons}
            />
            <TextInput
              style={StylesLogin.txtInput}
              placeholder="Nome de usuário"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={user}
              onChangeText={setUser}
            />
          </View>
          <View style={StylesLogin.inputContainer}>
            <Image
              source={require("../../assets/image/senha.png")}
              style={StylesLogin.icons}
            />
            <TextInput
              style={StylesLogin.txtInput}
              placeholder="Senha"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View style={StylesLogin.inputContainer}>
            <Image
              source={require("../../assets/image/senha.png")}
              style={StylesLogin.icons}
            />
            <TextInput
              style={StylesLogin.txtInput}
              placeholder="Repita sua senha"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
              secureTextEntry
            />
          </View>
          {errorMessage ? (
            <Text style={StylesLogin.errorMessage}>{errorMessage}</Text>
          ) : null}
          <TouchableOpacity style={StylesLogin.button} onPress={saveTutor}>
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SingupTutor;
