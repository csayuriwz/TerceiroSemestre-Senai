import { StatusBar } from 'expo-status-bar';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Camera, CameraType } from 'expo-camera';

import * as MediaLibrary from 'expo-media-library';

import { useEffect, useRef, useState } from 'react';

import { FontAwesome } from '@expo/vector-icons';
import { Btn } from '../../components/Button/Style';

export default function Camera2({ navigation, setfotoTirada }) {

    const cameraRef = useRef(null)
    const [tipoCamera, setTipoCamera] = useState(CameraType.front)
    const [openModal, setOpenModal] = useState(false)
    const [lanterna, setLanterna] = useState(Camera.Constants.FlashMode.off)
    const [salvarPhoto, setSalvarPhoto] = useState(null)

    

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()

            const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync()
        })();
    }, [])

    async function CapturePhoto() {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync()
            setSalvarPhoto(photo.uri)

            setOpenModal(true)

            console.log(photo)

            await setfotoTirada(photo.uri);
        }
    }


    function ClearPhoto() {
        setSalvarPhoto(null)

        setOpenModal(false)
    }

    async function UploadPhoto() {
        await MediaLibrary.createAssetAsync(salvarPhoto)
            .then(() => {
                alert('foto salva com sucesso')

            }).catch(error => {
                console.log('nao foi possivel salvar a foto')
            })
    }

    return (
        <View style={styles.container}>

            <Camera style={styles.camera} type={tipoCamera} ref={cameraRef} flashMode={lanterna}>

                <View style={styles.viewFlip}>

                    <TouchableOpacity style={styles.btnFlip} onPress={() => setTipoCamera(tipoCamera == CameraType.front ? CameraType.back : CameraType.front)}>
                        <Text style={styles.txtFlip}>Trocar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnFlash} onPress={() => setLanterna(lanterna == Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off)}>
                        <Text style={styles.txtFlip}>Flash</Text>
                    </TouchableOpacity>
                </View>

            </Camera>

            <TouchableOpacity style={styles.btnCapture} onPress={() => CapturePhoto()}>
                <FontAwesome name='camera' size={24} color="#ffff" />
            </TouchableOpacity>

            <Modal animationType='slide' transparent={false} visible={openModal}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>

                    <View style={{ margin: 10, flexDirection: 'row', gap: 20 }}>

                        <TouchableOpacity style={styles.btnClear} onPress={() => ClearPhoto()}>
                            <FontAwesome name='trash' size={36} color="#ff0000" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnUpload} onPress={() => UploadPhoto()}>
                            <FontAwesome name='upload' size={36} color="#121212" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnBack} onPress={() => navigation.replace("Prescricao")}>
                            <FontAwesome name='mosquito' size={36} color="#121212" />
                        </TouchableOpacity>

                        
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
    },
    btnClear: {
        padding: 20,
        backgroundColor: "transparent",

        justifyContent: 'center',
        alignItems: 'center'
    },
    btnUpload: {
        padding: 20,
        backgroundColor: "transparent",

        justifyContent: 'center',
        alignItems: 'center'
    },
    btnFlash: {
        padding: 20,
        backgroundColor: "transparent",

        justifyContent: 'center',
        alignItems: 'center'
    },
    btnBack: {
        padding: 20,
        backgroundColor: "transparent",
        position: 'absolute',
        bottom: 90,
        right: 200,

        justifyContent: 'center',
        alignItems: 'center'
    },

});
