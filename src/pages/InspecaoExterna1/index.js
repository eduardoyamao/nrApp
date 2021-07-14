//Importando bibliotecas
//https://nativebase.io/
import React, {useState} from 'react';
import { View, Text, Button, ViewPagerAndroidBase, TextInput, Flex } from 'react-native';
import { useNavigation, StyleSheet } from '@react-navigation/native'; 
import { Picker } from '@react-native-picker/picker';  

export default function InspecaoExterna1({ route }) {

  const navigation = useNavigation();
  //funcao que chama a pg inspecao externa 2
  function irInspecaoExterna2(){
    navigation.navigate('InspecaoExterna2');
  }


  // 9 OBSERVAÇÕES !!! 
  // APENAS 3 CAMPOS - APLICA, NÃO APLICA, OBSERVAÇÃO  
  // SE TIVER OBSERVAÇÃO CADA OPÇÃO VAI SER SÓ UMA OBSERVAÇÃO!! ENTÃO APENAS UMA (OK)

  const [viacirculacao, setViacirculacao] = useState("Selecione Uma opção");
  const [selectedescada, setSelectedEscada] = useState("Selecione Uma opção"); 
  const [selectedpio, setSelectedPi] = useState("Selecione Uma opção"); 
  const [selectedpdc, setSelectedPdc] = useState("Selecione Uma opção"); 
  const [selectedfundacao, setSelectedFundacao] = useState("Selecione Uma opção"); 
  const [selectedSustfix, setSelectedsustfix] = useState("Selecione Uma opção"); 
  const [viacirculacaoobs, setViacirculacaoobs] = useState(" ");
  const [selectedescadaobs, setSelectedEscadaobs] = useState(" "); 
  const [selectedpioobs, setSelectedPiobs] = useState(" "); 
  const [selectedpdcobs, setSelectedPdcobs] = useState(" "); 
  const [selectedfundacaoobs, setSelectedFundacaoobs] = useState(" "); 
  const [selectedSustfixobs, setSelectedsustfixobs] = useState(" "); 

  return (
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>

    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>

    <View style={{flex: 1, backgroundColor: '#214E88'}}> 

    <Text> VIAS DE ACESSO </Text>
    <Text> VIAS DE CIRCULAÇÃO E ILUMINAÇÃO </Text>

    
    <Picker //criação dos pickers (caixas para seleção de opção ) // ver como dividir os flex *** 
        selectedValue={viacirculacao}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setViacirculacao(itemValue)}
         //lista de itens : (picker.item)
      > 
        <Picker.Item label="OK" value="viacirculacaoOK" />
        <Picker.Item label="NÃO SE APLICA" value="viacirculacaonao" />
        <Picker.Item label="*OBSERVAÇÃO" value="viacirculacaoobs1" /> 
      </Picker>  

      { viacirculacao == "viacirculacaoobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setViacirculacaoobs}
       />
      }

      <Text> ESCADAS E ELEVADOR </Text>
      <Picker
        selectedValue={selectedescada}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedEscada(itemValue)}
      >
        <Picker.Item label="OK" value="escadaelevadorOK" />
        <Picker.Item label="NÃO SE APLICA" value="scadaelevadornao" />
        <Picker.Item label="*OBSERVACÃO" value="scadaelevadorobs1" /> 
      </Picker>  

      { selectedescada == "scadaelevadorobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedEscadaobs}
       />
      }

      <Text> IDENTIFICAÇÃO </Text>
      <Text> PLACA DE IDENTIFICAÇÃO </Text>
      <Picker
        selectedValue={selectedpio}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedPi(itemValue)}
      >
        <Picker.Item label="OK" value="piOK" />
        <Picker.Item label="NÃO SE APLICA" value="pinao" />
        <Picker.Item label="*OBSERVAÇÃO" value="piobs1" /> 
      </Picker>  

      { selectedpio == "piobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedPiobs}
       />
      }

      <Text> PLACA DE CATEGORIA </Text>
      <Picker
        selectedValue={selectedpdc}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedPdc(itemValue)}
      >
        <Picker.Item label="OK" value="pdcOK" />
        <Picker.Item label="NÃO SE APLICA" value="pdcnao" />
        <Picker.Item label="*OBSERVAÇÃO" value="pdcobs1" /> 
      </Picker>  

      { selectedpdc == "pdcobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedPdcobs}
       />
      }

      <Text> SUSTENTAÇÃO </Text>

      <Text> FUNDAÇÃO </Text>
      <Picker
        selectedValue={selectedfundacao}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedFundacao(itemValue)}
      >
        <Picker.Item label="OK" value="fundacaoOK" />
        <Picker.Item label="NÃO SE APLICA" value="fundacaonao" />
        <Picker.Item label="*OBSERVAÇÃO" value="fundacaoobs1" /> 
      </Picker>  

      { selectedfundacao == "fundacaoobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedFundacaoobs}
       />
      }

      <Text> ELEMENTOS DE SUSTENTAÇÃO E FIXAÇÃO </Text>
      <Picker //criação dos pickers (caixas para seleção de opção )
        selectedValue={selectedSustfix}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedsustfix(itemValue)}
         //lista de itens : (picker.item)
      > 
        <Picker.Item label="OK" value="sustfix" />
        <Picker.Item label="NÃO SE APLICA" value="vsustfixnao" />
        <Picker.Item label="*OBSERVAÇÃO" value="sustfixobs1" /> 
      </Picker>  

      { selectedSustfix == "sustfixobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedsustfixobs}
       />
      }

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