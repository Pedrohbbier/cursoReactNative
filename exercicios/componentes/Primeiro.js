import React from "react";
import { View , Text } from "react-native";
import estilo from './estilo'

function Primeiro (){
    return(
        <View>
            <Text style={estilo.textG} >Componente 1</Text>
            <Text style={estilo.textG} >{1 + 2 + 5}</Text>
        </View>
    )
}

export default Primeiro;
