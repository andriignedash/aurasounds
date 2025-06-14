import React, {useState, useContext} from 'react';
import {View, ScrollView, StyleSheet, Text, Image} from 'react-native';
import CategoryTabs from '../components/CategoryTabs';
import Card from '../components/Card';
import AffirmationBanner from '../components/AffirmationBanner';
import moodPlaylists from '../data/moodPlaylists';
import chakraPlaylists from '../data/chakraPlaylists';
import CustomButton from '../components/CustomButton';
import AffirmationSection from '../components/AffirmationSection';
import {ThemeContext} from '../context/ThemeContext';

export default function HomeScreen({navigation}) {
  const [activeCategory, setActiveCategory] = useState('mood');
  const {themeColors} = useContext(ThemeContext);

  const renderContent = () => {
    switch (activeCategory) {
      case 'mood':
        return (
          <>
            <View style={styles.grid}>
              {moodPlaylists.map(playlist => (
                <View key={playlist.id} style={styles.cardWrapper}>
                  <Card
                    playlistId={playlist.id}
                    onPress={() =>
                      navigation.navigate('PlaylistDetails', {
                        playlistId: playlist.id,
                      })
                    }
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
                  onPress={() =>
                    navigation.navigate('PlaylistDetails', {
                      playlistId: playlist.id,
                    })
                  }
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
  };

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
        {renderContent()}
      </View>
    </ScrollView>
  );
}

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
  affirmationWrapper: {
    alignItems: 'center',
    marginTop: 35,
    paddingBottom: 32,
  },
  affirmationImage: {
    width: 300,
    height: 250,
    borderRadius: 20,
    resizeMode: 'cover',
    marginBottom: 70,
  },
  affirmationText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 75,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
});
