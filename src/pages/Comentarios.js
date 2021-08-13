import React, {useState} from 'react';
import CommentSection from '../components/CommentSection';
import {View, Text, Button} from 'react-native';

const Comentarios = () => {
  const [comments, setComments] = useState([]);

  const onAddNewComment = () => {
    setComments(state => state.concat({text: '', image: ''}));
  };

  const onChangeCommentText = (idx, text) => {
    setComments(state => {
      state[idx].text = text;
      return [...state];
    });
  };

  const onChangeImage = (idx, image) => {
    setComments(state => {
      state[idx].image = image;
      return [...state];
    });
  };

  return (
    <View>
      {comments.map((comment, idx) => (
        <View key={`comment-section-${idx}`} style={{marginBottom: 30}}>
          <CommentSection
            comment={comment}
            onChangeText={text => onChangeCommentText(idx, text)}
            onChangeImage={img => onChangeImage(idx, img)}
          />
        </View>
      ))}

      <Button title="Adicionar Comentário" onPress={onAddNewComment} />
      <Button title="Salvar" onPress={onAddNewComment} />
    </View>
  );
};

export default Comentarios;
