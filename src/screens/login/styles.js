import { StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
    borderColor: COLORS.TEXT,
    borderWidth: 1,
    borderRadius: 30,
    width: '70%',
    height: 45,
    margin: 10,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: 'center',
    width: '100%',
    color: COLORS.TEXT,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: COLORS.BUTTON,
  },

  loginText: {
    color: COLORS.TEXT,
  },

  errorText: {
    fontSize: 13,
    color: 'red',
    marginBottom: 10,
  },
});

export default styles;
