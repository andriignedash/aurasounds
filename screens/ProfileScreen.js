import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Avatar from '../components/Avatar';
import Icon from 'react-native-vector-icons/Ionicons';
import {SCREENS} from '../constants/texts';
import ThemeToggle from '../components/ThemeToggle';
import {ThemeContext} from '../context/ThemeContext';

const options = [
  {label: 'My Favorites', icon: 'heart-outline', screen: SCREENS.FAVOURITES},
  {label: 'Settings', icon: 'settings-outline', screen: SCREENS.SETTINGS},
  {
    label: 'Feedback',
    icon: 'chatbox-ellipses-outline',
    screen: SCREENS.FEEDBACK,
  },
  {label: 'About', icon: 'information-circle-outline', screen: SCREENS.ABOUT},
  {label: 'Log out', icon: 'log-out-outline', screen: 'Logout'},
];

export default function ProfileScreen({navigation}) {
  const {themeColors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: themeColors.neutralLightest,
      flex: 1,
    },
    content: {
      alignItems: 'center',
      paddingTop: 32,
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: themeColors.textPrimary,
      marginTop: 16,
      marginBottom: 24,
    },
    optionsContainer: {
      width: '100%',
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: themeColors.neutralLight,
    },
    iconWrapper: {
      width: 32,
      alignItems: 'center',
      marginRight: 12,
    },
    label: {
      fontSize: 16,
      color: themeColors.textPrimary,
    },
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Avatar onPress={() => {}} />
      <Text style={styles.title}>Namaste!</Text>

      <View style={styles.optionsContainer}>
        {options.map(option => (
          <TouchableOpacity
            key={option.label}
            style={styles.option}
            onPress={() => navigation.navigate(option.screen)}>
            <View style={styles.iconWrapper}>
              <Icon
                name={option.icon}
                size={20}
                color={themeColors.textPrimary}
              />
            </View>
            <Text style={styles.label}>{option.label}</Text>
          </TouchableOpacity>
        ))}
        <ThemeToggle />
      </View>
    </ScrollView>
  );
}
