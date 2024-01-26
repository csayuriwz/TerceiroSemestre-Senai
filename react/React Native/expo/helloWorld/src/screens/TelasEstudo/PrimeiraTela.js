import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (

    <View style={styles.container}>



      <Text style={styles.texto}>hello world!</Text>

      <Image
        style={styles.image}
        source={require('./src/assets/75e61549321041c0412d76b489e0e394.jpg')}
      />

      <TextInput
        style={styles.input}
        defaultValue='exemplo de input'
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.txtbotao} >exemplo botao</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  texto: {
    color: 'purple',
    fontSize: 30,
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  botao: {
    width: '90%',
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textbotao: {
    textTransform: 'uppercase',
    color: 'pink',
    fontSize: 18,
    fontWeight: 'bold'

  }

});
