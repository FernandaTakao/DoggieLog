import React, { useState, useEffect } from "react";
import { Text, View, Alert } from "react-native";
import { CalendarList } from "react-native-calendars";
import StylesCalendar from "../styles/stylesCalendar";
import MenuPrincipalIcones, { MenuPrincipalRotulos } from "../components/menuPrincipal";
import StylesMenu from "../styles/stylesMenu";
import { useNavigation } from "@react-navigation/native";
import DiaService from "../database/diaService";
import moment from 'moment-timezone';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [notes, setNotes] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setSelectedDate("");
      fetchNotes();
    });
    return unsubscribe;
  }, [navigation]);

  const fetchNotes = async () => {
    const { readAllDias } = DiaService();
    const dias = await readAllDias();
    const formattedNotes = dias.reduce((acc, dia) => {
      acc[dia.date] = {
        dots: [
          dia.agua && { color: "#97FFF1" },
          dia.comida && { color: "#F1920E" },
          dia.sono && { color: "#340070" },
          dia.humor && { color: "#901000" },
          dia.atividadeFisica && { color: "#3E5E00" },
          dia.xixi && { color: "#FFE500" },
          dia.coco && { color: "#714000" },
        ].filter(Boolean),
      };
      return acc;
    }, {});
    setNotes(formattedNotes);
  };

  const handleDayPress = (day) => {
    const selectedDay = moment(day.dateString).startOf('day');
    const today = moment().tz("America/Sao_Paulo").startOf('day');

    if (selectedDay.isAfter(today)) {
      Alert.alert("Erro", "Não é possível monitorar dias futuros.");
      return;
    }

    setSelectedDate(day.dateString);
    navigation.navigate("monitoring", { date: day.dateString });
  };

  const today = moment().tz("America/Sao_Paulo").format("YYYY-MM-DD");

  const markedDates = {
    ...Object.keys(notes).reduce((acc, date) => {
      acc[date] = {
        marked: true,
        dots: notes[date].dots,
      };
      return acc;
    }, {}),
    [today]: {
      customStyles: {
        container: {
          backgroundColor: 'white',
        },
        text: {
          color: '#FF8E72',
          fontWeight: 'bold',
        },
      },
    },
  };

  return (
    <View style={StylesCalendar.containerFundo}>
      <View style={StylesCalendar.header}>
        <Text style={{ color: "#2A3F00", fontFamily: "RobotoMedium", fontSize: 25 }}>
          Calendário
        </Text>
      </View>
      <View style={StylesCalendar.calendario}>
        <CalendarList
          onDayPress={handleDayPress}
          markingType={"custom"}
          markedDates={markedDates}
          theme={{
            todayTextColor: '#FF8E72',
            textDayFontWeight: 'bold',
            textDayFontSize: 16,
            "stylesheet.day.basic": {
              base: {
                width: 32,
                height: 32,
                alignItems: "center",
                justifyContent: "center",
              },
              text: {
                color: "#2d4150",
                fontWeight: "normal",
                fontSize: 14,
                backgroundColor: "rgba(255, 255, 255, 0)",
                textAlign: "center",
              },
            },
          }}
        />
      </View>
      <MenuPrincipalIcones style={StylesMenu.containerMenu} />
      <MenuPrincipalRotulos style={StylesMenu.containerEtiquetas} />
    </View>
  );
};

export default Calendar;
