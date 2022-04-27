import React from 'react';
import { ActivityIndicator, View, ImageBackground } from 'react-native';
import styles from './styles';

export default function LoadingIndicator() {
  return (
    <ImageBackground source={require('../../assets/images/phone_background.png')} style={styles.image}>
      <View style={styles.listFooter}>
        <ActivityIndicator animating color="white" size="large" />
      </View>
    </ImageBackground>
  );
}
