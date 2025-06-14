import React, {useEffect, useState, useContext} from 'react';
import {View, Text, Image, ActivityIndicator, StyleSheet} from 'react-native';
import CustomButton from './CustomButton';
import {fetchAffirmations} from '../api/api';
import {ThemeContext} from '../context/ThemeContext';

export default function AffirmationSection() {
  const {themeColors} = useContext(ThemeContext);
  const [affirmations, setAffirmations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAffirmations()
      .then(data => {
        const filtered = data.filter(
          item => item.text && item.text.length < 120,
        );
        setAffirmations(filtered);
        setCurrentIndex(Math.floor(Math.random() * filtered.length));
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleNewAffirmation = () => {
    const nextIndex = Math.floor(Math.random() * affirmations.length);
    setCurrentIndex(nextIndex);
  };

  if (loading) {
    return (
      <ActivityIndicator
        style={{marginTop: 32}}
        size="large"
        color={themeColors.textPrimary}
      />
    );
  }

  if (error) {
    return (
      <Text style={{color: 'red', marginTop: 32, textAlign: 'center'}}>
        {error}
      </Text>
    );
  }

  const current = affirmations[currentIndex];

  const styles = StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      marginTop: 35,
      paddingBottom: 32,
    },
    image: {
      width: 300,
      height: 250,
      borderRadius: 20,
      resizeMode: 'cover',
      marginBottom: 70,
    },
    text: {
      fontSize: 20,
      fontWeight: '700',
      color: themeColors.textPrimary,
      textAlign: 'center',
      marginBottom: 75,
    },
    buttonRow: {
      flexDirection: 'row',
      gap: 12,
    },
  });

  return (
    <View style={styles.wrapper}>
      <Image
        source={require('../assets/images/affirmation.png')}
        style={styles.image}
      />
      <Text style={styles.text}>{current.text}</Text>
      <View style={styles.buttonRow}>
        <CustomButton
          title="Save to favorites"
          variant="outline"
          onPress={() => {}}
        />
        <CustomButton title="New affirmation" onPress={handleNewAffirmation} />
      </View>
    </View>
  );
}
