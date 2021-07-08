//Importando bibliotecas
import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';  

export default function InspecaoExterna2({ route }) {
  const navigation = useNavigation();
 //criacao da funcao ir para pagina insp. externa 3
  function irInspecaoExterna3(){
    navigation.navigate('InspecaoExterna3');
  }

  const [selectedValue, setSelectedValue] = useState("Selecione Uma opção");

  return (
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>

    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>

    <View style={{flex: 1, backgroundColor: '#214E88'}}>
    

      <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OK" value="supexternaOK" />
        <Picker.Item label="NÃO SE APLICA" value="  supexternanao" />
        <Picker.Item label="*1" value="supexternaobs1" />
        <Picker.Item label="*2" value="supexternaobs2" />
        <Picker.Item label="*3" value="supexternaobs3" />
      </Picker>  

      <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OK" value="cordoesok" />
        <Picker.Item label="NÃO SE APLICA" value="cordoesnao" />
        <Picker.Item label="*1" value="cordoesbs1" />
        <Picker.Item label="*2" value="cordoesobs2" />
        <Picker.Item label="*3" value="cordoesobs3" />
      </Picker>  
      <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OK" value="jinspOK" />
        <Picker.Item label="NÃO SE APLICA" value="jinspnao" />
        <Picker.Item label="*1" value="jinspobs1" />
        <Picker.Item label="*2" value="jinspobs2" />
        <Picker.Item label="*3" value="jinspobs3" />
      </Picker>  

      <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OK" value="vseOK" />
        <Picker.Item label="NÃO SE APLICA" value="vsenao" />
        <Picker.Item label="*1" value="vseobs1" />
        <Picker.Item label="*2" value="vseobs2" />
        <Picker.Item label="*3" value="vseobs3" />
      </Picker>  

      <Picker //criação dos pickers (caixas para seleção de opção )
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
         //lista de itens : (picker.item)
      > 
        <Picker.Item label="OK" value="ipressao" />
        <Picker.Item label="NÃO SE APLICA" value="ipressaonao" />
        <Picker.Item label="*1" value="ipressaoobs1" />
        <Picker.Item label="*2" value="ipressaoobs2" />
        <Picker.Item label="*3" value="ipressaoobs3" />
      </Picker>  

      <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OK" value="pressostatoOK" />
        <Picker.Item label="NÃO SE APLICA" value="  pressostatonao" />
        <Picker.Item label="*1" value="pressostatoobs1" />
        <Picker.Item label="*2" value="pressostatoobs2" />
        <Picker.Item label="*3" value="spressostatobs3" />
      </Picker>  

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