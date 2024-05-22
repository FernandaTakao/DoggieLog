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
import StylesLogin from "../styles/stylesLogin";
import { GetTutors } from "../database/tutorService"
import Tutor from "../models/tutorModel";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const tutor = new Tutor();
  const navigation = useNavigation(); 

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={StylesLogin.containerPrincipal}
    >
      <ScrollView contentContainerStyle={StylesLogin.scrollViewContent}>
      <Text style={StylesLogin.title}>BEM-VINDO!</Text>
      <Text style={StylesLogin.subtitle}>LOGIN</Text>
      <View style={StylesLogin.containerFrente}>
        <Image
          source={require("../../assets/image/enfeite.png")}
          style={StylesLogin.enfeite}
        />
        <Image
          source={require("../../assets/image/fotoLogin.png")}
          style={StylesLogin.foto}
        />
        <View style={StylesLogin.inputContainer}>
          <Image
            source={require("../../assets/image/email.png")}
            style={StylesLogin.icons}
          />
          <TextInput
            style={StylesLogin.txtInput}
            placeholder="E-mail"
            placeholderTextColor="#b6b6b6"
            underlineColorAndroid="transparent"
            placeholderFontFamily="RobotoRegular"
            placeholderFontSize="20"
            value={email}
            onChangeText={setEmail}
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
            placeholderFontFamily="RobotoRegular"
            placeholderFontSize="20"
            underlineColorAndroid="transparent"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={StylesLogin.button}>
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
          <Text style={StylesLogin.singupLink}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={navigation.navigate("singupTutor")}>
            <Text
              style={[
                StylesLogin.singupLink,
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