import { StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  logoutButton: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#222222',
  },
  logoutIcon: {
    color: COLORS.TEXT,
  },
});

export default styles;
