import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../views/DashboardScreen';
import NotificationScreen from '../views/NotificationsScreen';
import customDrawer from './customDrawer';
import PropertyScreen from '../views/PropertyMangement/PropertyScreen';
import PropertyDetails from '../views/PropertyMangement/PropertyDetails';
import AgentDetails from '../views/AgentManagement/AgentDetailView';
import AgentListingScreen from '../views/AgentManagement/AgentListing';
import PendingAgentListScreen from '../views/AgentManagement/PendingAgentListing';
import LoginScreen from '../views/Authentication/LoginScreen';
import RegistrationScreen from '../views/Authentication/RegistrationScreen';
import OnboardingScreen from '../views/Authentication/OnboardingScreen';
import SplashScreen from '../views/Authentication/SplashScreen';
import OtpVerificationScreen from '../views/Authentication/OtpVerification';
import ImageContent from '../views/PropertyMangement/PropertyDetails/components/ImageContent';
import VideoContent from '../views/PropertyMangement/PropertyDetails/components/VideoContent';
import CatalogueContent from '../views/PropertyMangement/PropertyDetails/components/CatalogueContent';
import CompanyDetails from '../views/Authentication/RegistrationScreen/components/CompanyDetails';
import UserBankInfo from '../views/Authentication/RegistrationScreen/components/UserBankInfo';
import ForgotPassword from '../views/Authentication/ForgotPassword';
import ChangePasswordScreen from '../views/Authentication/ChangePassword';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const screenOptions = { headerShown: false, gestureEnabled: true };
const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, drawerType: 'front' }}
      drawerContent={props => customDrawer(props)}>
      <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
      <Drawer.Screen name="PropertyScreenView" component={PropertyScreen} />
      <Drawer.Screen name="AgentListing" component={AgentListingScreen} />
      <Stack.Screen component={LoginScreen} name="LoginScreenView" />

      {/* <Stack.Screen component={PropertyScreen} name="PropertyScreenView" /> */}
    </Drawer.Navigator>
  );
};
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen component={SplashScreen} name="SplashScreenView" />
        <Stack.Screen
          component={OnboardingScreen}
          name="OnboardingScreenView"
        /> 
        <Stack.Screen component={LoginScreen} name="LoginScreenView" />
        <Stack.Screen
          component={RegistrationScreen}
          name="RegistrationScreenView"
        />
        <Stack.Screen
          component={ForgotPassword}
          name="ForgotPassword"
        />
        <Stack.Screen
          component={CompanyDetails}
          name="CompanyDetails"
        />
        <Stack.Screen
          component={OtpVerificationScreen}
          name="OtpVerificationScreenView"
        />
         <Stack.Screen component={ChangePasswordScreen} name="ChangePasswordScreenView" />
        <Stack.Screen component={DrawerComponent} name="DashboardScreenView" />
        <Stack.Screen component={PropertyDetails} name="PropertyDetails" />
        <Stack.Screen component={UserBankInfo} name="UserBankInfo" />
        <Stack.Screen component={ImageContent} name="ImageContent" />
        <Stack.Screen component={VideoContent} name="VideoContent" />
        <Stack.Screen component={CatalogueContent} name="CatalogueContent" />
        <Stack.Screen name="PendingAgentList" component={PendingAgentListScreen}  />
        <Stack.Screen name="AgentDetails" component={AgentDetails}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
