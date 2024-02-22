import { StatusBar } from 'expo-status-bar';
import SplashScreen from './src/screens/SplashScreen/index'
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha';
import { RedefinirSenha } from './src/screens/RedefinirSenha/RedefinirSenha';
import { Cadastro } from './src/screens/Cadastro/Cadastro';
import { VerificarEmail } from './src/screens/VerificarEmail/VerificarEmail';
import { PerfilEditar } from './src/screens/PerfilEditar/PerfilEditar';
import { Home } from './src/screens/Home/Home';
import { InserirProntuario } from './src/screens/InserirProntuario/InserirProntuario';

import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/montserrat-alternates'
import { Perfil } from './src/screens/Perfil/Perfil';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_400Regular

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
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
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

        <Stack.Screen
          name='Recuperar Senha'
          component={RecuperarSenha}
          options={{ title: "Recuperar Senha" }}
        />

        <Stack.Screen
          name='Redefinir Senha'
          component={RedefinirSenha}
          options={{ title: "Redefinir Senha" }}
        />

        <Stack.Screen
          name='Cadastro'
          component={Cadastro}
          options={{ title: "Cadastro" }}
        />

        <Stack.Screen
          name='VerificarEmail'
          component={VerificarEmail}
          options={{ title: "VerificarEmail" }}
        />

        <Stack.Screen
          name='Perfil'
          component={Perfil}
          options={{ title: "Perfil" }}
        />

        <Stack.Screen
          name='PerfilEditar'
          component={PerfilEditar}
          options={{ title: "PerfilEditar" }}
        />

        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: "Home" }}
        />

        <Stack.Screen
          name='InserirProntuario'
          component={InserirProntuario}
          options={{ title: "InserirProntuario" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
