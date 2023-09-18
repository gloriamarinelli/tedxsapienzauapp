import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './components/pages/LoadingScreen.jsx';
import LoadingTransition from './components/pages/LoadingTransition.jsx';
import GetStarted from './components/pages/GetStarted.jsx';

const AppStack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <>
          <AppStack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          <AppStack.Screen
            name="LoadingTransition"
            component={LoadingTransition}
            options={{ headerShown: false }}
          />
          <AppStack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
          />
        </>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
