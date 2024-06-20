import React from "react";
import { View, TextInput, Image } from "react-native";
import StylesSearchBar from "../styles/stylesSearchBar";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={StylesSearchBar.container}>
      <Image
        source={require("../../assets/image/buscar.png")}
        style={StylesSearchBar.icon}
      />
      <TextInput
        style={StylesSearchBar.input}
        placeholder="Pesquisar nos registros"
        value={searchQuery}
        placeholderTextColor="#A8A8A8"
        placeholderTextSize="14"
        underlineColorAndroid="transparent"
        onChangeText={setSearchQuery}
        theme={{
          colors: {
            placeholder: "#A8A8A8",
            placeholderTextSize: 14,
            text: "#000000",
            underlineColor: "transparent",
            background: "#ffffff",
          },
          fonts: {
            regular: {
              fontFamily: "RobotoRegular",
            },
          },
        }}
      />
    </View>
  );
};

export default SearchBar;
