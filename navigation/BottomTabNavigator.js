import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import FavouritesScreen from '../screens/FavouritesScreen';
import ProfileStackNavigator from './ProfileStackNavigator';
import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { SCREENS } from '../constants/texts';

const Tab = createBottomTabNavigator();

// Icons for each tab
const HomeIcon = ({color}) => (
  <Icon name="home-outline" size={20} color={color} />
);
const FavouritesIcon = ({color}) => (
  <Icon name="heart-outline" size={20} color={color} />
);
const ProfileIcon = ({color}) => (
  <Icon name="person-outline" size={20} color={color} />
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.textPrimary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: {
          backgroundColor: COLORS.neutralLightest,
          height: 60,
          borderTopColor: 'transparent',
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}>
      {/* Home tab with its own Stack Navigator */}
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: HomeIcon,
          headerShown: false,
          headerTitle: SCREENS.HOME,
          headerStyle: {
            backgroundColor: COLORS.neutralLightest,
          },
          headerTitleStyle: {
            color: COLORS.textPrimary,
            fontWeight: '700',
          },
          headerTintColor: COLORS.textPrimary,
        }}
      />
      {/* Favourites tab as a standalone screen */}
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: FavouritesIcon,
          headerShown: true,
          title: SCREENS.FAVOURITES,
          backgroundColor: COLORS.neutralLightest,
          headerStyle: {
            backgroundColor: COLORS.neutralLightest,
          },
          headerTitleStyle: {
            color: COLORS.textPrimary,
            fontWeight: '700',
          },
          headerTintColor: COLORS.textPrimary,
        }}
      />
      {/* Profile tab using its own stack for nested navigation */}
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ProfileIcon,
          headerTitle: SCREENS.PROFILE,
          headerShown: false,
          backgroundColor: COLORS.neutralLightest,
          headerStyle: {
            backgroundColor: COLORS.neutralLightest,
          },
          headerTitleStyle: {
            color: COLORS.textPrimary,
            fontWeight: '700',
          },
          headerTintColor: COLORS.textPrimary,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
