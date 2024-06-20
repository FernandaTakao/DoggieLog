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
  Alert,
} from "react-native";
import StylesLoginSingups from "../styles/stylesLoginSingups";
import { useNavigation } from "@react-navigation/native";
import { TutorService } from "../database/tutorService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { readTutor } = TutorService();
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate("singupTutor");
  };
  const handleLogin = async () => {
    try {
      const tutor = await readTutor(email);
      if (tutor.length > 0 && tutor[0].senha === password) {
        await AsyncStorage.setItem("user", JSON.stringify(tutor[0]));
        navigation.navigate("home");
      } else {
        Alert.alert("Erro", "Usuário ou senha incorretos.");
      }
    } catch (error) {
      Alert.alert("Erro", "Houve um problema ao tentar logar.");
    }
  };

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
              underlineColorAndroid="transparent"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View style={StylesLoginSingups.button}>
            <TouchableOpacity onPress={handleLogin}>
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
            <Text style={StylesLoginSingups.singupLink}>
              Não tem uma conta?
            </Text>
            <TouchableOpacity onPress={navigate}>
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
