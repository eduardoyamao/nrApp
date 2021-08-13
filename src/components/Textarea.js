import React from 'react';
import {TextInput} from 'react-native';

const Textarea = ({onChangeText, value}) => {
  return (
    <TextInput
      placeholder="Comentário"
      multiline={true}
      numberOfLines={4}
      onChangeText={onChangeText}
      value={value}
      style={{
        marginBottom: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 5,
        paddingTop: 0,
      }}
    />
  );
};

export default Textarea;
