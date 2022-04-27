import LoginScreen from '../screens/login/Login';
import ProgramsListScreen from '../screens/programsList/ProgramsList';
import ProgramScreen from '../screens/program/Program';
import COLORS from '../styles/colors';
import LogoutButton from '../components/logoutButton/LogoutButton';

const SCREENS = [
  {
    name: 'Login',
    component: LoginScreen,
    options: {
      headerStyle: { backgroundColor: COLORS.HEADER },
      headerTitleStyle: { color: COLORS.TEXT },
    },
  },
  {
    name: 'Your programs',
    component: ProgramsListScreen,
    options: {
      headerStyle: { backgroundColor: COLORS.HEADER },
      headerTitleStyle: { color: COLORS.TEXT },
      headerTintColor: COLORS.TEXT,
      headerRight: () => <LogoutButton />,
    },
  },
  {
    name: 'Program',
    component: ProgramScreen,
    options: {
      headerStyle: { backgroundColor: COLORS.HEADER },
      headerTitleStyle: { color: COLORS.TEXT },
      headerTintColor: COLORS.TEXT,
      headerRight: () => <LogoutButton />,
    },
  },
];

export default SCREENS;
