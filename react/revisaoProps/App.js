import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Jogos from './src/components/Jogos/Jogos';
import { useFonts, PTSerif_400Regular_Italic } from '@expo-google-fonts/pt-serif';
import Person from './src/components/Person/Person';


export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    PTSerif_400Regular_Italic
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  const personList = [
    { id: '1', name: 'lucas', age: '16' },
    { id: '2', name: 'bianca', age: '16' },
    { id: '3', name: 'mariana', age: '16' },
  ]

  const jogosList = [
    { id: '1', name: 'league of legends', genero: 'estrategia', dLancamento: '12/06/2007' },
    { id: '2', name: 'stray', genero: 'aventura', dLancamento: '12/06/2022' },
    { id: '3', name: 'cat soup', genero: 'design', dLancamento: '12/06/2021' },

  ]


  return (
    <SafeAreaView>

      <FlatList data={personList} keyExtractor={(item) => item.id} renderItem={
        ({ item }) => <Person name={item.name} age={item.age} />
      } />

      <FlatList data={jogosList} keyExtractor={(item) => item.id} renderItem={
        ({ item }) => <Jogos name={item.name} genero={item.genero} dLancamento={item.dLancamento} />
      } />

      {/* <Person name='catarina' age='16'/>
      <Person name='bianca' age='16'/>
      <Person name='mari' age='16'/> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

