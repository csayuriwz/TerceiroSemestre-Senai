import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts, roboto_bold, Roboto_500Medium} from '@expo-google-fonts/roboto';
import {Header} from './src/components/Header'
import {ContainerApp} from './style'


export default function App() {

  let [fontsLoaded, fontError] = useFonts({

    roboto_bold,
    Roboto_500Medium
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerApp>
      <StatusBar/>

      {/* HEADER */}
      <Header/>

    </ContainerApp>
  );
}

const styles = StyleSheet.create({

});
