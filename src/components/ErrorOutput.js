import React from 'react';
import {StyleSheet, Text} from 'react-native';
const ErrorOutput = props => {
  return <Text style={styles.error}>{props.error}</Text>;
};
const styles = StyleSheet.create({
  error: {marginTop: 5, color: '#E56BAE'},
});

export default ErrorOutput;
