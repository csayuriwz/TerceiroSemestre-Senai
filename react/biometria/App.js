import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

// import * as LocalAuthentication from "expo-local-authentication";
import * as LocalAuthentication from "expo-local-authentication"
import  AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react';
import moment from 'moment/moment';

export default function App() {

  const [dateHistory, setDateHistory] = useState({})
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [authenticated, setAuthenticated] = useState(false)

  async function getHistory() {
    const objAuth = await AsyncStorage.getItem('autenticate');
  
    if (objAuth) {
      setDateHistory(JSON.parse(objAuth)
      );
    }
  }
  
  async function handleAuthentication() {
    const BiometricExist = await LocalAuthentication.isEnrolledAsync();
  
    if (!BiometricExist) {
      return Alert.alert(
        'FALHA AO LOGAR',
        'mao foi encontrada nenhuma biometria foi cadastrada'
      )
    }
  
    const auth = await LocalAuthentication.authenticateAsync();
  
    setAuthenticated(auth.success)
  
    if (auth.success) {
      setHistory();
    }
  }
  
  useEffect(() => {
    checkExistAuthentication();
  
    getHistory();
  }, []);
  

  async function checkExistAuthentication() {
    const compatible = await LocalAuthentication.hasHardwareAsync();

    setIsBiometricSupported(compatible);

  }

  async function setHistory() {
    const objAuth = {
      dataAuthentication: moment().format('DD/MM/YY HH:mm:ss')
    };

    await AsyncStorage.setItem('authenticate', JSON.stringify(objAuth));
  }

  async function getHistory() {
    const objAuth = await AsyncStorage.getItem('autenticate');
  
    if (objAuth) {
      setDateHistory(JSON.parse(objAuth)
      );
    }
  }
  
  async function handleAuthentication() {
    const BiometricExist = await LocalAuthentication.isEnrolledAsync();
  
    if (!BiometricExist) {
      return Alert.alert(
        'FALHA AO LOGAR',
        'mao foi encontrada nenhuma biometria foi cadastrada'
      )
    }
  
    const auth = await LocalAuthentication.authenticateAsync();
  
    setAuthenticated(auth.success)
  
    if (auth.success) {
      setHistory();
    }
  }
  
  useEffect(() => {
    checkExistAuthentication();
  
    getHistory();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isBiometricSupported ? 'seu dispositivo eh compativel com a biometria' : 'seu dispositivo nao eh compativel c biometria / face Id'}
      </Text>
  
      <TouchableOpacity style={styles.btnAuth} onPress={() => handleAuthentication()}>
        <Text style={styles.txtAuth}>Autenticar Acesso</Text>
      </TouchableOpacity>
  
      <Text style={[styles.txtReturn, { color: authenticated ? 'green' : 'red' }]}>
        {
        authenticated
          ? 'autenticado'
          : 'nao autenticado'
          }
      </Text>
  
      {
        dateHistory.dataAuthentication
          ? <Text style={styles.txtHistory}>Ultimo acesso em: {dateHistory.dataAuthentication}
          </Text>
          : null
      }
  
    </View>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    width: '72%',
    textAlign: 'center',
    lineHeight: 32,
  },
  btnAuth: {
    padding: 16,
    borderRadius: 10,
    margin: 20,
    backgroundColor: 'pink'

  },
  txtAuth: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  txtReturn: {
    fontSize: 22,
    marginTop: 50
  },
  txtHistory: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#858383',
    position: 'absolute',
    bottom: 120
  }
});
