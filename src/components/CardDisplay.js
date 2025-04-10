// src/components/CardDisplay.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardDisplay = ({ card }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={card.boardView} style={styles.cardImage} />
      <Text style={styles.cardName}>{card.name}</Text>
      <Text style={styles.cardDescription}>{card.description}</Text>
      <Image source={card.boardIcon} style={styles.cardIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  cardImage: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 15,
  },
  cardName: {
    fontSize: 22,
    fontFamily: 'ShinGo',
    color: '#2F3542',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    fontFamily: 'ShinGo',
    color: '#57606f',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

export default CardDisplay;
