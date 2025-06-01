import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from './CustomButton';
import COLORS from '../constants/colors';

const AffirmationBanner = ({onMorePress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Affirmation of the day</Text>
      <Text style={styles.subtitle}>
        I am centered and connected to my energy.
      </Text>
      <View style={styles.buttonWrapper}>
        <CustomButton title="More" onPress={onMorePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.highlightLightest,
    borderRadius: 16,
    padding: 20,
    shadowColor: COLORS.neutralDark,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    width: 350,
    height: 160,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  buttonWrapper: {
    alignSelf: 'flex-start',
    marginTop: 12,
  },
});

export default AffirmationBanner;
