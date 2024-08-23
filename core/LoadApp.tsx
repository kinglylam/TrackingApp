import React, { useContext, useEffect } from 'react';
import { Alert, StatusBar } from 'react-native';
import {
  LinkingOptions,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useFonts } from '@use-expo/font';
import * as Updates from 'expo-updates';

import { AppNavigator, AuthNavigator } from '../navigation';
import { AuthRoutes } from '../navigation/types';
import * as SplashScreen from 'expo-splash-screen';

import { pallets } from '../constants';
import useSaveCredentials from '../store/useStore';
import AuthContextProvider, {
  AuthContext,
} from '../context/AuthContext';
import { useGetMyProfile } from '../apis/useProfile';
import useStoreProfile from '../store/useProfile';
import Loader from '../components/Loader';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { AxiosError } from 'axios';
import { ApiError } from '../types/global';
import { handleApiError } from '../utils/api';
SplashScreen.preventAutoHideAsync();

const customFonts = {
  InterBold: require('../assets/fonts/Inter/Inter-Bold.ttf'),
  InterMedium: require('../assets/fonts/Inter/Inter-Medium.ttf'),
  InterRegular: require('../assets/fonts/Inter/Inter-Regular.ttf'),
  InterSemiBold: require('../assets/fonts/Inter/Inter-SemiBold.ttf'),
  'Poppins-SemiBold': require('../assets/fonts/poppins/Poppins-SemiBold.ttf'),
  'Poppins-Regular': require('../assets/fonts/poppins/Poppins-Regular.ttf'),
  'Poppins-Black': require('../assets/fonts/poppins/Poppins-Black.ttf'),
  'Poppins-ExtraBold': require('../assets/fonts/poppins/Poppins-ExtraBold.ttf'),
  'Poppins-Medium': require('../assets/fonts/poppins/Poppins-Medium.ttf'),
  'Poppins-Light': require('../assets/fonts/poppins/Poppins-Light.ttf'),
  'Axiforma-Black': require('../assets/fonts/axiforma/Axiforma-Black.ttf'),
  'Axiforma-Medium': require('../assets/fonts/axiforma/Axiforma-Medium.ttf'),
  'Axiforma-Light': require('../assets/fonts/axiforma/Axiforma-Light.ttf'),
  'Axiforma-SemiBold': require('../assets/fonts/axiforma/Axiforma-SemiBold.ttf'),
  'Axiforma-Bold': require('../assets/fonts/axiforma/Axiforma-Bold.ttf'),
  'Axiforma-Regular': require('../assets/fonts/axiforma/Axiforma-Regular.ttf'),
  'Gotham-Regular': require('../assets/fonts/gotam/GothamPro-Medium.ttf'),
  'Gotham-Pro': require('../assets/fonts/gotam/GothamPro-Medium.ttf'),
  'GothamPro-Regular': require('../assets/fonts/gotam/GothamPro-Medium.ttf'),
  'Gotham-Light': require('../assets/fonts/gotam/GothamPro-Light.ttf'),
  'Gotham-Light2': require('../assets/fonts/gotam/GothamProNarrow-Medium.ttf'),
  'Gotham-Bold': require('../assets/fonts/gotam/GothamPro-Bold.ttf'),
  'Gotham-Medium': require('../assets/fonts/gotam/GothamPro-Medium.ttf'),
  'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
  'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
  'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
  'Inter-SemiBold': require('../assets/fonts/Inter/Inter-SemiBold.ttf'),
};

const linking: LinkingOptions<AuthRoutes> = {
  config: {
    initialRouteName: 'SignIn',
    screens: {},
  },
  prefixes: ['hospyta://'],
};

const theme: Theme = {
  colors: {
    background: pallets.white,
    border: pallets.border,
    card: pallets.bottombg,
    notification: pallets.red,
    primary: pallets.primaryBlue,
    text: pallets.text,
  },
  dark: false,
};

export default function LoadApp() {
  const { token } = useContext(
    AuthContext,
  ) as AuthContextType;
  const { updateProfileData } = useStoreProfile();
  // const { token } = useSaveCredentials()
  const releaseChannel = Updates.releaseChannel ?? null;
  const { data, isLoading, isInitialLoading } =
    useGetMyProfile({
      enabled: Boolean(token),
      onSuccess: (data: GetMyProfileResponse) => {
        // console.log(data.data, 'dddddd')

        updateProfileData(data?.data);
      },
      onError: (err: AxiosError<ApiError>) =>
        handleApiError(err),
    });

  if (releaseChannel === 'dev-5') {
    Alert.alert('', 'Dev release', [{ text: 'Dismiss' }]);
  }
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);
  }, []);

  useEffect(() => {
    if (!__DEV__) {
      Updates.checkForUpdateAsync()
        .then(async update => {
          if (update.isAvailable) {
            await Updates.fetchUpdateAsync();
            await Updates.reloadAsync();
          }
        })
        .catch(() => null);
    }
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          {isInitialLoading ? (
            <Loader />
          ) : (
            <NavigationContainer {...{ theme }}>
              {token ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
          )}
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
}
