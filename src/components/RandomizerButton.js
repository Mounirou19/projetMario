// src/components/RandomizerButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RandomizerButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Choisir une carte</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF4757',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'ShinGo',
  },
});

export default RandomizerButton;
