import React from 'react';
import { AuthRoutes } from '../types';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import SplashScreen from '../../screens/Auth/SplashScreen';
import LoginScreen from '../../screens/Auth/LoginScreen';

const { Group, Navigator, Screen } =
  createStackNavigator<AuthRoutes>();

export default function AuthNavigator() {
  const modalOptions = {
    cardStyleInterpolator:
      CardStyleInterpolators.forModalPresentationIOS,
  };
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
      }}>
      <Group>
        <Screen
          name="SplashScreen"
          component={SplashScreen}
        />
        <Screen
          name="LogIn"
          component={LoginScreen}
          options={modalOptions}
        />
      </Group>
    </Navigator>
  );
}
