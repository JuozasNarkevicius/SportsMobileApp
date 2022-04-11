import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREENS from './src/constants/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {SCREENS.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              headerStyle: screen.headerStyle,
              headerTitleStyle: screen.headerTitleStyle,
              headerTintColor: screen.headerTintColor,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
