import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import LocationPage from './Location'; 

const WelcomePage = () => {
  const [showLocationPage, setShowLocationPage] = useState(false); // State to control showing LocationPage

  const handleSignInWithGoogle = () => {
   
    setShowLocationPage(true);
  };

  const handleSignInWithApple = () => {
    
    setShowLocationPage(true);
  };

  const handleSignInWithFacebook = () => {
    
    setShowLocationPage(true);
  };

  const handleForgotPassword = () => {
   
  };

  const handleSignIn = () => {
    
    setShowLocationPage(true);
  };

  return (
    <View style={styles.container}>
      {!showLocationPage ? ( 
        <>
          <Image source={require('./logo.png')} style={styles.logo} />
          <Text style={styles.title}>Welcome to Oloha</Text>
          <Text style={styles.slogan}>Live life with no excuses; travel with no regret</Text>

          {/* Email/Phone Input */}
          <TextInput
            style={styles.input}
            placeholder="Email or Phone Number"
            placeholderTextColor="gray"
          />

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
          />

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Sign In Button */}
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          {/* Continue with Text */}
          <Text style={styles.continueWithText}>Continue with</Text>

          {/* Social Media Icons */}
          <View style={styles.socialMediaIcons}>
            <TouchableOpacity style={styles.iconButton} onPress={handleSignInWithGoogle}>
              <FontAwesome name="google" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={handleSignInWithFacebook}>
              <FontAwesome5 name="facebook-f" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={handleSignInWithApple}>
              <MaterialCommunityIcons name="apple" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        
        <LocationPage />
      )}

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  slogan: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    color: 'black',
  },
  forgotPassword: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: 'white',
  },
  button: {
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  continueWithText: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
    color: 'white',
  },
  socialMediaIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconButton: {
    margin: 10,
  },
});

export default WelcomePage;
