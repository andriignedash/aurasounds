import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../constants/colors';

const Player = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.action}>
          <View style={styles.iconCircle}>
            <Icon
              name="time-outline"
              size={20}
              color={COLORS.neutralLightest}
            />
          </View>
          <Text style={styles.label}>Timer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Icon name="play" size={40} color={COLORS.highlightDarkest} />
          <Text style={[styles.label, styles.activeLabel]}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <View style={styles.iconCircle}>
            <Icon
              name="heart-outline"
              size={20}
              color={COLORS.neutralLightest}
            />
          </View>
          <Text style={styles.label}>Like</Text>
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
    backgroundColor: COLORS.neutralMedium,
    padding: 10,
    borderRadius: 20,
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  activeLabel: {
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginTop: 4,
  },
  progressBarWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  progressBarBackground: {
    width: '90%',
    height: 16,
    backgroundColor: COLORS.neutralMedium,
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressBarFill: {
    width: '40%',
    height: '100%',
    backgroundColor: COLORS.highlightDarkest,
  },
});

export default Player;
