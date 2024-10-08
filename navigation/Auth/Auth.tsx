import React from 'react';
import { AuthRoutes } from '../types';
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  type ViewStyle,
  type ButtonProps,
} from 'react-native';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import SplashScreen from '../../screens/Auth/SplashScreen';
import LoginScreen from '../../screens/Auth/LoginScreen';
import { pallets } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

type Styles = {
  headerContainer: ViewStyle;
  horizontalLine: ViewStyle;
  customButton: ButtonProps;
};

const { Group, Navigator, Screen } =
  createStackNavigator<AuthRoutes>();

function CustomHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.horizontalLine} />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.Button}>
        <AntDesign
          name="left"
          size={24}
          color={pallets.secondaryBlue}
        />
        <Text style={styles.cancelButton}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function AuthNavigator() {
  const modalOptions: StackNavigationOptions = {
    cardStyleInterpolator:
      CardStyleInterpolators.forModalPresentationIOS,
    headerShown: true,
    headerTitle: '',
    headerStyle: {
      height: 60,
    },
    header: () => <CustomHeader />,
    presentation: 'modal',
    gestureEnabled: true,
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

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  horizontalLine: {
    position: 'absolute',
    top: 0,
    left: '44%',
    height: 7,
    backgroundColor: pallets.grey,
    width: '20%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  cancelButton: {
    color: pallets.secondaryBlue,
    fontSize: 20,
  },
  Button: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
