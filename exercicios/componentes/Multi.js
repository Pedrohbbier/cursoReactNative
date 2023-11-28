import React from "react";
import { Text } from "react-native";
import estilo from './estilo'

export const Comp = () => {
    return <Text style={estilo.textG} >Comp #Oficial</Text>
}

export const Comp1 = () => {
    return <Text style={estilo.textG} >Comp #01</Text>
}

export const Comp2 = () => {
    return (
        <Text style={estilo.textG} >Comp #02</Text>
    )
}