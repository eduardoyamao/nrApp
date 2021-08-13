import React from 'react';
import {View, Image, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Textarea from './Textarea';

const CommentSection = ({comment = {}, onChangeText, onChangeImage}) => {
  const handleChoosePhoto = () => {
    ImagePicker.launchImageLibrary({noData: true}, response => {
      if (respoonse && response.uri) {
        onChangeImage(response);
      }
    });
  };

  return (
    <View style={{padding: 10}}>
      <Textarea onChangeText={onChangeText} value={comment.text} />
      {Boolean(comment.image) && (
        <Image
          source={{uri: comment.image.uri}}
          style={{width: 300, height: 300}}
        />
      )}
      <Button
        title="Adicionar imagem"
        disabled={comment.text.length === 0}
        onPress={() => handleChoosePhoto()}
      />
    </View>
  );
};

export default CommentSection;
