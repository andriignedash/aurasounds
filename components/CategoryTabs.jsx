import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

const categories = [
  { key: 'mood', label: 'Mood' },
  { key: 'chakra', label: 'Chakra' },
  { key: 'affirmation', label: 'Affirmation' },
];

const CategoryTabs = ({ activeCategory, onChange }) => {
  return (
    <View style={styles.container}>
      {categories.map((category, index) => {
        const isActive = activeCategory === category.key;
        return (
          <React.Fragment key={category.key}>
            <TouchableOpacity
              style={[styles.tab, isActive && styles.activeTab]}
              onPress={() => onChange(category.key)}
            >
              <Text
                style={[
                  styles.label,
                  isActive ? styles.activeLabel : styles.inactiveLabel,
                ]}
              >
                {category.label}
              </Text>
            </TouchableOpacity>
            {index < categories.length - 1 && <View style={styles.divider} />}
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

export default CategoryTabs;
