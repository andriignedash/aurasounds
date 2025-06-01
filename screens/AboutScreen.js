import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import COLORS from '../constants/colors';
import { TEXTS } from '../constants/texts';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{TEXTS.ABOUT.TITLE}</Text>
      <Text style={styles.text}>{TEXTS.ABOUT.DESCRIPTION}</Text>
      <Text style={styles.version}>{TEXTS.ABOUT.VERSION}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutralLightest,
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
  version: {
    marginTop: 24,
    fontSize: 14,
    color: COLORS.neutralMedium,
  },
});
