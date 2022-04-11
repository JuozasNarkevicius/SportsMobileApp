import { StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  listFooter: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
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

export default styles;
