import React from 'react';
import {
  Text, View, TextInput, TouchableOpacity,
} from 'react-native';
import styles from './styles';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Your programs')}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
