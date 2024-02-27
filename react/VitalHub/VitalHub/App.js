import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_600SemiBold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { MontserratAlternates_500Medium, MontserratAlternates_700Bold, MontserratAlternates_600SemiBold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';
import { EsqueceuSenha } from './src/screens/EsqueceuSenha/EsqueceuSenha';
import { VerifiqueEmail } from './src/screens/VerifiqueEmail/VerifiqueEmail';
import { NovaSenha } from './src/screens/NovaSenha/NovaSenha';
import { Cadastro } from './src/screens/Cadastro/Cadastro';
import { Perfil } from './src/screens/Perfil/Perfil';
import { Prontuario } from './src/screens/Prontuario/Prontuario';
import { MedicosConsulta } from './src/screens/MedicosConsulta/MedicosConsulta';
import { PacienteConsulta } from './src/screens/PacienteConsulta/PacienteConsulta';
import { Clinica } from './src/screens/Clinica/Clinica';
import { SelecionarMedico } from './src/screens/SelecionarMedico/SelecionarMedico';
import { CalendarioPaciente } from './src/screens/CalendarioPaciente/CalendarioPaciente';
import { Mapa } from './src/screens/Mapa/Mapa';
import { Prescricao } from './src/screens/Prescricao/Prescricao';


const Stack = createNativeStackNavigator()

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold, 
    MontserratAlternates_700Bold, 
    Montserrat_500Medium, 
    Montserrat_600SemiBold, 
    Montserrat_700Bold, 
    Quicksand_400Regular,
    Quicksand_500Medium, 
    Quicksand_600SemiBold, 
    Quicksand_700Bold
  });
  
  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    // Container = Envolve toda a estrutura para a navegação
      // Navigator - componente para a navegação
        //Screen - tela
          //name: nome da tela
          //component: componente que sera chamado
          //options(title): título da tela
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Navegacao'
              component={Navegacao}
              options={{ title: "Navegação" }}
            />

            <Stack.Screen
              name='Login'
              component={Login}
              options={{ title: "Login" }}
            />
            
            <Stack.Screen
              name='EsqueceuSenha'
              component={EsqueceuSenha}
              options={{ title: "Esqueci a senha" }}
            />
            <Stack.Screen
              name='VerifiqueEmail'
              component={VerifiqueEmail}
              options={{ title: "Verifique seu Email" }}
            />
            <Stack.Screen
              name='NovaSenha'
              component={NovaSenha}
              options={{ title: "Nova Senha" }}
            />
            <Stack.Screen
              name='Cadastro'
              component={Cadastro}
              options={{ title: "Cadastro" }}
            />
            <Stack.Screen
              name='Perfil'
              component={Perfil}
              options={{ title: "Perfil" }}
            />
            <Stack.Screen
              name='Prontuario'
              component={Prontuario}
              options={{ title: "Prontuário" }}
            />
            <Stack.Screen
              name='Home'
              component={MedicosConsulta}
              options={{ title: "Consultas" }}
            />
            <Stack.Screen
              name='HomePaciente'
              component={PacienteConsulta}
              options={{ title: "Consultas Paciente" }}
            />
            <Stack.Screen
              name='Clinica'
              component={Clinica}
              options={{ title: "Clínicas" }}
            />
            <Stack.Screen
              name='Medico'
              component={SelecionarMedico}
              options={{ title: "Médico" }}
            />
            <Stack.Screen
              name='Calendario'
              component={CalendarioPaciente}
              options={{ title: "Calendário" }}
            />
            <Stack.Screen
              name='Mapa'
              component={Mapa}
              options={{ title: "Mapa" }}
            />
            <Stack.Screen
              name='Prescricao'
              component={Prescricao}
              options={{ title: "Prescrição" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

