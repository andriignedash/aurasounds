import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PlaylistDetailsScreen from '../screens/PlaylistDetailsScreen';
import COLORS from '../constants/colors';
import {getPlaylistById} from '../data/playlists';
import {SCREENS} from '../constants/texts';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Main Home screen with static header configuration */}
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{
          title: SCREENS.HOME,
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

      {/* PlaylistDetails screen with dynamic header title based on selected playlist */}
      <Stack.Screen
        name="PlaylistDetails"
        component={PlaylistDetailsScreen}
        options={({route}) => {
          const playlist = getPlaylistById(route.params.playlistId);

          return {
            // Dynamic screen title from playlist data
            title: playlist.title,
            // Custom back button text
            headerBackTitle: 'Back',
            headerStyle: {
              backgroundColor: COLORS.neutralLightest,
            },
            headerTitleStyle: {
              color: COLORS.textPrimary,
              fontWeight: '700',
            },
            headerTintColor: COLORS.textPrimary,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
