import React, {
  useState,
  type ReactNode,
  LegacyRef,
  forwardRef,
} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  type TextInputProps,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import { Text } from './Text';
import { pallets } from '../constants';
type InputProps = TextInputProps & {
  coverStyle?: ViewStyle;
  inputStyle?: ViewStyle & TextStyle;
  style?: ViewStyle;
  label?: string;
  LeftComponent?: ReactNode;
  isMultiLine?: boolean;
  RightComponent?: ReactNode;
  bottomComponent?: React.ReactNode;
  errorMessage?: string;
  error?: string | null;
  ref?: LegacyRef<TextInput>;
};
// export interface InputProps extends TextInputProps {
//     coverStyle?: ViewStyle;
//     inputStyle?: ViewStyle & TextStyle;
//     style?: ViewStyle;
//     label?: string;
//     isMultiLine?: boolean
//     LeftComponent?: React.ReactNode;
//     RightComponent?: React.ReactNode;
//     error?: boolean;
//     errorMessage?: string;
//     bottomComponent?: React.ReactNode;
// }

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      RightComponent,
      LeftComponent,
      label,
      error,
      errorMessage,
      coverStyle,
      inputStyle,
      style,
      secureTextEntry,
      editable = true,
      bottomComponent,
      isMultiLine = false,
      ...props
    }: InputProps,
    ref,
  ): JSX.Element => {
    const [showPassword, setShowPassword] =
      useState<boolean>(!secureTextEntry);

    const toggleSetShowPassword = () =>
      setShowPassword(prev => !prev);

    return (
      <View style={[styles.container, coverStyle]}>
        {label && (
          <Text style={styles.labelText}>{label}</Text>
        )}
        <View
          style={[
            styles.content,
            !!error && { borderColor: pallets.red },
            !!LeftComponent && { paddingLeft: 10 },
            (!!RightComponent || secureTextEntry) && {
              paddingRight: 10,
            },
            !editable && {
              backgroundColor: pallets.borderGrey,
            },
            isMultiLine && { height: 100 },
            style,
          ]}>
          {LeftComponent && LeftComponent}
          <TextInput
            ref={ref}
            style={[
              styles.input,
              inputStyle,
              isMultiLine && styles.multiLineInput,
            ]}
            placeholderTextColor={pallets.lightGrey}
            secureTextEntry={!showPassword}
            editable={editable}
            multiline={isMultiLine}
            textAlignVertical={
              isMultiLine ? 'top' : 'center'
            }
            {...props}
          />
          {secureTextEntry ? (
            <TouchableOpacity
              onPress={toggleSetShowPassword}>
              <Icon
                name={
                  !showPassword
                    ? 'visibility'
                    : 'visibility-off'
                }
                size={20}
                color={pallets.black}
              />
            </TouchableOpacity>
          ) : (
            RightComponent && RightComponent
          )}
        </View>
        {error && (
          <View style={styles.error}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        {bottomComponent && (
          <View style={{ marginTop: 8 }}>
            {bottomComponent}
          </View>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {},
  labelText: {
    marginBottom: 9,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: pallets.borderGrey,
    // // borderWidth: 1,
    // borderRadius: 8,
    width: '100%',
    height: 50,
    borderWidth: 1,
    backgroundColor: 'rgba(206, 207, 217, 0.1)',
    borderRadius: 8,
    borderColor: 'rgba(136, 145, 139, 0.4)',
  },
  input: {
    color: pallets.black,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  error: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: pallets.lightRed,
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  errorText: {
    color: pallets.red,
  },
  multiLineInput: {
    height: 100,
    textAlignVertical: 'top', // Align text to the top of the TextInput
  },
});
