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
import { useNavigation } from "@react-navigation/native";
import { useRegisterContext } from "../components/registerContext";
import Tutor from "../model/tutorModel";

const SingupTutor = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();
  const { saveTutorData } = useRegisterContext();
  const { createT, checkUserExists } = Tutor();

  const saveTutor = async () => {
    try {
      if (!user.trim() || !password.trim() || !passwordConfirm.trim()) {
        throw new Error("Por favor, preencha todos os campos.");
      }
      if (user.length < 8 || password.length < 8) {
        throw new Error(
          "A senha e o nome de usuário devem ter no mínimo 8 caracteres!"
        );
      }
      if (password !== passwordConfirm) {
        throw new Error("As senhas não coincidem!");
      }

      const userExists = await checkUserExists(user);
      if (userExists) {
        throw new Error("Nome de usuário já existe!");
      }

      saveTutorData({ user, password });
      await createT(user, password);
      navigation.navigate("singupCaozinho");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={StylesLoginSingups.containerPrincipal}
    >
      <ScrollView contentContainerStyle={StylesLoginSingups.scrollViewContent}>
        <Text style={StylesLoginSingups.title}>CADASTRE-SE!</Text>
        <Text style={StylesLoginSingups.subtitle}>TUTOR</Text>
        <View style={StylesLoginSingups.containerFrente}>
          <Image
            source={require("../../assets/image/enfeiteInverso.png")}
            style={[StylesLoginSingups.enfeiteInverso]}
          />
          <Image
            source={require("../../assets/image/passo1.png")}
            style={StylesLoginSingups.passo1}
          />
          <Text style={StylesLoginSingups.text}>
            Vamos adicionar seus dados cadastrais. Memorize-os bem ou anote-os
            num lugar seguro, pois será com eles que você acessará o sistema
            daqui em diante.
          </Text>
          <View style={[StylesLoginSingups.inputContainer, { marginTop: 30 }]}>
            <Image
              source={require("../../assets/image/email.png")}
              style={StylesLoginSingups.icons}
            />
            <TextInput
              style={StylesLoginSingups.txtInput}
              placeholder="Nome de usuário"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={user}
              onChangeText={setUser}
            />
          </View>
          <View style={StylesLoginSingups.inputContainer}>
            <Image
              source={require("../../assets/image/senha.png")}
              style={StylesLoginSingups.icons}
            />
            <TextInput
              style={StylesLoginSingups.txtInput}
              placeholder="Senha"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View style={StylesLoginSingups.inputContainer}>
            <Image
              source={require("../../assets/image/senha.png")}
              style={StylesLoginSingups.icons}
            />
            <TextInput
              style={StylesLoginSingups.txtInput}
              placeholder="Repita sua senha"
              placeholderTextColor="#b6b6b6"
              underlineColorAndroid="transparent"
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
              secureTextEntry
            />
          </View>
          {errorMessage ? (
            <Text style={StylesLoginSingups.error}>{errorMessage}</Text>
          ) : null}
          <TouchableOpacity
            style={StylesLoginSingups.button}
            onPress={saveTutor}
          >
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
