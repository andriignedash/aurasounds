import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PlaylistDetailsScreen from '../screens/PlaylistDetailsScreen';
import {getPlaylistById} from '../data/playlists';
import {SCREENS} from '../constants/texts';
import {ThemeContext} from '../context/ThemeContext';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  const {themeColors} = useContext(ThemeContext);

  return (
    <Stack.Navigator>
      {/* Home Screen */}
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{
          title: SCREENS.HOME,
          headerStyle: {
            backgroundColor: themeColors.background,
          },
          headerTitleStyle: {
            color: themeColors.textPrimary,
            fontWeight: '700',
          },
          headerTintColor: themeColors.textPrimary,
        }}
      />

      {/* Playlist Details Screen */}
      <Stack.Screen
        name="PlaylistDetails"
        component={PlaylistDetailsScreen}
        options={({route}) => {
          const playlist = getPlaylistById(route.params.playlistId);

          return {
            title: playlist.title,
            headerBackTitle: 'Back',
            headerStyle: {
              backgroundColor: themeColors.background,
            },
            headerTitleStyle: {
              color: themeColors.textPrimary,
              fontWeight: '700',
            },
            headerTintColor: themeColors.textPrimary,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
