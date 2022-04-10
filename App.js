import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login/Login';
import ProgramsListScreen from './src/screens/programsList/ProgramsList';
import ProgramScreen from './src/screens/program/Program';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="Your programs" component={ProgramsListScreen} />
        <Stack.Screen name="Program" component={ProgramScreen} options={{ title: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
