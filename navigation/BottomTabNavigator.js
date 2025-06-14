import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import FavouritesStackNavigator from './FavouritesStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

// Icons
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
  const {themeColors} = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themeColors.primary,
        tabBarInactiveTintColor: themeColors.textSecondary,
        tabBarStyle: {
          backgroundColor: themeColors.background,
          height: 60,
          borderTopColor: themeColors.border,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesStackNavigator}
        options={{
          tabBarIcon: FavouritesIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
