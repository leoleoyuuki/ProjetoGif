import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons  from "react-native-vector-icons/Ionicons"

export default function CabecalhoFlat({mostrarCabecalho}) {
  return mostrarCabecalho ?(
    
    <View style={estilo.cabecalhoFlat}>
      <Ionicons name="arrow-up" size={40} color="white" />
      <Text style={estilo.txtHeaderFlat}>
        Use o campo acima para pesquisar
      </Text>
    </View> 
  ): null;
}

const estilo = StyleSheet.create({
    cabecalhoFlat:{
        alignItems:'center',
        margin: 20
    },
    txtHeaderFlat:{
        color:'white',
        fontSize:18,
        textAlign:'center'
    }
})