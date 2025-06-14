import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

const categories = [
  {key: 'mood', label: 'Mood'},
  {key: 'chakra', label: 'Chakra'},
  {key: 'affirmation', label: 'Affirmation'},
];

const CategoryTabs = ({activeCategory, onChange}) => {
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
      {categories.map((category, index) => {
        const isActive = activeCategory === category.key;
        return (
          <React.Fragment key={category.key}>
            <TouchableOpacity
              style={[styles.tab, isActive && styles.activeTab]}
              onPress={() => onChange(category.key)}>
              <Text
                style={[
                  styles.label,
                  isActive ? styles.activeLabel : styles.inactiveLabel,
                ]}>
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

export default CategoryTabs;
