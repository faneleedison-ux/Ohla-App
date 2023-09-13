// Import necessary modules
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './WelcomePage'; 
import Onboarding from './Onboarding';
import LocationPage from './Location';

// Create a stack navigator
const {Navigator, Screen}= createStackNavigator();

// Define your navigation structure
function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Onboarding">
        <Screen name="Onboarding" component={Onboarding} />
        <Screen name="WelcomePage" component={WelcomePage} />
        <Screen name="Location" component={LocationPage} />

       
      </Navigator>
    </NavigationContainer>
  );
}

// Export the AppNavigator as your root component
export default AppNavigator;
