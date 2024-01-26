import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>

      <Person name='Carlos' age='37'/>
      <Person name='Edu' age='35'/>
      <Person name='Lucas' age='16'/>

      <StatusBar style="auto"/>
    </SafeAreaView>
  );
};

