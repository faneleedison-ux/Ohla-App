import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const LocationPage = () => {
  const navigation = useNavigation();

  const handleTurnOnLocation = () => {
    
    navigation.navigate('NotificationsPage');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Location/location.png')} style={styles.locationPin} />
      <Text style={styles.title}>Location Services</Text>
      <Text style={styles.message}>Get the best recommendations of things to do near you</Text>
      <TouchableOpacity style={styles.locationButton} onPress={handleTurnOnLocation}>
        <Text style={styles.buttonText}>Turn On Location</Text>
      </TouchableOpacity>
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
  locationPin: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  message: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: 'white',
  },
  locationButton: {
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
});

export default LocationPage;
