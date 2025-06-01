import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import COLORS from '../constants/colors';
import {getPlaylistById} from '../data/playlists';
import Player from '../components/Player';

export default function PlaylistDetailsScreen({route}) {
  const {playlistId} = route.params;
  const playlist = getPlaylistById(playlistId);

  return (
    <View style={styles.container}>
      <Image source={playlist.image} style={styles.image} />
      <Text style={styles.title}>{playlist.title}</Text>
      <Text style={styles.description}>{playlist.description}</Text>
      <Player />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutralLightest,
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  image: {
    width: 320,
    height: 320,
    borderRadius: 20,
    resizeMode: 'cover',
    marginBottom: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 15,
  },
});
