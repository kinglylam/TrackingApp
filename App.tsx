import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import LoadApp from './core/LoadApp';
import AuthContextProvider from './context/AuthContext';
import FlashMessage from 'react-native-flash-message';

const queryClient = new QueryClient({
  defaultOptions: {},
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <LoadApp />
        <FlashMessage position="top" />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
