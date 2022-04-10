import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export default function LoadingIndicator() {
    return (
        <View style={styles.listFooter}>
            <ActivityIndicator animating color="black" size="large"/>
        </View>
    );
}

const styles = StyleSheet.create({
    listFooter: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
    },
});
