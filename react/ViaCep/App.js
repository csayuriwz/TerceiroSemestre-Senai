import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFonts, roboto_bold, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Header } from './src/components/Header'
import { ContainerApp } from './style'
import { Home } from './src/screens/Home/inedx';


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
      <StatusBar
        barStyle='default'
        backgroundColor='transparent'
        translucent
      />

      {/* HEADER */}
      <Header />

      {/* HOME */}
      <ScrollView>
        <Home/>
      </ScrollView>
    </ContainerApp>
  );
}

const styles = StyleSheet.create({

});
