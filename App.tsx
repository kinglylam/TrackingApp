import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./component/SplashScreen";
import LoginScreen from "./component/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <SplashScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
