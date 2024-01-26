import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>

<Image
        style={styles.image}
        source={require('../../assets/Vector.png')}
      />
      
      <TextInput
        style={styles.inputA}
        defaultValue='Digite seu email:'
      />
      <TextInput
        style={styles.inputB}
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
  inputA: {
    width: '90%',
    borderColor: 'white',
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginTop: 100,
    borderRadius:12,
    color: 'white'
  },
  inputB: {
    width: '90%',
    borderColor: 'white',
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginTop: 30,
    borderRadius:12,
    color: 'white'
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 5,
    borderRadius:12,
  },
  botao: {
    width: '40%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    borderRadius:12,
  },
  txtbotao: {
    color: 'white',
    textTransform: 'uppercase',
  }


});
