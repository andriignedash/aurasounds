import React, {useState, useContext, useCallback, useMemo} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import FavouritesTabs from '../components/FavouritesTabs';
import {TEXTS} from '../constants/texts';
import {ThemeContext} from '../context/ThemeContext';
import Card from '../components/Card';
import PostCard from '../components/PostCard';

const FavouritesScreen = () => {
  const {themeColors} = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('playlists');
  const navigation = useNavigation();

  const favoritePlaylists = useSelector(
    state => state.favourites?.playlists || [],
  );

  const favoriteAffirmations = useSelector(
    state => state.favourites?.affirmations || [],
  );

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

  const handleCardPress = useCallback(
    playlistId => {
      navigation.navigate('PlaylistDetails', {playlistId});
    },
    [navigation],
  );

  const renderContent = useMemo(() => {
    if (activeTab === 'playlists') {
      return favoritePlaylists.length ? (
        <FlatList
          key="playlists"
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
      ) : (
        <Text style={styles.placeholder}>{TEXTS.NOSAVED.PLAYLISTS}</Text>
      );
    }

    if (activeTab === 'affirmations') {
      return favoriteAffirmations.length ? (
        <FlatList
          key="affirmations"
          data={favoriteAffirmations}
          keyExtractor={(item, index) => item.text + index}
          contentContainerStyle={{gap: 16, paddingBottom: 16}}
          renderItem={({item}) => <PostCard text={item.text} />}
        />
      ) : (
        <Text style={styles.placeholder}>{TEXTS.NOSAVED.AFFIRMATIONS}</Text>
      );
    }

    return null;
  }, [
    activeTab,
    favoritePlaylists,
    favoriteAffirmations,
    handleCardPress,
    styles,
  ]);

  return (
    <View style={styles.container}>
      <FavouritesTabs activeTab={activeTab} onChange={setActiveTab} />
      {renderContent}
    </View>
  );
};

export default React.memo(FavouritesScreen);
