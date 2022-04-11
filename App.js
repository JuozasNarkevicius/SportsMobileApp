import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login/Login';
import ProgramsListScreen from './src/screens/programsList/ProgramsList';
import ProgramScreen from './src/screens/program/Program';
import LogoutButton from './src/components/logoutButton/LogoutButton';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Your programs"
          component={ProgramsListScreen}
          options={{
            headerRight: () => <LogoutButton />,
          }}
        />
        <Stack.Screen
          name="Program"
          component={ProgramScreen}
          options={{
            title: '',
            headerRight: () => <LogoutButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
