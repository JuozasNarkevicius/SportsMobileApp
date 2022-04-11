import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';

export default function LoadingIndicator() {
  return (
    <View style={styles.listFooter}>
      <ActivityIndicator animating color="white" size="large" />
    </View>
  );
}
