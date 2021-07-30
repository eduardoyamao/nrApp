import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import ErrorOutput from './ErrorOutput';
import TextField from './TextField';

const ConversionExample = () => {
  const [value, setValue] = useState(0);
  const isNumber = !Number.isNaN(Number(value));
  const ratio = 10.1972;
  const result = isNumber ? Number(value) * ratio : 0;

  return (
    <View>
      <Appbar.Header dark={true}>
        <Appbar.Content title="Conversão" subtitle="MPa para kgf/cm²" />
      </Appbar.Header>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 20, paddingHorizontal: 18},
  result: {marginTop: 5},
});

export default ConversionExample;
