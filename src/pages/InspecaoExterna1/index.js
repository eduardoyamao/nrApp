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

    <Text> VIAS DE ACESSO </Text>
    <Text> VIAS DE CIRCULAÇÃO E ILUMINAÇÃO </Text>
    <Picker //criação dos pickers (caixas para seleção de opção )
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
         //lista de itens : (picker.item)
      > 
        <Picker.Item label="OK" value="viacirculacaoOK" />
        <Picker.Item label="NÃO SE APLICA" value="viacirculacaonao" />
        <Picker.Item label="*1" value="viacirculacaoobs1" />
        <Picker.Item label="*2" value="viacirculacaoobs2" />
        <Picker.Item label="*3" value="viacirculacaoobs3" />
      </Picker>  
      <Text> ESCADAS E ELEVADOR </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OK" value="escadaelevadorOK" />
        <Picker.Item label="NÃO SE APLICA" value="scadaelevadornao" />
        <Picker.Item label="*1" value="scadaelevadorobs1" />
        <Picker.Item label="*2" value="scadaelevadorobs2" />
        <Picker.Item label="*3" value="scadaelevadorobs3" />
      </Picker>  

      <Text> IDENTIFICAÇÃO </Text>
      <Text> PLACA DE IDENTIFICAÇÃO </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OK" value="piOK" />
        <Picker.Item label="NÃO SE APLICA" value="pinao" />
        <Picker.Item label="*1" value="piobs1" />
        <Picker.Item label="*2" value="piobs2" />
        <Picker.Item label="*3" value="piobs3" />
      </Picker>  
      <Text> PLACA DE CATEGORIA </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OK" value="pdcOK" />
        <Picker.Item label="NÃO SE APLICA" value="pdcnao" />
        <Picker.Item label="*1" value="pdcobs1" />
        <Picker.Item label="*2" value="pdcobs2" />
        <Picker.Item label="*3" value="pdcobs3" />
      </Picker>  

      <Text> SUSTENTAÇÃO </Text>

      <Text> FUNDAÇÃO </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OK" value="fundacaoOK" />
        <Picker.Item label="NÃO SE APLICA" value="fundacaonao" />
        <Picker.Item label="*1" value="fundacaoobs1" />
        <Picker.Item label="*2" value="fundacaoobs2" />
        <Picker.Item label="*3" value="fundacaoobs3" />
      </Picker>  
      <Text> ELEMENTOS DE SUSTENTAÇÃO E FIXAÇÃO </Text>
      <Picker //criação dos pickers (caixas para seleção de opção )
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
         //lista de itens : (picker.item)
      > 
        <Picker.Item label="OK" value="sustfix" />
        <Picker.Item label="NÃO SE APLICA" value="vsustfixnao" />
        <Picker.Item label="*1" value="sustfixobs1" />
        <Picker.Item label="*2" value="sustfixobs2" />
        <Picker.Item label="*3" value="sustfixobs3" />
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