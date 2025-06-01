import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../constants/colors';

const tabs = [
  {key: 'playlists', label: 'Playlists'},
  {key: 'affirmations', label: 'Affirmations'},
];

const FavouritesTabs = ({activeTab, onChange}) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.key;
        return (
          <React.Fragment key={tab.key}>
            <TouchableOpacity
              style={[styles.tab, isActive && styles.activeTab]}
              onPress={() => onChange(tab.key)}>
              <Text
                style={[
                  styles.label,
                  isActive ? styles.activeLabel : styles.inactiveLabel,
                ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
            {index < tabs.length - 1 && <View style={styles.divider} />}
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 4,
    backgroundColor: COLORS.neutralLight,
    borderRadius: 16,
    overflow: 'hidden',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  activeTab: {
    backgroundColor: COLORS.neutralLightest,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  activeLabel: {
    color: COLORS.textPrimary,
    fontWeight: '700',
  },
  inactiveLabel: {
    color: COLORS.textSecondary,
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: COLORS.neutralMedium,
    marginHorizontal: 8,
    opacity: 0.4,
  },
});

export default FavouritesTabs;
