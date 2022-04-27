import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground } from 'react-native';
import SCREENS from './src/constants/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ImageBackground
      source={require('./src/assets/images/phone_background.png')}
      style={{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          {SCREENS.map((screen) => (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
              options={screen.options}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}
