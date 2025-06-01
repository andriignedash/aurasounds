import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../constants/colors';

const CustomButton = ({title, onPress, variant = 'default'}) => {
  const isOutline = variant === 'outline';

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

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
  },
  defaultButton: {
    backgroundColor: COLORS.highlightDarkest,
    borderColor: COLORS.highlightDarkest,
    shadowColor: COLORS.primary,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderColor: COLORS.highlightDarkest,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  defaultText: {
    color: COLORS.textLight,
  },
  outlineText: {
    color: COLORS.highlightDarkest,
  },
});

export default CustomButton;
