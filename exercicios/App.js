import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Primeiro from './componentes/Primeiro';
import {Comp , Comp1 , Comp2} from './componentes/Multi'
import MinMax from './componentes/MinMax';
import Aleatorio from './componentes/Aleatorio';

export default function App() {
  return (
    <View style={estilos.body} >
      <View>
        <StatusBar></StatusBar>
        {/*<Primeiro></Primeiro>
        <Comp></Comp>
        <Comp1></Comp1>
        <Comp2></Comp2>*/}
        {/*<MinMax min={3} max={20} />
        <MinMax min={20} max={30} />*/}
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
      </View>
    </View>
  )
};

const estilos = StyleSheet.create({
  body:{
    backgroundColor:'#ADD8E6',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})