import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { SignUpScreen } from './src/screens/Signup';
import { NavigationTypeParamList } from './src/types/types';

const Stack = createNativeStackNavigator<NavigationTypeParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} options={{ title: "Login"}} />
        <Stack.Screen name='Signup' component={SignUpScreen} options={{ title: "Sign in"}} />
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: "BeFine"}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};