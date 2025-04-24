// App.js
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Animated, Text, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Audio } from 'expo-av';

import CardDisplay from './src/components/CardDisplay';
import RandomizerButton from './src/components/RandomizerButton';
import { data } from './src/data/cards';

// Empêcher l'écran de splash de disparaître automatiquement
SplashScreen.preventAutoHideAsync();

const fetchFonts = async () => {
  await Font.loadAsync({
    ShinGo: require('./assets/fonts/ShinGo.ttf'),
  });
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const prepareResources = async () => {
      try {
        await fetchFonts();
        // Chargez ici d'autres ressources si nécessaire
      } catch (error) {
        console.warn('Erreur lors du chargement des ressources :', error);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync(); // Masquer l'écran de splash après le chargement
      }
    };

    prepareResources();
  }, []);

  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('./assets/sounds/card-sound.mp3')
      );
      await sound.playAsync();
    } catch (error) {
      console.log('Erreur lors du chargement du son :', error);
    }
  };

  const chooseRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const card = data[randomIndex];
    fadeAnim.setValue(0);
    setSelectedCard(card);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
    playSound();
  };

  // Rendu d'un indicateur de chargement tant que l'application n'est pas prête
  if (!appIsReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Chargement...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur Mario Party Jamboree !</Text>
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
