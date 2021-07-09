//Importando bibliotecas
import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function InspecaoExterna3({ route }) {
  const navigation = useNavigation();
 //criacao da funcao ir para pagina insp. externa 4
  function irInspecaoExterna4(){
    navigation.navigate('InspecaoExterna4');
  }

  const [selectedValue, setSelectedValue] = useState("Selecione Uma opção");

  return (
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>
    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>
    <View style={{flex: 1, backgroundColor: '#214E88'}}>

    <Text> ACESSÓRIOS </Text> 
    <Text> PURGADOR </Text> 
    <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OK" value="purgadorok" />
        <Picker.Item label="NÃO SE APLICA" value="purgadornao" />
        <Picker.Item label="*1" value="purgadorobs1" />
        <Picker.Item label="*2" value="purgadorobs2" />
        <Picker.Item label="*3" value="purgadorobs3" />
      </Picker>  

      <Text> MEDIDOR DE NÍVEL </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OK" value="mdnOK" />
        <Picker.Item label="NÃO SE APLICA" value="mdnnao" />
        <Picker.Item label="*1" value="mdnobs1" />
        <Picker.Item label="*2" value="mdnobs2" />
        <Picker.Item label="*3" value="mdnobs3" />
      </Picker>  

      <Text> ATERRAMENTO </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OK" value="aterraOK" />
        <Picker.Item label="NÃO SE APLICA" value="aterranao" />
        <Picker.Item label="*1" value="aterraobs1" />
        <Picker.Item label="*2" value="aterraobs2" />
        <Picker.Item label="*3" value="aterraobs3" />
      </Picker>  

      <Text> CONEXÕES, FLANGES E VÁLVULAS </Text>
      <Picker //criação dos pickers (caixas para seleção de opção )
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
         //lista de itens : (picker.item)
      > 
        <Picker.Item label="OK" value="cfvOK" />
        <Picker.Item label="NÃO SE APLICA" value="cfvnao" />
        <Picker.Item label="*1" value="cfvobs1" />
        <Picker.Item label="*2" value="cfvobs2" />
        <Picker.Item label="*3" value="cfvobs3" />
      </Picker>  

      <Text> TUBULAÇÕES </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OK" value="tubOK" />
        <Picker.Item label="NÃO SE APLICA" value="  tubnao" />
        <Picker.Item label="*1" value="tubobs1" />
        <Picker.Item label="*2" value="tubobs2" />
        <Picker.Item label="*3" value="tubobs3" />
      </Picker>  

      <Text> COMPRESSOR </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OK" value="cok" />
        <Picker.Item label="NÃO SE APLICA" value="cnao" />
        <Picker.Item label="*1" value="cobs1" />
        <Picker.Item label="*2" value="cobs2" />
        <Picker.Item label="*3" value="cobs3" />
      </Picker>  

    </View> 

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