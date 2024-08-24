import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { pallets } from '../../constants';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { AuthContext } from '../../context/AuthContext';

interface Inputs {
  email: string;
  password: string;
}
interface Errors {
  email?: string | null;
  password?: string | null;
}

const LoginScreen = () => {
  const { login, loading } = useContext(
    AuthContext,
  ) as AuthContextType;
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleOnchange = (
    text: string,
    input: keyof Inputs,
  ) => {
    setInputs(prevState => ({
      ...prevState,
      [input]: text,
    }));
  };

  const handleError = (
    error: string | null,
    input: keyof Errors,
  ) => {
    setErrors(prevState => ({
      ...prevState,
      [input]: error,
    }));
  };

  const isValidEmail = (email: string) =>
    emailRegex.test(email);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;

    if (inputs.email.length < 1) {
      handleError('Please enter your email', 'email');
      isValid = false;
    }
    if (inputs.password.length < 1) {
      handleError('Please enter your password', 'password');
      isValid = false;
    }
    if (!isValidEmail(inputs.email)) {
      handleError('Please enter a valid email', 'email');
      isValid = false;
    }

    if (isValid) {
      try {
        await login(
          inputs.email.toLowerCase(),
          inputs.password,
        );
      } catch (error) {}
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => dismissKeyboard()}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subTitle}>
            Please enter your First, Last name and your
            phone number in order to register
          </Text>
        </View>
        <View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Email"
              onChangeText={text =>
                handleOnchange(text, 'email')
              }
              onFocus={() => handleError(null, 'email')}
              error={errors.email}
              autoCapitalize="none"
            />
            <Input
              placeholder="Password"
              onChangeText={text =>
                handleOnchange(text, 'password')
              }
              onFocus={() => handleError(null, 'password')}
              error={errors.password}
              secureTextEntry
            />
          </View>

          <Button
            text="Login"
            onPress={validate}
            loading={loading}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: pallets.white,
  },
  textContainer: {
    gap: 20,
  },
  title: {
    color: pallets.black,
    fontWeight: '600',
    fontSize: 34,
  },
  subTitle: {
    fontSize: 17,
    color: pallets.grey,
    fontWeight: '400',
  },
  inputContainer: {
    gap: 20,
    marginTop: 40,
    marginBottom: '60%',
  },
});

export default LoginScreen;
