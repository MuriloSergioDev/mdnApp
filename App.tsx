import React from 'react';
import Routes  from "./src/routes";
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <> 
      <StatusBar style="light" backgroundColor="#6556A0"/>
      <Routes/>
    </>
  );
}

export default App
