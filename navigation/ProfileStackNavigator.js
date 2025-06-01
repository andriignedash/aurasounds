import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import AboutScreen from '../screens/AboutScreen';
import FavoritesScreen from '../screens/FavouritesScreen';
import COLORS from '../constants/colors';
import {SCREENS} from '../constants/texts';

const Stack = createNativeStackNavigator();

// Common header styling reused across multiple screens
const commonHeaderOptions = {
  headerStyle: {
    backgroundColor: COLORS.neutralLightest,
  },
  headerTitleStyle: {
    color: COLORS.textPrimary,
    fontWeight: '700',
  },
  headerTintColor: COLORS.textPrimary,
  headerBackTitle: 'Back', // Custom label for the back button
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Profile screen shown with a header titled "Your Profile" */}
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: SCREENS.PROFILE,
          ...commonHeaderOptions,
        }}
      />

      {/* Settings screen pushed on top of Profile stack */}
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: SCREENS.SETTINGS, ...commonHeaderOptions}}
      />

      {/* Feedback screen with the same header styles */}
      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{title: SCREENS.FEEDBACK, ...commonHeaderOptions}}
      />

      {/* About screen with consistent header appearance */}
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{title: SCREENS.ABOUT, ...commonHeaderOptions}}
      />

      {/* MyFavorites screen */}
      <Stack.Screen
        name="MyFavorites"
        component={FavoritesScreen}
        options={{title: SCREENS.FAVOURITES, ...commonHeaderOptions}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
