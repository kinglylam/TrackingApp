import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  Alert,
  StatusBar,
  ActivityIndicator, // Added for fallback UI
  View, // Added for fallback UI
} from 'react-native';
import {
  NavigationContainer,
  LinkingOptions,
} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Updates from 'expo-updates';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  AuthContext,
  AuthContextType,
} from '../context/AuthContext';
import { AppNavigator, AuthNavigator } from '../navigation';
import { AuthRoutes } from '../navigation/types';

// Prevent auto-hiding of the splash screen
SplashScreen.preventAutoHideAsync();

const LoadApp = () => {
  const { token } = useContext(
    AuthContext,
  ) as AuthContextType;
  const [isReady, setIsReady] = useState(false);

  // Handle splash screen hiding and app updates
  useEffect(() => {
    const prepare = async () => {
      try {
        console.log('Preparing app...');

        // Simulate some async loading tasks (e.g., fetching data)
        await new Promise(resolve =>
          setTimeout(resolve, 1000),
        );
        console.log('Simulated loading done');

        // Check for app updates if not in development mode
        if (!__DEV__) {
          console.log('Checking for updates...');
          const update =
            await Updates.checkForUpdateAsync();
          if (update.isAvailable) {
            console.log('Update available, fetching...');
            await Updates.fetchUpdateAsync();
            console.log('Update fetched, reloading...');
            await Updates.reloadAsync();
          } else {
            console.log('No update available');
          }
        }
      } catch (e) {
        console.warn('Error during preparation:', e);
      } finally {
        console.log(
          'Preparation done, setting ready to true...',
        );
        setIsReady(true);
        await SplashScreen.hideAsync();
        console.log('Splash screen hidden');
      }
    };

    prepare();
  }, []);

  if (!isReady) {
    // Fallback UI while the app is preparing
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        {token ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default LoadApp;
