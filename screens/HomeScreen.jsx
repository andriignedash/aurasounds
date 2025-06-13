import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import CategoryTabs from '../components/CategoryTabs';
import Card from '../components/Card';
import AffirmationBanner from '../components/AffirmationBanner';
import COLORS from '../constants/colors';
import moodPlaylists from '../data/moodPlaylists';
import chakraPlaylists from '../data/chakraPlaylists';
import {Image, Text} from 'react-native';
import CustomButton from '../components/CustomButton';
import AffirmationSection from '../components/AffirmationSection';

export default function HomeScreen({navigation}) {
  const [activeCategory, setActiveCategory] = useState('mood');

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
      style={styles.scroll}>
      <View style={styles.container}>
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
    backgroundColor: COLORS.neutralLightest,
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
  scroll: {
    backgroundColor: COLORS.neutralLightest,
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
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 75,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
});
