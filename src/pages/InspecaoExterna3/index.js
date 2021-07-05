//Importando bibliotecas
import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function InspecaoExterna3({ route }) {
  const navigation = useNavigation();
 //criacao da funcao ir para pagina insp. externa 4
  function irInspecaoExterna4(){
    navigation.navigate('InspecaoExterna4');
  }

  return (
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>
    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>
    <View style={{flex: 1, backgroundColor: '#214E88'}}></View> 

    <Button  // botao voltar
     title=" Voltar "
     onPress={ () => navigation.goBack() }
     />

    <Button //botao que chama a funcao ir para insp externa pg4
    title="Ir para Inspeção Externa 4"
    onPress={ irInspecaoExterna4 }
    />
    <View style={{height: 120, backgroundColor: '#64CAD9'}}></View>
    </View>
   );
 }