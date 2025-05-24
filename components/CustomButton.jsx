import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../constants/colors';

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.highlightDarkest,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: COLORS.primary,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    color: COLORS.textLight,
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CustomButton;
