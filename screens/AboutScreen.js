import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {TEXTS} from '../constants/texts';

export default function AboutScreen() {
  const {themeColors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.neutralLightest,
      padding: 24,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: themeColors.textPrimary,
      marginBottom: 12,
    },
    text: {
      fontSize: 16,
      color: themeColors.textSecondary,
      lineHeight: 22,
    },
    version: {
      marginTop: 24,
      fontSize: 14,
      color: themeColors.neutralMedium,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{TEXTS.ABOUT.TITLE}</Text>
      <Text style={styles.text}>{TEXTS.ABOUT.DESCRIPTION}</Text>
      <Text style={styles.version}>{TEXTS.ABOUT.VERSION}</Text>
    </View>
  );
}
