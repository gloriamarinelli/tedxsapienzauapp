import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './components/pages/LoadingScreen.jsx';
import LoadingTransition from './components/pages/LoadingTransition.jsx';
import GetStarted from './components/pages/GetStarted.jsx';

const AppStack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitionLoading, setIsTransitionLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading with a setTimeout
    setTimeout(() => {
      setIsLoading(false);

      setTimeout(() => {
        setIsTransitionLoading(false);
      }, 2000); // Adjust the duration of the "LoadingTransition" screen
	  
    }, 2000); // Adjust the duration of the "LoadingScreen" screen
  }, []);

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {isLoading ? (
          <AppStack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
        ) : isTransitionLoading ? (
          <AppStack.Screen
            name="LoadingTransition"
            component={LoadingTransition}
            options={{ headerShown: false }}
          />
        ) : (
          <AppStack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
          />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;