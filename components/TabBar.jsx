import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import COLORS from '../constants/colors';

const TabBar = ({activeTab, onTabPress}) => {
  const tabs = [
    {key: 'home', label: 'Home', icon: require('../assets/icons/home.png')},
    {
      key: 'favorites',
      label: 'Favourites',
      icon: require('../assets/icons/heart.png'),
    },
    {
      key: 'profile',
      label: 'Profile',
      icon: require('../assets/icons/user.png'),
    },
  ];

  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tabItem}
            onPress={() => onTabPress(tab.key)}>
            <Image
              source={tab.icon}
              style={[styles.icon, isActive && styles.iconActive]}
            />
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLORS.lightest,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
  },
  tabItem: {
    alignItems: 'center',
    gap: 4,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: COLORS.textTertiary,
  },
  iconActive: {
    tintColor: COLORS.highlightDarkest,
  },
  label: {
    fontSize: 12,
    color: COLORS.textTertiary,
  },
  labelActive: {
    color: COLORS.highlightDarkest,
    fontWeight: '600',
  },
});

export default TabBar;
