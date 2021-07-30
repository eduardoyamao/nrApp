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
    <View style={styles.container}>
    <TextField
      value={value.toString()}
      label="Valor em MPa"
      placeholder="0.000"
      onChange={setValue}
    />
    {result !== 0 && <Text style={styles.result}>= {result} kgf/cm²</Text>}
    {!isNumber && <ErrorOutput error="Insira um valor numérico" />}
  </View>
   );
 }