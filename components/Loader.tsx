import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { pallets } from "../constants";

interface Props {
  backgroundColor?: string;
  containerStyle?: object;
  color?: string;
  size?: "large" | "small";
  inline?: boolean;
}

/**
 * Renders a Loader component
 * @param {string} backgroundColor
 * @param {object} containerStyle
 * @param {string} color
 * @param {string} size
 * @param {boolean} inline
 * @param {string} backgroundColor
 * @returns {JSX.Element}
 */

const Loader = ({
  backgroundColor = "#fff",
  containerStyle = {},
  color = pallets.primaryBlue,
  size = "large",
  inline = false,
}: Props): JSX.Element => {
  return (
    <View
      style={[
        styles.loader,
        !inline && styles.full,
        { backgroundColor },
        containerStyle,
      ]}
    >
      <ActivityIndicator color={color} animating size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  loader: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default Loader;
