import React from "react"
import { View, Text, StyleSheet, TextInput } from 'react-native'
import  Ionicons  from "react-native-vector-icons/Ionicons"

let textoPesquisado = ""


const Cabecalho = ({navigation,text,setText,solicitar}) => {


    return (
        <View>
            <View style={estilo.cabecalho}>
                <Ionicons
                    name="chevron-back"
                    size={40}
                    color='white'
                    onPress={() => navigation.goBack()}
                />
                <TextInput
                    placeholder="Pesquisar"
                    style={estilo.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={text}
                    onChangeText={(value) => {
                        setText(value)
                        if(value === ""){
                            textoPesquisado = ""
                        }
                    }}
                    onSubmitEditing={() => {
                        solicitar(text)
                        textoPesquisado = text
                    }}
                />
                <Ionicons
                    name='search'
                    size={35}
                    color='white'
                    onPress={()=>{
                        solicitar(text)
                        textoPesquisado = text
                    }}
                />
            </View>
            <View style={textoPesquisado!== "" ?{ display: 'flex'} : {display: 'none'}} >
                <Text style={{color:'#fff'}}>Listando os resultados de:<Text style={{fontWeight: 'bold', color: '#5499'}}> {textoPesquisado}</Text></Text>
            </View>
        </View>

    )
}

const estilo = StyleSheet.create({
    cabecalho:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15
    },
    input:{
        backgroundColor:'white',
        flex:1,
        borderRadius:25,
        fontSize:20,
        paddingLeft:15
    }
})

export default Cabecalho