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

  const [selectedValuepur, setSelectedValuepur] = useState("Selecione Uma opção");
  const [selectedValuemdn, setSelectedValuemdn] = useState("Selecione Uma opção");
  const [selectedValueat, setSelectedValueat] = useState("Selecione Uma opção");
  const [selectedValuecfv, setSelectedValuecfv] = useState("Selecione Uma opção");
  const [selectedValuetub, setSelectedValuetub] = useState("Selecione Uma opção");
  const [selectedValuecomp, setSelectedValuecomp] = useState("Selecione Uma opção");

  const [selectedValuepurobs, setSelectedValuepurobs] = useState("Selecione Uma opção");
  const [selectedValuemdnobs, setSelectedValuemdnobs] = useState("Selecione Uma opção");
  const [selectedValueatobs, setSelectedValueatobs] = useState("Selecione Uma opção");
  const [selectedValuecfvobs, setSelectedValuecfvobs] = useState("Selecione Uma opção");
  const [selectedValuetubobs, setSelectedValuetubobs] = useState("Selecione Uma opção");
  const [selectedValuecompobs, setSelectedValuecompobs] = useState("Selecione Uma opção");

  return (
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>
    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>
    <View style={{flex: 1, backgroundColor: '#214E88'}}>

    <Text> ACESSÓRIOS </Text> 
    <Text> PURGADOR </Text> 
    <Picker
        selectedValue={selectedValuepur}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValuepur(itemValue)}
      >
        <Picker.Item label="OK" value="purgadorok" />
        <Picker.Item label="NÃO SE APLICA" value="purgadornao" />
        <Picker.Item label="*OBSERVAÇÃO" value="purgadorobs1" /> 
      </Picker>  

      { selectedValuepur == "purgadorobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedValuepurobs}
       />
      }


      <Text> MEDIDOR DE NÍVEL </Text>
      <Picker
        selectedValue={selectedValuemdn}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValuemdn(itemValue)}
      >
        <Picker.Item label="OK" value="mdnOK" />
        <Picker.Item label="NÃO SE APLICA" value="mdnnao" />
        <Picker.Item label="*OBSERVAÇÃO" value="mdnobs1" /> 
      </Picker>  

      { selectedValuemdn == "mdnobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedValuemdnobs}
       />
      }


      <Text> ATERRAMENTO </Text>
      <Picker
        selectedValue={selectedValueat}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValueat(itemValue)}
      >
        <Picker.Item label="OK" value="aterraOK" />
        <Picker.Item label="NÃO SE APLICA" value="aterranao" />
        <Picker.Item label="*OBSERVAÇÃO" value="aterraobs1" /> 
      </Picker>  

      { selectedValueat == "aterraobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedValueatobs}
       />
      }


      <Text> CONEXÕES, FLANGES E VÁLVULAS </Text>
      <Picker //criação dos pickers (caixas para seleção de opção )
        selectedValue={selectedValuecfv}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValuecfv(itemValue)}
         //lista de itens : (picker.item)
      > 
        <Picker.Item label="OK" value="cfvOK" />
        <Picker.Item label="NÃO SE APLICA" value="cfvnao" />
        <Picker.Item label="*OBSERVAÇÃO" value="cfvobs1" /> 
      </Picker>  

      { selectedValuecfv == "cfvobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedValuecfvobs}
       />
      }


      <Text> TUBULAÇÕES </Text>
      <Picker
        selectedValue={selectedValuetub}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValuetub(itemValue)}
      >
        <Picker.Item label="OK" value="tubOK" />
        <Picker.Item label="NÃO SE APLICA" value="  tubnao" />
        <Picker.Item label="*OBSERVAÇÃO" value="tubobs1" /> 
      </Picker>  

      { selectedValuetub == "tubobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedValuetubobs}
       />
      }


      <Text> COMPRESSOR </Text>
      <Picker
        selectedValue={selectedValuecomp}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValuecomp(itemValue)}
      >
        <Picker.Item label="OK" value="cok" />
        <Picker.Item label="NÃO SE APLICA" value="cnao" />
        <Picker.Item label="*OBSERVAÇÃO" value="cobs1" /> 
      </Picker>  


      { selectedValuecomp == "cobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedValuecompobs}
       />
      }
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