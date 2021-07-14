//Importando bibliotecas
import React, {useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';  

export default function InspecaoExterna2({ route }) {
  const navigation = useNavigation();
 //criacao da funcao ir para pagina insp. externa 3
  function irInspecaoExterna3(){
    navigation.navigate('InspecaoExterna3');
  }

  const [selectedValuese, setSelectedValuese] = useState("Selecione Uma opção");
  const [selectedValuecds, setSelectedValuecds] = useState("Selecione Uma opção");
  const [selectedValuejdi, setSelectedValuejdi] = useState("Selecione Uma opção");
  const [selectedValueids, setSelectedValueids] = useState("Selecione Uma opção");
  const [selectedValueidp, setSelectedValueidp] = useState("Selecione Uma opção");
  const [selectedValuep, setSelectedValuep] = useState("Selecione Uma opção");

  const [selectedValueseobs, setSelectedValueseobs] = useState(" ");
  const [selectedValuecdsobs, setSelectedValuecdsobs] = useState(" ");
  const [selectedValuejdiobs, setSelectedValuejdiobs] = useState(" ");
  const [selectedValueidsobs, setSelectedValueidsobs] = useState(" ");
  const [selectedValueidpobs, setSelectedValueidpobs] = useState(" ");
  const [selectedValuepobs, setSelectedValuepobs] = useState(" ");

  return (
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>

    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>

    <View style={{flex: 1, backgroundColor: '#214E88'}}>
    
    <Text> COSTADO </Text>
    <Text> SUPERFÍCIE EXTERNA </Text>
      <Picker
        selectedValue={selectedValuese}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValuese(itemValue)}
      >
        <Picker.Item label="OK" value="supexternaOK" />
        <Picker.Item label="NÃO SE APLICA" value="  supexternanao" />
        <Picker.Item label="*OBSERVAÇÃO" value="supexternaobs1" /> 
      </Picker>  

      { selectedValuese == "supexternaobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedValueseobs}
       />
      }

      <Text> CORDÕES DE SOLDA </Text>
      <Picker
        selectedValue={selectedValuecds}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValuecds(itemValue)}
      >
        <Picker.Item label="OK" value="cordoesok" />
        <Picker.Item label="NÃO SE APLICA" value="cordoesnao" />
        <Picker.Item label="*OBSERVAÇÃO" value="cordoesbs1" /> 
      </Picker>  

      { selectedValuecds == "cordoesbs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedValuecdsobs}
       />
      }

      <Text> JANELA DE INSPEÇÃO </Text>
      <Picker
        selectedValue={selectedValuejdi}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValuejdi(itemValue)}
      >
        <Picker.Item label="OK" value="jinspOK" />
        <Picker.Item label="NÃO SE APLICA" value="jinspnao" />
        <Picker.Item label="*OBSERVAÇÃO" value="jinspobs1" /> 
      </Picker>  

      { selectedValuejdi == "jinspobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedValuejdiobs}
       />
      }

      <Text> ITENS DE SEGURANÇA </Text>
      <Text> VSE </Text>
      <Picker
        selectedValue={selectedValueids}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValueids(itemValue)}
      >
        <Picker.Item label="OK" value="vseOK" />
        <Picker.Item label="NÃO SE APLICA" value="vsenao" />
        <Picker.Item label="*OBSERVAÇÃO" value="vseobs1" /> 
      </Picker>  

      { selectedValueids == "vseobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedValueidsobs}
       />
      }

      <Text> INDICADOR DE PRESSÃO (MANÔMETRO) </Text>
      <Picker //criação dos pickers (caixas para seleção de opção )
        selectedValue={selectedValueidp}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValueidp(itemValue)}
         //lista de itens : (picker.item)
      > 
        <Picker.Item label="OK" value="ipressao" />
        <Picker.Item label="NÃO SE APLICA" value="ipressaonao" />
        <Picker.Item label="*OBSERVAÇÃO" value="ipressaoobs1" /> 
      </Picker>  

      { selectedValueidp == "ipressaoobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedValueidpobs}
       />
      }

      <Text> PRESSOSTATO </Text>
      <Picker
        selectedValue={selectedValuep}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValuep(itemValue)}
      >
        <Picker.Item label="OK" value="pressostatoOK" />
        <Picker.Item label="NÃO SE APLICA" value="  pressostatonao" />
        <Picker.Item label="*OBSERVAÇÃO" value="pressostatoobs1" /> 
      </Picker>  
    
    { selectedValuep == "pressostatoobs1" &&
       <TextInput  
       placeholder="insira a observação"
       underlineColorAndroid="transparent"
       onChangeText={setSelectedValuepobs}
       />
      }
    </View> 

    <Button //botao para voltar
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