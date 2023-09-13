import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { NavigationContainer } from '@react-navigation/native';


const backgrounds = [
  require('../assets/images/Onboarding/image1.png'),
  require('../assets/images/Onboarding/image2.png'),
  require('../assets/images/Onboarding/image3.png'),
];

const slogans = [
  'Welcome to MyApp!',
  'Discover amazing features!',
  'Join our community now!',
];

export default function Onboarding() {
  const [activePage, setActivePage] = useState(0);
  const navigation = useNavigation();

  const handleNext = () => {
    if (activePage < backgrounds.length - 1) {
      setActivePage(activePage + 1);
    } else {
      // Navigate to Sign In Page here
      navigation.navigate('SignIn'); // Replace 'SignIn' with your actual navigation target
    }
  };

  const handleSkip = () => {
    // Navigate to Sign In Page here
    navigation.navigate('SignIn'); // Replace 'SignIn' with your actual navigation target
  };

  const renderDot = (index) => (
    <View
      key={index}
      style={[styles.dot, { backgroundColor: activePage === index ? 'yellow' : 'transparent' }]}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={backgrounds[activePage]} style={styles.backgroundImage} />
        <Text style={styles.slogan}>{slogans[activePage]}</Text>
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.button}>Skip for Now</Text>
        </TouchableOpacity>
        <View style={styles.dotsContainer}>
          {backgrounds.map((_, index) => renderDot(index))}
        </View>
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.button}>
            {activePage === backgrounds.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  slogan: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: 'gray',
  },
});
