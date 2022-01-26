import React from 'react';

import { AppRegistry, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context/src/SafeAreaContext';

import App from './App';
import { name as appName } from './app.json';

const NuriCodingChallenge = () => (
  <SafeAreaProvider>
    <StatusBar hidden />
    <App />
  </SafeAreaProvider>
);

AppRegistry.registerComponent(appName, () => NuriCodingChallenge);
