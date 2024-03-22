import { StatusBar } from 'expo-status-bar';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import { useEffect, useState, useRef } from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons'
import { BtnTitle } from '../Button/Style';
import { BtnCardSub, BtnModalCard, BtnSubText } from '../Modals/ModalCard/Style';

/*

  1 - quando salvar a foto e clicar na lixeira remover da galeria
  2 - permitir foto com flash ✅  
  3 - botao para recarregar o autofocus
  4 - Capturar e salvar video

*/

export function CameraExpo({
  visible,
  setShowCameraModal,
  setCameraCapture
}) {
  const cameraRef = useRef(null)
  const [tipoCamera, setTipoCamera] = useState(CameraType.back)
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
  const [openModal, setOpenModal] = useState(false)
  const [photo, setPhoto] = useState(null)
  // const [imageUri, setImageUri] = useState(null)

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()

      const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync()
    })();
  }, [])

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync()

      setPhoto(photo.uri)

      setOpenModal(true)

      console.log(photo);
    }
  }

  async function obterImagem(){
    await setCameraCapture(photo)

    HandleClose()
  }

  function HandleClose(){
    setShowCameraModal(false)
  }



  async function ClearPhoto() {

    setPhoto(null)

    setOpenModal(false)
  }

  async function UploadPhoto() {
    await MediaLibrary.createAssetAsync(photo)
      .then(() => {
        alert('Foto salva com sucesso')
      }).catch(() => {
        alert('Não foi possivel processar a foto')
      })
  }


  return (
    <Modal visible={visible} style={styles.container}>
      <Camera
        flashMode={flash}
        ref={cameraRef}
        style={styles.camera}
        type={tipoCamera}
      >
        <TouchableOpacity onPress={() => setFlash(flash == Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off)} style={styles.btnFlash}>
          <Feather name={flash === Camera.Constants.FlashMode.on ? "zap" : "zap-off"} size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.viewFlip}>
          <TouchableOpacity onPress={() => setTipoCamera(tipoCamera == CameraType.back ? CameraType.front : CameraType.back)} style={styles.btnFlip}>
            <Text style={styles.textFlip}>Trocar</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity onPress={() => CapturePhoto()} style={styles.btnCapture}>
        <FontAwesome name="camera" size={24} color="#fff" />
      </TouchableOpacity>


      <Modal animationType='slide' transparent={false} visible={openModal}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
        <Image
            style={{ width: '100%', height: 500, borderRadius: 15, marginTop: 50 }}
            source={{ uri: photo }}
          />
          <View style={{ margin: 10, flexDirection: 'row', gap: 20 }}>

            {/* Botão */}
            <View style={{ flex: 1 ,flexDirection: 'column', alignItems: 'center',}}>
              <BtnModalCard onPress={() => obterImagem() && ClearPhoto()}>
                <BtnTitle>Confirmar</BtnTitle>
              </BtnModalCard>

              <BtnCardSub onPress={() => ClearPhoto() && setShowCameraModal(false)}>
                <BtnSubText>Cancelar</BtnSubText>
              </BtnCardSub>
            </View>

            

          </View>
      
        </View>
      </Modal>
    </Modal>
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
    height: '%80'
  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  btnFlip: {
    padding: 20,
  },
  textFlip: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  btnCapture: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnClear: {
    padding: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnUpload: {
    padding: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnFlash: {
    padding: 25,
    marginTop: 20
  },
});
