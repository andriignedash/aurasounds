import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavouritesScreen from '../screens/FavouritesScreen';
import {ThemeContext} from '../context/ThemeContext';
import {SCREENS} from '../constants/texts';

const Stack = createNativeStackNavigator();

export default function FavouritesStackNavigator() {
  const {themeColors} = useContext(ThemeContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavouritesMain"
        component={FavouritesScreen}
        options={{
          title: SCREENS.FAVOURITES,
          headerStyle: {backgroundColor: themeColors.background},
          headerTitleStyle: {
            color: themeColors.textPrimary,
            fontWeight: '700',
          },
          headerTintColor: themeColors.textPrimary,
        }}
      />
    </Stack.Navigator>
  );
}
