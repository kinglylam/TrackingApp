import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

import { TabRoutes } from '../../types/app';
import { pallets } from '../../../constants';
// import { Text } from '../../../components/Text';

import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { RF } from '../../../helpers';
import { Dimensions } from 'react-native';
import {
  HomeActiveIcon,
  ProfileIcon,
  ScanIcon,
  WalletIcon,
} from '../../../assets/icons';
import ShipmentScreen from '../../../screens/Home/ShipmentScreen';
import ScanScreen from '../../../screens/Scan/ScanScreen';
import WalletScreen from '../../../screens/Wallet/WalletScreen';
import ProfileScreen from '../../../screens/Profile/ProfileScreen';
// import Animated, {
//   useSharedValue,
// } from 'react-native-reanimated';

const { Navigator, Screen } =
  createBottomTabNavigator<TabRoutes>();
const Width = Dimensions.get('screen').width;
export default function TabNavigator() {
  return (
    <Navigator
      // tabBar={props => <MyTabBar {...props} />}

      screenOptions={({ route }) => ({
        tabBarButton: props => (
          <TouchableOpacity
            onPress={() => console.log('klk')}
            {...props}
            activeOpacity={0.7}
          />
        ),

        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: Width,
          alignSelf: 'center',
          height: Platform.OS === 'android' ? 68 : 79,
          paddingHorizontal: 10,
          paddingVertical: 13,
        },
      })}>
      <Screen
        name="Home"
        component={ShipmentScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused ? (
                <>
                  <View style={[styles.active, {}]}>
                    <HomeActiveIcon />
                    <Text
                      style={[
                        styles.activeText,
                        { marginStart: 4 },
                      ]}>
                      Shipments
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <WalletIcon />
                    <Text style={styles.inactiveText}>
                      Shipments
                    </Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />

      <Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused ? (
                <>
                  <View style={styles.active}>
                    <ScanIcon />
                    <Text style={styles.activeText}>
                      Scan
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <ScanIcon />
                    <Text style={styles.inactiveText}>
                      Scan
                    </Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />
      <Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused ? (
                <>
                  <View style={styles.active}>
                    <WalletIcon />
                    <Text style={styles.activeText}>
                      Wallet
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <WalletIcon />
                    <Text style={styles.inactiveText}>
                      Wallet
                    </Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />

      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused, size }) => (
            <>
              {focused ? (
                <>
                  <View style={styles.active}>
                    <ProfileIcon />
                    <Text style={styles.activeText}>
                      Profile
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <ProfileIcon />
                    <Text style={styles.inactiveText}>
                      Profile
                    </Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  active: {
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    minWidth: 80,
  },
  activeText: {
    color: pallets.primaryBlue,
    fontSize: RF(9),
    marginTop: 4,
    marginStart: 1,
    fontWeight: '400',
  },
  inactive: {
    alignItems: 'center',
    minWidth: 0,
  },
  inactiveText: {
    color: pallets.grey,
    fontSize: RF(9),
    marginTop: 4,
    marginStart: 1,
    fontWeight: '400',
  },
});
