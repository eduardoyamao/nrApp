//Importando bibliotecas
import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { Picker } from '@react-native-picker/picker';  

export default function InspecaoExterna1({ route }) {
  const navigation = useNavigation();
  //funcao que chama a pg inspecao externa 2
  function irInspecaoExterna2(){
    navigation.navigate('InspecaoExterna2');
  }

  const [selectedValue, setSelectedValue] = useState("Selecione Uma opção");

  return (
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>

    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>

    <View style={{flex: 1, backgroundColor: '#214E88'}}>

    
    <Picker //criação dos pickers (caixas para seleção de opção )
        selectedValue={selectedValue}
        style={{ height: 200, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
         //lista de itens : (picker.item)
      > 
        <Picker.Item label="Java" value="java" /> 
        <Picker.Item label="JavaScript" value="js" />
      </Picker>  

      <Picker
        selectedValue={selectedValue}
        style={{ height: 200, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>  

      <Picker
        selectedValue={selectedValue}
        style={{ height: 200, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>  

      <Picker
        selectedValue={selectedValue}
        style={{ height: 200, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>  

      <Picker
        selectedValue={selectedValue}
        style={{ height: 200, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>  
    </View> 
    
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