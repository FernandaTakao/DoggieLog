import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import StylesLogin from "../styles/stylesLogin";

const Login = () => {
  return (
    <ScrollView contentContainerStyle={StylesLogin.scrollViewContent}>
      <KeyboardAvoidingView
        style={StylesLogin.containerPrincipal}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <Text style={StylesLogin.title}>BEM-VINDO!</Text>
        <Text style={StylesLogin.subtitle}>LOGIN</Text>

        <View style={StylesLogin.containerFrente}>
            <Image 
              source={require('../../assets/image/enfeite.png')}
              style={StylesLogin.enfeite}
            />
            <Image
              source={require("../../assets/image/fotoLogin.png")}
              style={StylesLogin.foto}
            />

            <View style={StylesLogin.txtBox}>
              <Image
                source={require("../../assets/image/email.png")}
                style={StylesLogin.icons}
              />
              <TextInput
                style={StylesLogin.txtInput}
                placeholder="E-mail"
                underlineColorAndroid="transparent"
                placeholderTextColor="#b6b6b6"
              />
            </View>
            <View style={StylesLogin.txtBox}>
              <Image
                source={require("../../assets/image/senha.png")}
                style={StylesLogin.icons}
              />
              <TextInput
                style={StylesLogin.txtInput}
                placeholder="Senha"
                underlineColorAndroid="transparent"
                placeholderTextColor="#b6b6b6"
              />
            </View>
            <View style={StylesLogin.button}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: "NunitoSemiBold",
                    fontSize: 26,
                    color: "white",
                  }}
                >
                  ENVIAR
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={StylesLogin.txtCadastroSenha}>
                Não tem uma conta?
              </Text>
              <TouchableOpacity>
                <Text
                  style={[
                    StylesLogin.txtCadastroSenha,
                    { textDecorationLine: "underline" },
                  ]}
                >
                  Cadastre-se!
                </Text>
              </TouchableOpacity>
            </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Login;
