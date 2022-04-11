import LoginScreen from '../screens/login/Login';
import ProgramsListScreen from '../screens/programsList/ProgramsList';
import ProgramScreen from '../screens/program/Program';
import COLORS from '../styles/colors';

const SCREENS = [
  {
    name: 'Login',
    component: LoginScreen,
    headerStyle: { backgroundColor: COLORS.HEADER },
    headerTitleStyle: { color: COLORS.TEXT },
  },
  {
    name: 'Your programs',
    component: ProgramsListScreen,
    headerStyle: { backgroundColor: COLORS.HEADER },
    headerTitleStyle: { color: COLORS.TEXT },
    headerTintColor: COLORS.TEXT,
  },
  {
    name: 'Program',
    component: ProgramScreen,
    headerStyle: { backgroundColor: COLORS.HEADER },
    headerTitleStyle: { color: COLORS.TEXT },
    headerTintColor: COLORS.TEXT,
  },
];

export default SCREENS;
