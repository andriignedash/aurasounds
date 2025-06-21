import React, {useContext, useMemo} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {getPlaylistById} from '../data/playlists';
import {ThemeContext} from '../context/ThemeContext';

const Card = React.memo(({playlistId, onPress}) => {
  const {themeColors} = useContext(ThemeContext);

  const playlist = useMemo(() => getPlaylistById(playlistId), [playlistId]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          borderRadius: 24,
          overflow: 'visible',
        },
        shadowWrapper: {
          shadowColor: themeColors.shadow,
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.08,
          shadowRadius: 4,
          elevation: 3,
          borderRadius: 24,
          backgroundColor: 'transparent',
        },
        card: {
          backgroundColor: themeColors.surface,
          borderRadius: 24,
          overflow: 'hidden',
          width: 166,
          borderWidth: 1,
          borderColor: themeColors.neutralMedium,
        },
        image: {
          width: '100%',
          height: 120,
          resizeMode: 'cover',
        },
        content: {
          padding: 12,
          alignItems: 'center',
        },
        title: {
          fontSize: 16,
          fontWeight: '700',
          color: themeColors.textPrimary,
          textAlign: 'center',
        },
        subtitle: {
          fontSize: 14,
          color: themeColors.textSecondary,
          marginTop: 4,
          textAlign: 'center',
        },
      }),
    [themeColors],
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.shadowWrapper}>
        <TouchableOpacity
          style={styles.card}
          onPress={onPress}
          activeOpacity={0.8}>
          <Image source={playlist.image} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title}>{playlist.title}</Text>
            <Text style={styles.subtitle}>{playlist.subtitle}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default Card;
