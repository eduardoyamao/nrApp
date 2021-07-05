//Importando bibliotecas
import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function InspecaoExterna1({ route }) {
  const navigation = useNavigation();
  //funcao que chama a pg inspecao externa 2
  function irInspecaoExterna2(){
    navigation.navigate('InspecaoExterna2');
  }

  return (
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>
    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>
    <View style={{flex: 1, backgroundColor: '#214E88'}}></View> 
    
    <Button //botao para voltar
     title=" Voltar "
     onPress={ () => navigation.goBack() }
     />

    <Button //botao que chama a funcao para ir insp. 2
     title=" Ir para Inspeção Externa 2 "
     onPress={irInspecaoExterna2}
     />
    <View style={{height: 120, backgroundColor: '#64CAD9'}}></View>
    </View>
   ); 
 }