import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {getPlaylistById} from '../data/playlists';
import Player from '../components/Player';
import {ThemeContext} from '../context/ThemeContext';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavourites, removeFromFavourites} from '../redux/favouritesSlice';

export default function PlaylistDetailsScreen({route}) {
  const {themeColors} = useContext(ThemeContext);
  const {playlistId} = route.params;
  const playlist = getPlaylistById(playlistId);

  const dispatch = useDispatch();
  const isFavorite = useSelector(state =>
    state.favorites.playlists?.some(p => p.id === playlistId),
  );

  const handleLikeToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavourites(playlistId));
    } else {
      dispatch(addToFavourites(playlist));
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.neutralLightest,
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
      color: themeColors.textPrimary,
      marginBottom: 15,
    },
    description: {
      fontSize: 16,
      color: themeColors.textSecondary,
      textAlign: 'center',
      marginBottom: 15,
    },
  });

  return (
    <View style={styles.container}>
      <Image source={playlist.image} style={styles.image} />
      <Text style={styles.title}>{playlist.title}</Text>
      <Text style={styles.description}>{playlist.description}</Text>
      <Player onLikeToggle={handleLikeToggle} isLiked={isFavorite} />
    </View>
  );
}
