import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import PlaylistDetailsScreen from '../screens/PlaylistDetailsScreen';
import {ThemeContext} from '../context/ThemeContext';
import {getPlaylistById} from '../data/playlists';

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  const {themeColors} = useContext(ThemeContext);

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />

      <RootStack.Screen
        name="PlaylistDetails"
        component={PlaylistDetailsScreen}
        options={({route}) => {
          const playlist = getPlaylistById(route.params.playlistId);
          return {
            title: playlist?.title || 'Details',
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
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
