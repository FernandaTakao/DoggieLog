

import React from "react"
import { View, StyleSheet, Text } from "react-native"
import StylesNote from "../styles/stylesNote"

const Notepad = ({title, date, text, color}) => {
    {/*title = "teste"
    text = "Valda é linda, Valda é totosa e Valda é um amor"
    date = '00/00/0000'
color = "#FF9385"*/}
    return (
        <View style={[StylesNote.containerPrincipal, {backgroundColor: color}]}>
            <View style={StylesNote.containerTitle}>
                <Text style={StylesNote.title}>{title}</Text>
            </View>
            <View style={StylesNote.containerText}>
                <Text style={StylesNote.txt}>{text}</Text>
            </View>
            <View style={StylesNote.containerDate}>
                <Text style={StylesNote.date}>{date} </Text>
            </View>
            {/* Adicione outros componentes conforme necessário, como data e texto */}
        </View>
    );
}

export default Notepad;
