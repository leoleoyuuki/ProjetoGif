import React, { useState } from 'react'
import { Text,View, StyleSheet, Keyboard } from 'react-native'
import {Ionicons} from 'react-native-vector-icons'
import { TextInput } from "react-native-gesture-handler";
import axios from 'axios';

const cabecalho = ({navigation,text,setText, solicitar})=> {


  return (
    <View style={estilo.cabecalho}>
    <Ionicons name ='chevron-back'
    size = {40}
    color= 'white' 
    onPress={()=> navigation.goBack()}
    />
    <TextInput
    placeholder="Pesquisar"
    autoCapitalize="none"
    autoCorrect={false}
    value={text}
    onChangeText={(value)=> setText(value)}
    style={estilo.input}
    onSubmitEditing={()=> solicitar(text)}
    />
    <Ionicons name = 'search' size={40} color = 'white' onPress={()=> solicitar(text)} />
</View>
  )
}

const estilo = StyleSheet.create({
    container:{
            flex:1
    },
    cabecalho:{
        flexDirection : 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    input:{
        backgroundColor:'#fff',
        flex: 1,
        borderRadius: 25
    }
    })
export default cabecalho