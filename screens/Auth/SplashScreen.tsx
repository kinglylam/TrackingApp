import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import { LogoTextIcon } from '../assets/icons';
import { pallets } from '../constants';

// import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  //   const navigation = useNavigation();

  // Animated values for logo size, opacity, and scale
  const logoSize = useRef(new Animated.Value(36)).current;
  const logoOpacity = useRef(new Animated.Value(1)).current;
  const logoScale = useRef(new Animated.Value(1)).current;
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Logo size and fade-out animation
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoSize, {
          toValue: 144,
          duration: 1000,
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
      // Once the animation is done, show the next content
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
          source={require('../assets/Group 1.png')} // Replace with your logo
          style={{ width: logoSize, height: logoSize }}
        />
      </Animated.View>
      {showContent && (
        <View style={styles.contentContainer}>
          <LogoTextIcon />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => console.log('ccc')}>
            <Text style={styles.loginButtonText}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
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
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  loginButton: {
    padding: 10,
    backgroundColor: pallets.white,
    borderRadius: 5,
  },
  loginButtonText: {
    color: pallets.primaryBlue,
    fontSize: 18,
  },
});

export default SplashScreen;
