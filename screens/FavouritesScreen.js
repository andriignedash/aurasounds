import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import COLORS from '../constants/colors';
import FavouritesTabs from '../components/FavouritesTabs';
import {TEXTS} from '../constants/texts';

export default function FavouritesScreen() {
  const [activeTab, setActiveTab] = useState('playlists');

  const renderContent = () => {
    switch (activeTab) {
      case 'playlists':
        return (
          <Text style={styles.placeholder}>{TEXTS.NOSAVED.PLAYLISTS}</Text>
        );
      case 'affirmations':
        return (
          <Text style={styles.placeholder}>{TEXTS.NOSAVED.AFFIRMATIONS}</Text>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <FavouritesTabs activeTab={activeTab} onChange={setActiveTab} />
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.neutralLightest,
  },
  placeholder: {
    marginTop: 32,
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});
