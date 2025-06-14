import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import AboutScreen from '../screens/AboutScreen';
import FavoritesScreen from '../screens/FavouritesScreen';
import {SCREENS} from '../constants/texts';
import {ThemeContext} from '../context/ThemeContext';

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  const {themeColors} = useContext(ThemeContext);

  const commonHeaderOptions = {
    headerStyle: {
      backgroundColor: themeColors.background,
    },
    headerTitleStyle: {
      color: themeColors.textPrimary,
      fontWeight: '700',
    },
    headerTintColor: themeColors.textPrimary,
    headerBackTitle: 'Back',
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: SCREENS.PROFILE,
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: SCREENS.SETTINGS,
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{
          title: SCREENS.FEEDBACK,
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: SCREENS.ABOUT,
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="MyFavorites"
        component={FavoritesScreen}
        options={{
          title: SCREENS.FAVOURITES,
          ...commonHeaderOptions,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
