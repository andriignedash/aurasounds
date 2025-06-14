import React, {useContext} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

const CustomButton = ({title, onPress, variant = 'default'}) => {
  const {themeColors} = useContext(ThemeContext);
  const isOutline = variant === 'outline';

  const styles = StyleSheet.create({
    button: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 12,
      borderWidth: 2,
    },
    defaultButton: {
      backgroundColor: themeColors.highlightDarkest,
      borderColor: themeColors.highlightDarkest,
      shadowColor: themeColors.primary,
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
    },
    outlineButton: {
      backgroundColor: 'transparent',
      borderColor: themeColors.highlightDarkest,
    },
    text: {
      fontWeight: '600',
      fontSize: 16,
      textAlign: 'center',
    },
    defaultText: {
      color: themeColors.textLight,
    },
    outlineText: {
      color: themeColors.highlightDarkest,
    },
  });

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isOutline ? styles.outlineButton : styles.defaultButton,
      ]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          isOutline ? styles.outlineText : styles.defaultText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
