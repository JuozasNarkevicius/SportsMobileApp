import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import authenticationService from '../../repositories/authentication';

function LogoutButton() {
  const navigation = useNavigation();

  const handleLogoutClick = async () => {
    navigation.navigate('Login');
    await authenticationService.logoutAPI();
  };
  return (
    <TouchableOpacity onPress={handleLogoutClick}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );
}

export default LogoutButton;
