import { StatusBar } from 'expo-status-bar';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';

import { FontAwesome } from '@expo/vector-icons';

export default function App() {

  const cameraRef = useRef(null)
  const [tipoCamera, setTipoCamera] = useState(CameraType.front)
  const [openModal, setOpenModal] = useState(false)
  const [salvarPhoto, setSalvarPhoto] = useState(null)

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()
    })();
  }, [])

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync()
      setSalvarPhoto(photo.uri)

      setOpenModal(true)

      console.log(photo)
    }
  }

  return (
    <View style={styles.container}>

      <Camera style={styles.camera} type={tipoCamera} ref={cameraRef}>

        <View style={styles.viewFlip}>

          <TouchableOpacity style={styles.btnFlip} onPress={() => setTipoCamera(tipoCamera == CameraType.front ? CameraType.back : CameraType.front)}>
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>

        </View>

      </Camera>

      <TouchableOpacity style={styles.btnCapture} onPress={() => CapturePhoto()}>
        <FontAwesome name='camera' size={23} color="#ffff" />
      </TouchableOpacity>

      <Modal animationType='slide' transparent={false} visible={openModal}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>

          <View style={{ margin: 10, flexDirection: 'row' }}>

            {/* botao de controle */}
          </View>

          <Image
            style={{ width: '100%', height: 500, borderRadius: 15 }}
            source={{ uri: salvarPhoto }}
          />

        </View>
      </Modal>

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

  camera: {
    flex: 1,
    width: '100%',
    height: '80%',

  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row'

  },
  btnFlip: {
    padding: 20

  },
  txtFlip: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  btnCapture: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#121212",

    justifyContent: 'center',
    alignItems: 'center'
  }

});
