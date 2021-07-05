import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
 //criacao da funcao ir para pagina de inicio
  function irInicio(){
    navigation.navigate('Inicio');
  }

return (
  <View style={{flex: 1, backgroundColor: '#64CAD9'}}>
    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>
    <View style={{flex: 1, backgroundColor: '#FFF'}}></View>
     <Button  // botao ir ao inicio
     title="Ir para Inicio"
     onPress={irInicio}
     />
    <View style={{height: 120, backgroundColor: '#64CAD9'}}></View>
   </View>
  );
}


