import React from "react"
import { Text, View } from "react-native"


const Resultado =  ({route}) => {

    const {escolha} = route.params
    console.log(escolha)
    const link = `api.giphy.com/v1/${escolha}/search`
    return(
        <View>
            <Text>Tela Resultado</Text>
        </View>
    )
}


export default Resultado