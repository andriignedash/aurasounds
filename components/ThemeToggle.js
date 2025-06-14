import React, {useContext} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ThemeToggle() {
  const {theme, toggleTheme, themeColors} = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const styles = StyleSheet.create({
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 0,
      borderBottomWidth: 1,
      borderBottomColor: themeColors.neutralLight,
    },
    iconWrapper: {
      width: 32,
      alignItems: 'center',
      marginRight: 12,
    },
    label: {
      fontSize: 16,
      color: themeColors.textPrimary,
    },
  });

  return (
    <View style={styles.option}>
      <View style={styles.iconWrapper}>
        <Icon name="moon-outline" size={20} color={themeColors.textPrimary} />
      </View>
      <Text style={styles.label}>Dark Mode</Text>
      <View style={{flex: 1}} />
      <Switch
        value={isDark}
        onValueChange={toggleTheme}
        trackColor={{false: '#ccc', true: themeColors.highlightDarkest}}
        thumbColor={isDark ? themeColors.highlightDarkest : '#f4f3f4'}
      />
    </View>
  );
}
