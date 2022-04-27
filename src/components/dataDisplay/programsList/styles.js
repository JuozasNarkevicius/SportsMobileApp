import { StyleSheet } from 'react-native';
import COLORS from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  listItem: {
    backgroundColor: COLORS.ITEM,
  },
  scrollView: {
    marginHorizontal: 5,
  },
  itemText: {
    color: COLORS.TEXT,
  },
});

export default styles;
