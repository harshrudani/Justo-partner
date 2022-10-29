import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from '../views/SplashScreen';
import OnboardingScreen from '../views/OnboardingScreen';
import LoginScreen from '../views/LoginScreen';
import DashboardScreen from '../views/DashboardScreen';
import NotificationScreen from '../views/NotificationsScreen';
import customDrawer from './customDrawer';
import PropertyManagementScreen from '../views/PropertyMangementScreen';
import RegistrationScreen from '../views/RegistrationScreen';
import PropertyScreen from '../views/PropertyScreen';
import PropertyDetails from '../views/PropertyDetails';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const screenOptions = {headerShown: false, gestureEnabled: true};
const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, drawerType: 'front'}}
      drawerContent={props => customDrawer(props)}>
      <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
      <Drawer.Screen
        name="PropertyManagementScreen"
        component={PropertyManagementScreen}
      />
      <Drawer.Screen component={PropertyScreen} name="PropertyScreenView" />
      {/* <Stack.Screen component={PropertyScreen} name="PropertyScreenView" /> */}
    </Drawer.Navigator>
  );
};
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {/* <Stack.Screen component={SplashScreen} name="SplashScreenView" />
        <Stack.Screen
          component={OnboardingScreen}
          name="OnboardingScreenView"
        />
        <Stack.Screen component={LoginScreen} name="LoginScreenView" />
        <Stack.Screen
          component={RegistrationScreen}
          name="RegistrationScreenView"
        /> */}
        <Stack.Screen component={DrawerComponent} name="DashboardScreenView" />
        <Stack.Screen component={PropertyDetails} name="PropertyDetails" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
