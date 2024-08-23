import React from 'react';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import { AppRoutes } from '../types/app';
import { TabStack } from './Navigators';
// import useStoreProfile from '../../store/useProfile';
// import useSaveCredentials from '../../store/useStore';

const { Navigator, Screen, Group } =
  createStackNavigator<AppRoutes>();

export default function AppNavigator() {
  //   const { status } = useSaveCredentials();
  //   if (status?.isVendorOnboard) {
  //     console.log(status);
  //   }
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* {!status?.isVendorOnboard && (
        <>
          <Group>
            <Screen
              name="OnboardingStack"
              component={OnboardingStack}
            />
          </Group>
        </>
      )} */}

      <Group>
        <Screen name="TabStack" component={TabStack} />
      </Group>
    </Navigator>
  );
}
