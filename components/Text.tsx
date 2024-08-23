/* eslint-disable indent */
import React from 'react';
import {
  Text as RNText,
  type TextProps,
} from 'react-native';
import { pallets } from '../constants';
type FontWeight =
  | '300'
  | '400'
  | '600'
  | '700'
  | '750'
  | '650';

export type TextPropTypes = TextProps & {
  children?: string | React.ReactNode;
  fontWeight?: FontWeight;
};

export const Text = ({
  children,
  style,
  fontWeight = '400',
  ...props
}: TextPropTypes) => {
  const fontSize = 13;

  return (
    <RNText
      maxFontSizeMultiplier={1.3}
      minimumFontScale={0.7}
      style={[
        {
          color: pallets.black,
          fontSize,
        },

        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
};
