import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import {View, Text, Image, ActivityIndicator, StyleSheet} from 'react-native';
import CustomButton from './CustomButton';
import {fetchAffirmations} from '../api/api';
import {ThemeContext} from '../context/ThemeContext';

const AffirmationSection = () => {
  const {themeColors} = useContext(ThemeContext);
  const [affirmations, setAffirmations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (hasLoaded.current) {
      setLoading(false);
      return;
    }
    fetchAffirmations()
      .then(data => {
        const filtered = data.filter(
          item => item.text && item.text.length < 120,
        );
        setAffirmations(filtered);
        setCurrentIndex(Math.floor(Math.random() * filtered.length));
        hasLoaded.current = true;
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleNewAffirmation = useCallback(() => {
    if (affirmations.length === 0) return;
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * affirmations.length);
    } while (nextIndex === currentIndex && affirmations.length > 1);
    setCurrentIndex(nextIndex);
  }, [affirmations, currentIndex]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
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
      }),
    [themeColors],
  );

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

  if (!current) return null;

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
};

export default React.memo(AffirmationSection);
