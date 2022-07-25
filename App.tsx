import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Toolbar } from './src/component/Toolbar';
import { DEFAULT_LIGHT_THEME } from './src/globals/colors';
import { HomeScreen } from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const App = React.memo(() => {
  return (
    <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
        <Toolbar/>
    </ThemeProvider>
);
});
