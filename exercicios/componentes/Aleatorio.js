import React from "react"
import { Text } from "react-native"
import estilo from "./estilo"

export default (props) => {
    const delta = props.max - props.min + 1
    const aleatorio = parseInt(Math.random() * delta) + props.min
    return(
        <Text style={estilo.textG} >
            O valor aleatório é {aleatorio}
        </Text>
    )
}