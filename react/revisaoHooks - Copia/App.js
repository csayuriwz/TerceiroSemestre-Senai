import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  //hook de state
  const [count, setCount] = useState(0)

  //funcao para encrementar
  const increment = () => {
    setCount(count + 1)
  }

  const decrementar = () => {
    setCount(count - 1)
  }


  useEffect(() => {
    console.warn('contador atualizado: ${count}')
  }, [count])

  return (
    <View style={styles.container}>

      <View style={styles.quadrado}>
        <Text >Contador: {count} </Text>
        <View style={styles.botoes}>
          <TouchableOpacity onPress={increment} style={styles.botao} >
            <Text>Incrementar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={decrementar} style={styles.botao2} >
            <Text>decrementar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#672C2C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#A14E4E',
  },
  botao2: {
    backgroundColor: '#A14E4E',
 
  },
  texto: {
    color: 'black'
  },
  quadrado: {
    backgroundColor: '#CDC2C2',
    padding: 50,
    borderRadius: 20,
    


  },
  botoes: {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space between'
   
   
  }

});
