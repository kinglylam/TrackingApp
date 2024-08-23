import React, {
  createContext,
  useReducer,
  useEffect,
  useState,
} from 'react';
import { View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
import axios, { AxiosError } from 'axios';
import { handleApiError } from '../utils/api';

interface Props {
  children: React.ReactNode;
}

const initialState: AuthState = {
  loading: true,
  token: false,
};

const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'LOGOUT':
      return {
        ...initialState,
        loading: false,
      };
    default:
      return state;
  }
};

export const AuthContext =
  createContext<AuthContextType | null>(null);

const AuthContextProvider = ({
  children,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(
    authReducer,
    initialState,
  );

  const setLoading = (isLoading: boolean) => {
    dispatch({
      payload: isLoading,
      type: 'SET_LOADING',
    });
  };

  const setToken = async (isAuthenticated: boolean) => {
    dispatch({
      payload: isAuthenticated,
      type: 'SET_TOKEN',
    });
    await AsyncStorage.setItem(
      'token',
      JSON.stringify(isAuthenticated),
    );
  };

  //   const login = async (
  //     username: string,
  //     password: string,
  //   ) => {
  //     try {
  //       const response = await axios.post(
  //         'https://shippex-demo.bc.brandimic.com/api/method/login',
  //         { usr: username, pwd: password },
  //       );

  //       if (response.status === 200 && response.data) {
  //         setToken(true); // Set token to true on successful login
  //       } else {
  //         Alert.alert('Login failed', 'Invalid credentials');
  //       }
  //     } catch (error) {
  //       console.warn(error);
  //       Alert.alert(
  //         'Login failed',
  //         'An error occurred during login',
  //       );
  //     }
  //   };

  const login = async (
    username: string,
    password: string,
  ) => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://shippex-demo.bc.brandimic.com/api/method/login',
        { usr: username, pwd: password },
      );

      if (response.status === 200 && response.data) {
        await setToken(true); // Set token to true on successful login
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        handleApiError(error); // Use handleApiError to manage errors
      } else {
        console.warn('Unexpected error:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setToken(false);
  };

  const getUserData = async () => {
    try {
      const storedToken =
        await AsyncStorage.getItem('token');
      if (storedToken) {
        setToken(JSON.parse(storedToken));
      }
      dispatch({ payload: false, type: 'SET_LOADING' });
    } catch (error) {
      console.warn(error);
      logout();
    }
  };

  useEffect(() => {
    // AsyncStorage.removeItem('token');
    getUserData();
    // setLoading(false)
  }, []);

  const authState: AuthContextType = {
    ...state,
    login,
    logout,
    setToken,
  };

  return (
    <View style={{ flex: 1 }}>
      {state.loading ? (
        <Loader />
      ) : (
        <AuthContext.Provider value={authState}>
          {children}
        </AuthContext.Provider>
      )}
    </View>
  );
};

export default AuthContextProvider;
