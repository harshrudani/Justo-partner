import { View, Text } from 'react-native'
import React from 'react'
import AddNewVisitorForm from './Components/AddNewVisitorForm'

const AddNewVisitorScreen = ({ navigation }: any) => {
  const handleBackPress = () => {
    navigation.goBack()
  }
  return (
    <AddNewVisitorForm
      handleBackPress={handleBackPress}
    />
  )
}

export default AddNewVisitorScreen