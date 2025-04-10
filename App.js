// App.js
import React, { useState, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Audio } from 'expo-av';

import CardDisplay from './src/components/CardDisplay';
import RandomizerButton from './src/components/RandomizerButton';
import { data } from './src/data/cards';

const fetchFonts = () => {
  return Font.loadAsync({
    'ShinGo': require('./assets/fonts/ShinGo.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('./assets/sounds/card-sound.mp3')
      );
      await sound.playAsync();
    } catch (error) {
      console.log("Erreur lors du chargement du son :", error);
    }
  };

  const chooseRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const card = data[randomIndex];
    // Réinitialisation et démarrage de l'animation
    fadeAnim.setValue(0);
    setSelectedCard(card);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
    playSound();
  };

  if (!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setFontLoaded(true)} 
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <RandomizerButton onPress={chooseRandomCard} />
      {selectedCard && (
        <Animated.View style={{ opacity: fadeAnim, alignItems: 'center' }}>
          <CardDisplay card={selectedCard} />
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEBB6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
