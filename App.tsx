import React, { useState } from 'react';
import Routes from './src/routes/index';
import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './src/context/UserContext';
import AuthContext from './src/context/auth';
import { AuthProvider } from './src/context/auth';

const App = () => {
  

  return (
    <>
      <AuthProvider>
        <StatusBar style="light" backgroundColor="#6556A0" />
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App
