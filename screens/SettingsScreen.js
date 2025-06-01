import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import COLORS from '../constants/colors';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.neutralLightest,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
});
