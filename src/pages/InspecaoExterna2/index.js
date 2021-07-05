//Importando bibliotecas
import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function InspecaoExterna2({ route }) {
  const navigation = useNavigation();
 //criacao da funcao ir para pagina insp. externa 3
  function irInspecaoExterna3(){
    navigation.navigate('InspecaoExterna3');
  }

  return (
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>
    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>
    <View style={{flex: 1, backgroundColor: '#214E88'}}></View> 
 
    <Button // botao voltar
     title=" Voltar "
     onPress={ () => navigation.goBack() }
     />
      
    <Button //botao que chama a funcao ir para insp externa pg3
    title="Ir para Inspeção Externa 3"
    onPress={ irInspecaoExterna3 }
    />
    <View style={{height: 120, backgroundColor: '#64CAD9'}}></View>
    </View>
   );
 }