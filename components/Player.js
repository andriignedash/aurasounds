import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/ThemeContext';

const Player = ({onLikeToggle, isLiked}) => {
  const {themeColors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    wrapper: {
      marginTop: 40,
      width: '100%',
      alignItems: 'center',
    },
    actionsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    action: {
      alignItems: 'center',
    },
    iconCircle: {
      backgroundColor: themeColors.neutralMedium,
      padding: 10,
      borderRadius: 20,
      marginBottom: 4,
    },
    label: {
      fontSize: 14,
      color: themeColors.textSecondary,
    },
    activeLabel: {
      fontWeight: '700',
      color: themeColors.textPrimary,
      marginTop: 4,
    },
    progressBarWrapper: {
      width: '100%',
      alignItems: 'center',
    },
    progressBarBackground: {
      width: '90%',
      height: 16,
      backgroundColor: themeColors.neutralMedium,
      borderRadius: 8,
      overflow: 'hidden',
    },
    progressBarFill: {
      width: '40%',
      height: '100%',
      backgroundColor: themeColors.highlightDarkest,
    },
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.action}>
          <View style={styles.iconCircle}>
            <Icon
              name="time-outline"
              size={20}
              color={themeColors.neutralLightest}
            />
          </View>
          <Text style={styles.label}>Timer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action}>
          <Icon name="play" size={40} color={themeColors.highlightDarkest} />
          <Text style={[styles.label, styles.activeLabel]}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={onLikeToggle}>
          <View style={styles.iconCircle}>
            <Icon
              name={isLiked ? 'heart' : 'heart-outline'}
              size={20}
              color={themeColors.neutralLightest}
            />
          </View>
          <Text style={styles.label}>{isLiked ? 'Liked' : 'Like'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressBarWrapper}>
        <View style={styles.progressBarBackground}>
          <View style={styles.progressBarFill} />
        </View>
      </View>
    </View>
  );
};

export default Player;
