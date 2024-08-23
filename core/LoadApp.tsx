import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import {
  LinkingOptions,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';

import { AppNavigator, AuthNavigator } from '../navigation';
import { AuthRoutes } from '../navigation/types';
import * as SplashScreen from 'expo-splash-screen';

import { pallets } from '../constants';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
// import { AxiosError } from 'axios';
// import { ApiError } from '../types/global';
// import { handleApiError } from '../utils/api';
// SplashScreen.preventAutoHideAsync();

const linking: LinkingOptions<AuthRoutes> = {
  config: {
    initialRouteName: 'SplashScreen',
    screens: {},
  },
  prefixes: ['divic://'],
};

export default function LoadApp() {
  // const { token } = useContext(
  //   AuthContext,
  // ) as AuthContextType;
  // const { updateProfileData } = useStoreProfile();
  // // const { token } = useSaveCredentials()
  // const releaseChannel = Updates.releaseChannel ?? null;
  // const { data, isLoading, isInitialLoading } =
  //   useGetMyProfile({
  //     enabled: Boolean(token),
  //     onSuccess: (data: GetMyProfileResponse) => {
  //       // console.log(data.data, 'dddddd')

  //       updateProfileData(data?.data);
  //     },
  //     onError: (err: AxiosError<ApiError>) =>
  //       handleApiError(err),
  //   });
  const [token, setToken] = useState(
    'zzztttyythhhukvlgfhliggugfyfgl...oolo',
  );

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
}
