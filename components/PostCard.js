import React, {useContext, memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

const PostCard = ({text}) => {
  const {themeColors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    card: {
      padding: 16,
      backgroundColor: themeColors.background,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    text: {
      fontSize: 16,
      color: themeColors.textPrimary,
    },
  });

  return (
    <View style={styles.card}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default memo(PostCard);
