// Calendar.js

import React, { useState, useEffect } from "react";
import { Text, View, Alert } from "react-native";
import { CalendarList } from "react-native-calendars";
import StylesCalendar from "../styles/stylesCalendar";
import MenuPrincipalIcones, { MenuPrincipalRotulos } from "../components/menuPrincipal";
import StylesMenu from "../styles/stylesMenu";
import { useNavigation } from "@react-navigation/native";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [notes, setNotes] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setSelectedDate("");
    });
    return unsubscribe;
  }, [navigation]);

  const handleDayPress = (day) => {
    const selectedDay = new Date(day.dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // remove time component for comparison

    if (selectedDay > today) {
      Alert.alert("Erro", "Não é possível monitorar dias futuros.");
      return;
    }

    setSelectedDate(day.dateString);
    navigation.navigate("monitoring", { date: day.dateString });
  };

  const today = new Date().toISOString().split('T')[0];

  const markedDates = {
    ...Object.keys(notes).reduce((acc, date) => {
      acc[date] = { 
        marked: true, 
        dots: notes[date].map(note => ({ color: note.color }))
      };
      return acc;
    }, {}),
    [today]: { selected: true, selectedColor: "white", selectedTextColor: "#FF8E72", customStyles: { text: { fontWeight: 'bold' } } }
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
          markingType={'multi-dot'}
          markedDates={markedDates}
          theme={{
            'stylesheet.day.basic': {
              base: {
                width: 32,
                height: 32,
                alignItems: 'center',
                justifyContent: 'center',
              },
              today: {
                backgroundColor: 'white',
                color: '#FF8E72',
                fontWeight: 'bold',
              },
              text: ({ dateString }) => ({
                color: 'black',
                fontWeight: dateString === today ? 'bold' : 'normal',
                opacity: new Date(dateString) > new Date() ? 0.5 : 1,
              }),
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
