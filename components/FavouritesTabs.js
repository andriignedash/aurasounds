import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

const tabs = [
  {key: 'playlists', label: 'Playlists'},
  {key: 'affirmations', label: 'Affirmations'},
];

const FavouritesTabs = ({activeTab, onChange}) => {
  const {themeColors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 4,
      backgroundColor: themeColors.neutralLight,
      borderRadius: 16,
      overflow: 'hidden',
      alignSelf: 'center',
      alignItems: 'center',
      marginBottom: 24,
    },
    activeTab: {
      backgroundColor: themeColors.neutralLightest,
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
      color: themeColors.textPrimary,
      fontWeight: '700',
    },
    inactiveLabel: {
      color: themeColors.textSecondary,
    },
    divider: {
      width: 1,
      height: 20,
      backgroundColor: themeColors.neutralMedium,
      marginHorizontal: 8,
      opacity: 0.4,
    },
  });

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

export default FavouritesTabs;
