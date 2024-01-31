import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/components/container/Container';
import { Titulo } from './src/components/Titulo/Titulo';
import { Botao, Botao2 } from './src/components/Botao/Botao';
import { TextoBotao } from './src/components/TextoBotao/TextoBotao';

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
    <Container>

      <View style={styles.quadrado}>

        {/* titulo */}
        <Titulo>Contador: {count} </Titulo>

        {/* BtnIncrement */}
        <Botao onPress={increment}  >

          {/* textoBtnIncrement */}
          <TextoBotao>Incrementar</TextoBotao>
        </Botao>

        {/* BtnDecrement */}
        <Botao2 onPress={decrementar} >

          {/* textoBtnDecrement */}
          <TextoBotao>Decrementar</TextoBotao>
        </Botao2>

      </View>

      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  quadrado: {
    backgroundColor: '#CDC2C2',
    padding: 53,
    borderRadius: 20,
    borderWidth: 2,
    height: 200,
    width: 240,
  },

});
