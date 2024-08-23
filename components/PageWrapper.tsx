import React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
  type ViewStyle,
  type StatusBarStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface PageWrapperProps {
  safeAreaUpColor?: string;
  safeAreaDownColor?: string;
  bgColor?: string;
  statusBarStyle?: StatusBarStyle;
  children: React.ReactNode | React.ReactNode[];
  showUpInset?: boolean;
  showDownInset?: boolean;
  style?: ViewStyle;
}

export const PageWrapper = ({
  safeAreaUpColor = "#F6F8FA",
  safeAreaDownColor = "#F6F8FA",
  bgColor = "#F6F8FA",
  showUpInset = true,
  showDownInset = true,
  statusBarStyle,
  children,
  style,
}: PageWrapperProps) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {showUpInset && (
        <View
          style={[
            styles.inset,
            { height: top, backgroundColor: safeAreaUpColor },
          ]}
        />
      )}
      <StatusBar
        barStyle={
          statusBarStyle ??
          (Platform.OS === "android" ? "light-content" : "dark-content")
        }
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={[styles.container, { backgroundColor: bgColor }, style]}>
          {children}
        </View>
      </KeyboardAvoidingView>
      {showDownInset && (
        <View
          style={[
            styles.inset,
            // remove the 10 on android phones possibly
            { height: bottom - 10, backgroundColor: safeAreaDownColor },
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inset: {
    width: "100%",
  },
});
