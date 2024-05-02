import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Text, StyleSheet } from "react-native";
import StylesHome from "../styles/stylesHome";

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const placeholder = {
    label: "Escolha um Relatório",
    value: null,
    color: "#FFFFFF",
    fontFamily: "RobotoMedium",
    placeholderTextColor: "#FFFFFF",
    placeholderFontFamily: "RobotoMedium",
    placeholderAlign: "center",
  };
  const options = [
    { label: "Água e comida", value: "option1" },
    { label: "Xixi e cocô", value: "option2" },
    { label: "Sono e humor", value: "option3" },
    { label: "Atividade física", value: "option4" },
  ];
  const pickerStyles = {
    inputIOS: pickerSelectStyles.inputIOS,
    inputAndroid: pickerSelectStyles.inputAndroid,
    placeholder: { color: 'white' },
  };

  return (
    <View style={StylesHome.containerDropdown}>
      <RNPickerSelect 
        placeholder={placeholder}
        placeholderTextColor="#FFFFFF"
        items={options}
        onValueChange={(value) => setSelectedValue(value)}
        style={pickerStyles}
        value={selectedValue}
        icon={{
          top: 10,
          right: 12,
          height: 24,
          width: 24,
          color: "#FFFFFF", 
        }}
      />
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    textAlign: "center",
    fontFamily: "RobotoMedium",
    fontSize: 19,
    color: "#FFFFFF",
    textShadowColor: "#FFFFFF",
    textShadowOffset: { width: 5, height: 5},
    opacity: 1,
    borderColor: "#FFFFFF",
    borderWidth: 0.5,
  },
  inputAndroid: {
    textAlign: "center",
    fontFamily: "RobotoMedium",
    fontSize: 19,
    color: "#FFFFFF",
    textShadowColor: "#FFFFFF",
    textShadowOffset: { width: 5, height: 5 },
    opacity: 1,
    borderColor: "#FFFFFF",
    borderWidth: 0.5,
  },
  other: {
    marginTop: 30,
    textAlign: "center",
    fontFamily: "RobotoMedium",
    fontSize: 19,
    color: "#FFFFFF",
    textShadowColor: "#FFFFFF",
    textShadowOffset: { width: 5, height: 5},
    opacity: 1,
    borderColor: "#FFFFFF",
    borderWidth: 0.5,
  }
});

export default Dropdown;
