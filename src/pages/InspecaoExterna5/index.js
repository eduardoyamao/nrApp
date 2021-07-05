//Importando bibliotecas
import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function InspecaoExterna5({ route }) {
  const navigation = useNavigation();
  //criacao da funcao ir para tela de confirmacao
  function irTelaConfirmacao(){
    navigation.navigate('TelaConfirmacao');
  }

  return (
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>
    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>
    <View style={{flex: 1, backgroundColor: '#214E88'}}></View> 
  
    <Button // botao voltar
     title=" Voltar "
     onPress={ () => navigation.goBack() }
     />
       
    <Button //botao que chama a funcao ir para revisao
    title="Ir para Revisão"
    onPress={ irTelaConfirmacao }
    />
    <View style={{height: 120, backgroundColor: '#64CAD9'}}></View>
    </View>
   );
 }