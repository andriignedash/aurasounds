import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from './CustomButton';
import {ThemeContext} from '../context/ThemeContext';

const AffirmationBanner = ({onMorePress}) => {
  const {themeColors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: themeColors.highlightLightest,
      borderRadius: 16,
      padding: 20,
      shadowColor: themeColors.shadow,
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
      color: themeColors.textPrimary,
    },
    subtitle: {
      fontSize: 16,
      color: themeColors.textSecondary,
      marginTop: 4,
    },
    buttonWrapper: {
      alignSelf: 'flex-start',
      marginTop: 12,
    },
  });

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

export default AffirmationBanner;
