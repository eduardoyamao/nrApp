import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Conversoes({ route }) {
  const navigation = useNavigation();
   //criacao da funcao ir para pagina de inicio
  function irInicio(){
    navigation.navigate('Inicio');
  }
  
  return (
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>
    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>

    <View style={{flex: 1, backgroundColor: '#214E88'}}>

        <Text /* fran, coloca as coisas aqui dentro que vc for fazer da conversao */ >
            coloque  tudo aqui   
        </Text> 

    </View> 

    <Button // botao voltar
     title=" Voltar "
     onPress={ () => navigation.goBack() }
     />

    <Button //botao que chama a funcao ir para inicio
    title="Voltar para Inicio!"
    onPress={ irInicio }
    />
    <View style={{height: 120, backgroundColor: '#64CAD9'}}></View>
    </View>
   );
 }