import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

export default function SettingsScreen() {
  const {themeColors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: themeColors.neutralLightest,
    },
    text: {
      fontSize: 20,
      fontWeight: '600',
      color: themeColors.textPrimary,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  );
}
