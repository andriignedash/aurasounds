import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import COLORS from '../constants/colors';

const Card = ({title, subtitle, imageSource}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.shadowWrapper}>
        <View style={styles.card}>
          <Image source={imageSource} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 24,
    overflow: 'visible',
  },
  shadowWrapper: {
    shadowColor: COLORS.neutralDark,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 24,
    backgroundColor: 'transparent',
  },
  card: {
    backgroundColor: COLORS.neutralLightest,
    borderRadius: 24,
    overflow: 'hidden',
    width: 166,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
    textAlign: 'center',
  },
});

export default Card;
