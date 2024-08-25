import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { Alert, StatusBar } from 'react-native';
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

// Optional: Configure deep linking if needed
const linking: LinkingOptions<AuthRoutes> = {
  config: {
    initialRouteName: 'SplashScreen',
    screens: {},
  },
  prefixes: ['divic://'],
};

const LoadApp = () => {
  const { token } = useContext(
    AuthContext,
  ) as AuthContextType;
  const [isReady, setIsReady] = useState(false);

  // Handle splash screen hiding and app updates
  useEffect(() => {
    const prepare = async () => {
      try {
        // Simulate some async loading tasks (e.g., fetching data)
        await new Promise(resolve =>
          setTimeout(resolve, 1000),
        );

        // Check for app updates if not in development mode
        if (!__DEV__) {
          const update =
            await Updates.checkForUpdateAsync();
          if (update.isAvailable) {
            await Updates.fetchUpdateAsync();
            await Updates.reloadAsync();
          }
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!isReady) {
    return null; // Or a loading indicator
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer linking={linking}>
        {token ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default LoadApp;
