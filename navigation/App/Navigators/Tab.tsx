import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

import { TabRoutes } from '../../types/app';
import { pallets } from '../../../constants';
import { Text } from '../../../components/Text';
import {
  HomeIcon,
  ProfileIcon,
  ErrandIcon,
  SupportIcon,
  SupportActiveIcon,
  HomeActiveIcon,
  ErrandActiveIcon,
  ProfileActiveIcon,
} from '../../../assets/icons';

import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { RF } from '../../../helpers';
import { Dimensions } from 'react-native';
// import Animated, {
//   useSharedValue,
// } from 'react-native-reanimated';
import DashBoard from '../../../screens/Home/DashBoard';
import Errands from '../../../screens/Errands/Errands';
import Support from '../../../screens/Support/Support';
import Profile from '../../../screens/Profile/Profile';

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
        },
      })}>
      <Screen
        name="Home"
        component={DashBoard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused ? (
                <>
                  <View
                    style={[
                      styles.active,
                      {
                        // width: widths,
                        // backgroundColor: 'violet',
                      },
                    ]}>
                    <HomeActiveIcon />
                    <Text
                      style={[
                        styles.activeText,
                        { marginStart: 4 },
                      ]}
                      fontWeight="750">
                      Home
                    </Text>
                  </View>
                  {/* <View style={[styles.active]}>
                    <HomeActiveIcon />
                    <Text style={styles.activeText} fontWeight='750'>Home</Text>
                  </View> */}
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <HomeIcon />
                    <Text style={styles.inactiveText}>
                      Home
                    </Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />

      <Screen
        name="Errand"
        component={Errands}
        options={{
          tabBarLabel: 'Errand',
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused ? (
                <>
                  <View style={styles.active}>
                    <ErrandActiveIcon />
                    <Text
                      style={styles.activeText}
                      fontWeight="750">
                      Errands
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <ErrandIcon />
                    <Text style={styles.inactiveText}>
                      Errands
                    </Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />
      <Screen
        name="Support"
        component={Support}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused ? (
                <>
                  <View style={styles.active}>
                    <SupportActiveIcon />
                    <Text
                      style={styles.activeText}
                      fontWeight="750">
                      Support
                    </Text>
                  </View>
                  {/* <TouchableOpacity
                    onPress={() => {
                      console.log('jhj')
                    }}
                    style={styles.active}>
                    <CommunityActiveIcon />
                    <Text style={styles.activeText} fontWeight='750'>Connect</Text>

                  </TouchableOpacity> */}
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <SupportIcon />
                    <Text style={styles.inactiveText}>
                      Support
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
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused, size }) => (
            <>
              {focused ? (
                <>
                  <View style={styles.active}>
                    <ProfileActiveIcon />
                    <Text
                      style={styles.activeText}
                      fontWeight="750">
                      Profile
                    </Text>
                  </View>
                  {/* <View style={[styles.active,]}>
                    <ShopActiveIcon />
                    <Text style={styles.activeText} fontWeight='750'>Shop</Text>

                  </View> */}
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

      {/* <Screen name="Home" component={CommunityHome} /> */}
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
    color: pallets.primaryTextColor,
    fontSize: RF(9),
    marginTop: 4,
    marginStart: 1,
    fontWeight: '600',
  },
  inactive: {
    alignItems: 'center',
    minWidth: 0,
  },
  inactiveText: {
    color: pallets.greyText,
    fontSize: RF(9),
    marginTop: 4,
    marginStart: 1,
    fontWeight: '600',
  },
});
//   const getTabIcon = (
//     route: RouteProp<TabRoutes, keyof TabRoutes>,
//     focused: boolean,
//   ): JSX.Element | null => {
//     switch (route.name) {
//       case 'Home':
//         return focused ? (
//           <HomeeIcon />
//         ) : (
//           <HomeeIcon color={pallets.textSecondary} />
//         );

//       case 'Shop':
//         return focused ? (
//           // <Entypo name="location" size={24} color={pallets.tab} />
//           <ShopIcon />
//         ) : (
//           <ShopIcon />
//         );

//       case 'Profile':
//         return focused ? <ProfileIcon /> : <ProfileIcon />;

//       default:
//         return null;
//     }
//   };
