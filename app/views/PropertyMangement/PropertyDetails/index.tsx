import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropertyDetailView from './components/PropertyDetailView';

const PropertyDetails = ({navigation}: any) => {
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
   <PropertyDetailView handleBackPress={handleBackPress} />
  )
}

export default PropertyDetails;