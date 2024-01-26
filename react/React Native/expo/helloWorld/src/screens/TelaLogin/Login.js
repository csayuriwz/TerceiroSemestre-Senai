import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require('../../assets/Vector.png')}
      />

      <Text style={styles.texto}>Login</Text>

      <TextInput
        style={styles.input}
        defaultValue='Digite seu email:'
      />
      <TextInput
        style={styles.input}
        defaultValue='Digite sua senha:'
      />
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.txtbotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#672C2C',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
  },
  input: {
    width: '90%',
    borderColor: 'white',
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginTop: 30,
    borderRadius: 12,
    color: 'white'
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 12,
  },
  botao: {
    width: '40%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    borderRadius: 12,
  },
  txtbotao: {
    color: 'white',
    textTransform: 'uppercase',
  },
  texto: {
    color: '#CDC2C2',
    fontSize: 30,
    marginTop: 30,
    fontWeight: 'semibold'
    
  },


});
