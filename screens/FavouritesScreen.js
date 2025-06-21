import React, {useState, useContext, useCallback, useMemo} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import FavouritesTabs from '../components/FavouritesTabs';
import {TEXTS} from '../constants/texts';
import {ThemeContext} from '../context/ThemeContext';
import Card from '../components/Card';

const FavouritesScreen = () => {
  const {themeColors} = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('playlists');
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: themeColors.neutralLightest,
    },
    placeholder: {
      marginTop: 32,
      fontSize: 16,
      color: themeColors.textSecondary,
      textAlign: 'center',
    },
    grid: {
      gap: 16,
      paddingBottom: 16,
    },
    column: {
      gap: 16,
      justifyContent: 'space-between',
    },
  });

  const favoritePlaylists = useSelector(
    state => state.favorites?.playlists || [],
  );

  const handleCardPress = useCallback(
    playlistId => {
      navigation.navigate('PlaylistDetails', {playlistId});
    },
    [navigation],
  );

  const content = useMemo(() => {
    if (activeTab === 'playlists') {
      if (!favoritePlaylists.length) {
        return (
          <Text style={styles.placeholder}>{TEXTS.NOSAVED.PLAYLISTS}</Text>
        );
      }

      return (
        <FlatList
          data={favoritePlaylists}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.grid}
          columnWrapperStyle={styles.column}
          renderItem={({item}) => (
            <Card
              playlistId={item.id}
              onPress={() => handleCardPress(item.id)}
            />
          )}
        />
      );
    }

    if (activeTab === 'affirmations') {
      return (
        <Text style={styles.placeholder}>{TEXTS.NOSAVED.AFFIRMATIONS}</Text>
      );
    }

    return null;
  }, [activeTab, favoritePlaylists, handleCardPress, styles]);

  return (
    <View style={styles.container}>
      <FavouritesTabs activeTab={activeTab} onChange={setActiveTab} />
      {content}
    </View>
  );
};

export default React.memo(FavouritesScreen);
