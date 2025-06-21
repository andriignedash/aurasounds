import React, {useState, useContext, useCallback, useMemo} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import CategoryTabs from '../components/CategoryTabs';
import Card from '../components/Card';
import AffirmationBanner from '../components/AffirmationBanner';
import moodPlaylists from '../data/moodPlaylists';
import chakraPlaylists from '../data/chakraPlaylists';
import AffirmationSection from '../components/AffirmationSection';
import {ThemeContext} from '../context/ThemeContext';

const HomeScreen = ({navigation}) => {
  const [activeCategory, setActiveCategory] = useState('mood');
  const {themeColors} = useContext(ThemeContext);

  const handlePress = useCallback(
    playlistId => {
      navigation.navigate('PlaylistDetails', {playlistId});
    },
    [navigation],
  );

  const content = useMemo(() => {
    switch (activeCategory) {
      case 'mood':
        return (
          <>
            <View style={styles.grid}>
              {moodPlaylists.map(playlist => (
                <View key={playlist.id} style={styles.cardWrapper}>
                  <Card
                    playlistId={playlist.id}
                    onPress={() => handlePress(playlist.id)}
                  />
                </View>
              ))}
            </View>
            <AffirmationBanner
              onMorePress={() => setActiveCategory('affirmation')}
            />
          </>
        );
      case 'chakra':
        return (
          <View style={styles.grid}>
            {chakraPlaylists.map(playlist => (
              <View key={playlist.id} style={styles.cardWrapper}>
                <Card
                  playlistId={playlist.id}
                  onPress={() => handlePress(playlist.id)}
                />
              </View>
            ))}
          </View>
        );
      case 'affirmation':
        return <AffirmationSection />;
      default:
        return null;
    }
  }, [activeCategory, handlePress]);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      style={{backgroundColor: themeColors.background}}>
      <View
        style={[styles.container, {backgroundColor: themeColors.background}]}>
        <CategoryTabs
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
        {content}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 24,
  },
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  cardWrapper: {
    width: '48%',
    marginBottom: 16,
  },
});

export default React.memo(HomeScreen);
