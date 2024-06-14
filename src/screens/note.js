

// note.js

import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import StylesNote from "../styles/stylesNote";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

const Note = () => {
  const [isEditingText, setIsEditingText] = useState(false);
  const [noteTitle, setNoteTitle] = useState("Valda é um amor");
  const [noteText, setNoteText] = useState("Aqui virá o conteúdo da nota.");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [colorPickerVisible, setColorPickerVisible] = useState(false);

  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate("logs");
  };
  const handleTextEditToggle = () => {
    setIsEditingText(!isEditingText);
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color);
    setColorPickerVisible(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[StylesNote.fundo, { backgroundColor }]}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          width: widthPercentageToDP("100%"),
          height: heightPercentageToDP("100%"),
        }}
      >
        <View style={StylesNote.header}>
          <TouchableOpacity onPress={navigate}>
            <Text style={StylesNote.voltar}> x </Text>
          </TouchableOpacity>
          {isEditingText ? (
            <Text style={StylesNote.titulo}>{noteTitle}</Text>
          ) : (
            <TouchableOpacity onPress={() => setIsEditingText(false)}>
              <Text
                style={StylesNote.titulo}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {noteTitle}
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={handleTextEditToggle}>
            <Image
              source={require("../../assets/image/alterar.png")}
              style={StylesNote.icons}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setColorPickerVisible(true)}>
            <Image
              source={require("../../assets/image/mudarCorNota.png")}
              style={StylesNote.icons}
            />
          </TouchableOpacity>
          <Image
            source={require("../../assets/image/eliminar.png")}
            style={StylesNote.icons}
          />
        </View>
        <View style={StylesNote.containerText}>
          {isEditingText ? (
            <TextInput
              style={StylesNote.texto}
              value={noteText}
              onChangeText={setNoteText}
              autoFocus
              multiline
              maxLength={3000}
            />
          ) : (
            <TouchableOpacity onPress={handleTextEditToggle}>
              <ScrollView st>
                <Text style={StylesNote.texto}>{noteText}</Text>
              </ScrollView>
            </TouchableOpacity>
          )}
        </View>

        <Modal
          visible={colorPickerVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={StylesNote.modalContainer}>
            <View style={StylesNote.colorPicker}>
              {["#E4FFF2", "#FFC8C2", "#F0FFCF", "#FFF5C3", "#F7E9FF"].map(
                (color) => (
                  <TouchableOpacity
                    key={color}
                    style={[StylesNote.colorOption, { backgroundColor: color }]}
                    onPress={() => handleColorChange(color)}
                  />
                )
              )}
            </View>
          </View>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Note;
