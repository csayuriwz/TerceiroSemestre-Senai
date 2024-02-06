import { StatusBar } from 'expo-status-bar';
import SplashScreen from './src/screens/SplashScreen/index'
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';


import { useFonts, MontserratAlternates_600SemiBold } from '@expo-google-fonts/montserrat-alternates'

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (


  //container - envolve toda a estrutura de navegacao
  //navigator - componente de navegacao
  //screen - tela
  //name - nome da tela
  //component - componente que sera chamado
  //option(title) - titulo da tela


  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Navegacao"
        component={Navegacao}
        options={{ title: "Navegacao" }}

      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}

      />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <SplashScreen/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
