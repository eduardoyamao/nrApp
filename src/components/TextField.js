import React from 'react';
import {TextInput} from 'react-native-paper';

const TextField = ({value, onChange, placeholder, label}) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      keyboardType={'numeric'}
    />
  );
};

export default TextField;
