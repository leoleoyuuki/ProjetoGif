import React from "react";
import {ImageBackground, Text,View,StyleSheet, Keyboard, Image,  Dimensions} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react"; 
import axios from "axios";
import Cabecalho from "../Components/Cabecalho";
import { FlatList } from "react-native-gesture-handler";

const width = Dimensions.get('window').width
const IMAGE_WIDTH = width * 0.4

const TelaResultado = ({route, navigation})=>{
   
   const[text,setText] = useState('')
   const[data,setData] = useState([])
 


    
    const escolha = route.params.escolha
    const link = `https://api.giphy.com/v1/${escolha}/search`;
    console.log(link)

    const solicitar = async (text)=>{
        Keyboard.dismiss()
        try{
            const resultados = await axios.get(link, {
                params:{
                    api_key: 's7Sgl3zSsw6h2jvpnjerqJg7kfuqChlA',
                    q: text,
                    lang: 'pt'
                }
            })
            console.log(resultados.data.data)
            setData(resultados.data.data)
        }catch(err){
            console.log(err)
        }
    }

 
    return(
        <ImageBackground source={require('../../assets/HomePage.png')}
        style = {estilo.container}>
            <SafeAreaView>
                <Cabecalho 
                    navigation={navigation} 
                    text={text}
                    setText={setText}
                    solicitar={solicitar}
                />
                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({item})=>{
                        return(
                            <View>
                                <Text>{item.title}</Text>
                                <Image source={{uri: item.images.preview_gif.url}} style={{width: 200, height: 200}}
                                />
                            </View>
                        )
                    }}
                />
            </SafeAreaView>
        </ImageBackground>
    )
}
 
const estilo = StyleSheet.create({
container:{
        flex:1
},
image:{
    width:IMAGE_WIDTH,
    height:IMAGE_WIDTH
}
})
 
export default TelaResultado