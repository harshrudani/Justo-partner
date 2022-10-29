import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from '../views/DashboardScreen';
import NotificationScreen from '../views/NotificationsScreen';
import customDrawer from './customDrawer';
import PropertyScreen from '../views/PropertyMangement/PropertyScreen';
import PropertyDetails from '../views/PropertyMangement/PropertyDetails';
import LoginScreen from '../views/Authentication/LoginScreen';
import RegistrationScreen from '../views/Authentication/RegistrationScreen';
import OnboardingScreen from '../views/Authentication/OnboardingScreen';
import SplashScreen from '../views/Authentication/SplashScreen';
import OtpVerificationScreen from '../views/Authentication/OtpVerification';

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
        <Stack.Screen
          component={OtpVerificationScreen}
          name="OtpVerificationScreenView"
        />
        {/* <Stack.Screen component={DrawerComponent} name="DashboardScreenView" />
        <Stack.Screen component={PropertyDetails} name="PropertyDetails" /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
