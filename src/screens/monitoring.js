// Monitoring.js

import React, { useState } from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import StylesMonitoring from "../styles/stylesMonitoring";
import StylesNote from "../styles/stylesNote";
import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";
import "moment/locale/pt-br";
import DiaService from "../database/diaService";

const Monitoring = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { date } = route.params || { date: moment().format("YYYY-MM-DD") };

  // Garantir que a data está no formato brasileiro
  const formattedDate = moment(date).locale("pt-br").format("DD/MM/YYYY");

  const navigate = () => {
    navigation.navigate("calendar");
  };

  // Estados para armazenar as seleções de cada categoria
  const [selectedFood, setSelectedFood] = useState(null);
  const [selectedWater, setSelectedWater] = useState(null);
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedSleep, setSelectedSleep] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedPee, setSelectedPee] = useState(null);
  const [selectedPoop, setSelectedPoop] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const { createDia } = DiaService();
  const handleMonitoring = (category, value) => {
    switch (category) {
      case "food":
        setSelectedFood(value);
        break;
      case "water":
        setSelectedWater(value);
        break;
      case "mood":
        setSelectedMood(value);
        break;
      case "sleep":
        setSelectedSleep(value);
        break;
      case "activity":
        setSelectedActivity(value);
        break;
      case "pee":
        setSelectedPee(value);
        break;
      case "poop":
        setSelectedPoop(value);
        break;
    }
  };

  const handleSave = async () => {
    try {
      console.log("Antes de chamar create no dia");
      await createDia(
        selectedFood,
        selectedWater,
        selectedMood,
        selectedSleep,
        selectedActivity,
        selectedPee,
        selectedPoop
      );
      console.log("Depois de chamar create no dia");

      setErrorMessage("");
      navigation.navigate("calendar");
    } catch (error) {
      console.log("Erro ao tentar criar o dia", error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={StylesMonitoring.containerFundo}>
      <View style={StylesMonitoring.containerHeader}>
        <TouchableOpacity onPress={handleSave}>
          <Text style={[StylesNote.voltar, {fontSize: 14}]}>⨉</Text>
        </TouchableOpacity>
        <Text style={StylesMonitoring.day}>{formattedDate}</Text>
        <Image
          source={require("../../assets/image/eliminar.png")}
          style={[StylesNote.icons, {marginRight: 20}]}
        />
      </View>
      <ScrollView style={StylesMonitoring.scrollviewContainer}>
        <Text style={[StylesMonitoring.titles, { color: "#007A7D" }]}>
          Água
        </Text>
        <View style={StylesMonitoring.subcontainers}>
          <TouchableOpacity
            onPress={() => handleMonitoring("water", 1)}
            style={[
              StylesMonitoring.buttons,
              selectedWater === 1 && { backgroundColor: "#97FFF1" },
            ]}
          >
            <Image
              source={require("../../assets/image/aguaPouca.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMonitoring("water", 2)}
            style={[
              StylesMonitoring.buttons,
              selectedWater === 2 && { backgroundColor: "#97FFF1" },
            ]}
          >
            <Image
              source={require("../../assets/image/aguaModerada.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMonitoring("water", 3)}
            style={[
              StylesMonitoring.buttons,
              selectedWater === 3 && { backgroundColor: "#97FFF1" },
            ]}
          >
            <Image
              source={require("../../assets/image/aguaMuita.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
        </View>
        <View style={[StylesMonitoring.containerEtiquetas]}></View>
        <Text style={[StylesMonitoring.titles, { color: "#754B00" }]}>
          Comida
        </Text>
        <View style={StylesMonitoring.subcontainers}>
          <TouchableOpacity
            onPress={() => handleMonitoring("food", 1)}
            style={[
              StylesMonitoring.buttons,
              selectedFood === 1 && { backgroundColor: "#F1920E" },
            ]}
          >
            <Image
              source={require("../../assets/image/comidaPouca.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMonitoring("food", 2)}
            style={[
              StylesMonitoring.buttons,
              selectedFood === 2 && { backgroundColor: "#F1920E" },
            ]}
          >
            <Image
              source={require("../../assets/image/comidaModerada.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMonitoring("food", 3)}
            style={[
              StylesMonitoring.buttons,
              selectedFood === 3 && { backgroundColor: "#F1920E" },
            ]}
          >
            <Image
              source={require("../../assets/image/comidaMuita.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
        </View>
        <View style={[StylesMonitoring.containerEtiquetas]}></View>
        <Text style={[StylesMonitoring.titles, { color: "#340070" }]}>
          Sono
        </Text>
        <View style={StylesMonitoring.subcontainers}>
          <TouchableOpacity
            onPress={() => handleMonitoring("sleep", 1)}
            style={[
              StylesMonitoring.buttons,
              selectedSleep === 1 && { backgroundColor: "#340070" },
            ]}
          >
            <Image
              source={require("../../assets/image/sonoPouco.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMonitoring("sleep", 2)}
            style={[
              StylesMonitoring.buttons,
              selectedSleep === 2 && { backgroundColor: "#340070" },
            ]}
          >
            <Image
              source={require("../../assets/image/sonoModerado.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMonitoring("sleep", 3)}
            style={[
              StylesMonitoring.buttons,
              selectedSleep === 3 && { backgroundColor: "#340070" },
            ]}
          >
            <Image
              source={require("../../assets/image/sonoMuito.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
        </View>
        <View style={[StylesMonitoring.containerEtiquetas]}></View>
        <Text style={[StylesMonitoring.titles, { color: "#901000" }]}>
          Humor
        </Text>
        <View style={StylesMonitoring.subcontainers}>
          <TouchableOpacity
            onPress={() => handleMonitoring("mood", 1)}
            style={[
              StylesMonitoring.buttons,
              selectedMood === 1 && { backgroundColor: "#901000" },
            ]}
          >
            <Image
              source={require("../../assets/image/alegre.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMonitoring("mood", 2)}
            style={[
              StylesMonitoring.buttons,
              selectedMood === 2 && { backgroundColor: "#901000" },
            ]}
          >
            <Image
              source={require("../../assets/image/bravo.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMonitoring("mood", 3)}
            style={[
              StylesMonitoring.buttons,
              selectedMood === 3 && { backgroundColor: "#901000" },
            ]}
          >
            <Image
              source={require("../../assets/image/desanimado.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
        </View>
        <View style={[StylesMonitoring.containerEtiquetas]}></View>
        <Text style={[StylesMonitoring.titles, { color: "#3E5E00" }]}>
          Atividade Física
        </Text>
        <View style={StylesMonitoring.subcontainers}>
          <TouchableOpacity
            onPress={() => handleMonitoring("activity", 1)}
            style={[
              StylesMonitoring.buttons,
              selectedActivity === 1 && { backgroundColor: "#3E5E00" },
            ]}
          >
            <Image
              source={require("../../assets/image/exercicioLeve.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMonitoring("activity", 2)}
            style={[
              StylesMonitoring.buttons,
              selectedActivity === 2 && { backgroundColor: "#3E5E00" },
            ]}
          >
            <Image
              source={require("../../assets/image/exercicioModerado.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMonitoring("activity", 3)}
            style={[
              StylesMonitoring.buttons,
              selectedActivity === 3 && { backgroundColor: "#3E5E00" },
            ]}
          >
            <Image
              source={require("../../assets/image/exercicioIntenso.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
        </View>
        <View style={[StylesMonitoring.containerEtiquetas]}></View>
        <Text style={[StylesMonitoring.titles, { color: "#726D48" }]}>
          Xixi
        </Text>
        <View style={StylesMonitoring.subcontainers}>
          <TouchableOpacity
            onPress={() => handleMonitoring("pee", 1)}
            style={[
              StylesMonitoring.buttons,
              selectedPee === 1 && { backgroundColor: "#FFE500" },
            ]}
          >
            <Image
              source={require("../../assets/image/muitoXixi.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMonitoring("pee", 2)}
            style={[
              StylesMonitoring.buttons,
              selectedPee === 2 && { backgroundColor: "#FFE500" },
            ]}
          >
            <Image
              source={require("../../assets/image/consistenciaColoracaoEstranha.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMonitoring("pee", 3)}
            style={[
              StylesMonitoring.buttons,
              selectedPee === 3 && { backgroundColor: "#FFE500" },
            ]}
          >
            <Image
              source={require("../../assets/image/odorForte.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
        </View>
        <View style={[StylesMonitoring.containerEtiquetas]}></View>
        <Text style={[StylesMonitoring.titles, { color: "#714000" }]}>
          Cocô
        </Text>
        <View style={StylesMonitoring.subcontainers}>
          <TouchableOpacity
            onPress={() => handleMonitoring("poop", 1)}
            style={[
              StylesMonitoring.buttons,
              selectedPoop === 1 && { backgroundColor: "#714000" },
            ]}
          >
            <Image
              source={require("../../assets/image/cocoDuro.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMonitoring("poop", 2)}
            style={[
              StylesMonitoring.buttons,
              selectedPoop === 2 && { backgroundColor: "#714000" },
            ]}
          >
            <Image
              source={require("../../assets/image/cocoLiquido.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMonitoring("poop", 3)}
            style={[
              StylesMonitoring.buttons,
              selectedPoop === 3 && { backgroundColor: "#714000" },
            ]}
          >
            <Image
              source={require("../../assets/image/cocoPastoso.png")}
              style={StylesMonitoring.images}
            />
          </TouchableOpacity>
        </View>
        <View style={[StylesMonitoring.containerEtiquetas]}></View>
      </ScrollView>
    </View>
  );
};

export default Monitoring;
