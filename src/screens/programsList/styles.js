import { StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  text: {
    color: COLORS.TEXT,
    fontSize: 25,
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default styles;
