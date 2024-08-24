import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
} from 'react-native';

import { pallets } from '../../constants';
import { LogoTextIcon } from '../../assets/icons';
import { Button } from '../../components/Button';
import {
  AuthRoutes,
  StackNavigationProps,
} from '../../navigation/types';

const SplashScreen = ({
  navigation,
}: StackNavigationProps<AuthRoutes, 'SplashScreen'>) => {
  const logoSize = useRef(new Animated.Value(36)).current;
  const logoOpacity = useRef(new Animated.Value(1)).current;
  const logoScale = useRef(new Animated.Value(1)).current;
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoSize, {
          toValue: 144,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.timing(logoScale, {
          toValue: 2,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(logoOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setShowContent(true);
    });
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: showContent
            ? pallets.primaryBlue
            : 'white',
        },
      ]}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          },
        ]}>
        <Animated.Image
          source={require('../../assets/Group1.png')}
          style={{ width: logoSize, height: logoSize }}
        />
      </Animated.View>

      {showContent && (
        <>
          <View style={styles.contentContainer}>
            <LogoTextIcon />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => navigation.navigate('LogIn')}
              text="Login"
              backgroundColor={pallets.white}
              textColor={pallets.textSecondary}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
});

export default SplashScreen;
