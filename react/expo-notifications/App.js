import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//importar os recursos do expo notifications
import * as Notifications from "expo-notifications";
//solicita permissao ao abrir o app no mobile
Notifications.requestPermissionsAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({

    //mostrar alert de not recebida
    shouldShowAlert: true,

    //reproduz som ao receber not
    shouldPlaySound: true,

    //nmr de not no icne do app
    shouldSetBadge: false
  })
});

export default function App() {

//funcao p lidar c a chamada de notificacao
  const handleCallNotifications = async () => {

    //obtem o status da permisao
    const { status } = await Notifications.getPermissionsAsync();

    //verifica se o usuario concedeu a permissao
    if (status !== "granted") {
      alert("vc nao autorizou as notificacoes");
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bem vindo ao Senai!",
        body:"Notificacao recebida."
      },
      trigger:null,
    });

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCallNotifications}>
        <Text>Clique aqui!</Text>
      </TouchableOpacity>
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
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
  },
  text: {
    color: 'black',
    fontSize:24,
    fontWeight: "bold"

  },
});
