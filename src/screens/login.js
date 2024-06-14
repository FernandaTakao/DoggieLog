import React, { useState, useEffect } from "react";
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
import { GetTutors } from "../database/tutorService"
import Tutor from "../model/tutorModel";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const tutor = new Tutor();
  const navigation = useNavigation(); 

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={StylesLoginSingups.containerPrincipal}
    >
      <ScrollView contentContainerStyle={StylesLoginSingups.scrollViewContent}>
      <Text style={StylesLoginSingups.title}>BEM-VINDO!</Text>
      <Text style={StylesLoginSingups.subtitle}>LOGIN</Text>
      <View style={StylesLoginSingups.containerFrente}>
        <Image
          source={require("../../assets/image/enfeite.png")}
          style={StylesLoginSingups.enfeite}
        />
        <Image
          source={require("../../assets/image/fotoLogin.png")}
          style={StylesLoginSingups.foto}
        />
        <View style={StylesLoginSingups.inputContainer}>
          <Image
            source={require("../../assets/image/email.png")}
            style={StylesLoginSingups.icons}
          />
          <TextInput
            style={StylesLoginSingups.txtInput}
            placeholder="E-mail"
            placeholderTextColor="#b6b6b6"
            underlineColorAndroid="transparent"
            placeholderFontFamily="RobotoRegular"
            placeholderFontSize="20"
            value={email}
            onChangeText={setEmail}
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
            placeholderFontFamily="RobotoRegular"
            placeholderFontSize="20"
            underlineColorAndroid="transparent"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={StylesLoginSingups.button}>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: "NunitoSemiBold",
                fontSize: 30,
                color: "white",
              }}
            >
              ENVIAR
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={StylesLoginSingups.singupLink}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={navigation.navigate("singupTutor")}>
            <Text
              style={[
                StylesLoginSingups.singupLink,
                { textDecorationLine: "underline" },
              ]}
            >
              Cadastre-se!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;