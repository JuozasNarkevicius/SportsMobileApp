import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import authenticationService from '../../repositories/authentication';
import COLORS from '../../styles/colors';

function LogoutButton() {
  const navigation = useNavigation();

  const handleLogoutClick = async () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
    await authenticationService.logoutAPI();
  };
  return (
    <TouchableOpacity onPress={handleLogoutClick}>
      <Icon
        name="logout"
        iconType="material"
        iconStyle={{ color: COLORS.TEXT, fontSize: 30 }}
      />
    </TouchableOpacity>
  );
}

export default LogoutButton;
