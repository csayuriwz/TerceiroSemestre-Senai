import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollForm } from '../../components/ScrollForm/Style';
import { ContainerLabel, ContainerLevantado, ContainerP, ContainerPic, ContainerShadow, Separator } from '../../components/Container/Style';
import { ProfilePic } from '../../components/Image/Style';
import { InputBox } from '../../components/InputBox/Index';
import { InputLabelE } from '../../components/Label/Style';
import { Subtitle, TextBtnCamera, TextCancelSub, TextPic, TitleBlack, TxtPic } from '../../components/Title/Style';
import { BtnCamera, BtnCameraText } from '../../components/Button/Style';
import { BtnCard, BtnSubText } from '../../components/Modals/ModalCard/Style';
import { PerfilInput } from '../../components/Input/PerfilInput/Index';


//import para funcionalidade da camera
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';
import BtnPhoto from '../../components/BtnPhoto/BtnPhoto';

export const Prescricao = ({ navigation }) => {
    const cameraRef = useRef(null)
    const [tipoCamera, setTipoCamera] = useState(CameraType.front)
    const [openModal, setOpenModal] = useState(false)
    const [salvarPhoto, setSalvarPhoto] = useState(null)

    const [showCameraModal, setShowCameraModal] = useState(false)
    const [cameraCapture, setCameraCapture] = useState(null)


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
        <ScrollForm>
            <ContainerP>
                <ProfilePic
                    source={require('../../../src/assets/img/ImagePrescricao.png')}
                    resizeMode='cover'
                >

                    <ContainerLevantado>
                        <TitleBlack>Dr. Claudio</TitleBlack>
                        <ContainerShadow>
                            <Subtitle>Cliníco geral</Subtitle>
                            <Subtitle>CRM-15286</Subtitle>
                        </ContainerShadow>
                    </ContainerLevantado>
                </ProfilePic>

                <PerfilInput
                    inputLabel="Descrição da consulta"
                    inputPlaceholder="Descreva a consulta..."
                    containerWidth="90%"
                />
                <PerfilInput
                    inputLabel="Diagnóstico do paciente"
                    inputPlaceholder="Diagnóstico do paciente..."
                    containerWidth="90%"
                />
                <PerfilInput
                    inputLabel="Prescrição médica"
                    inputPlaceholder="Prescrição médica..."
                    containerWidth="90%"
                />
                <PerfilInput
                    inputLabel="Exames médicos"
                    inputPlaceholder="Prescrição médica..."
                    containerWidth="90%"
                    inputType={"file"}
                />

                <InputLabelE>Exames médicos</InputLabelE>

                <ContainerPic>
                    {cameraCapture == null ? (
                        <>
                            <MaterialCommunityIcons name="file-alert-outline" size={24} color="#4E4B59" />
                            <TxtPic>Nenhuma foto informada</TxtPic>
                        </>
                    )
                        : (
                            <>
                                <Image style={{ width: '100%', height: 120, borderRadius: 5 }}
                                    source={{ uri: cameraCapture }}
                                />
                            </>

                        )}
                </ContainerPic>

                <ContainerLabel>
                    <BtnCamera onPress={() => setShowCameraModal(true)}>
                        <TextBtnCamera>
                            <MaterialCommunityIcons name="camera-plus-outline" size={24} color="white" />
                        </TextBtnCamera>
                        <TextBtnCamera>
                            enviar
                        </TextBtnCamera>
                    </BtnCamera>
                    <TextRed2 onPress={() => setCameraCapture(null)}>Cancelar</TextRed2>
                </ContainerLabel>

                <Separator></Separator>

                <InputBox
                    placeholder='Resultado do exame de sangue : 
                tudo normal'
                    keyboardType='default'
                    maxLength={100}
                    editable={true}
                    fieldWidth={80}
                    multiline={true}
                    numberOfLines={2}
                    customHeight={103}
                    customP={25}
                />

                <BtnCard>
                    <BtnSubText>Voltar</BtnSubText>
                </BtnCard>

                <CameraExpo
                    visible={showCameraModal}
                    setShowCameraModal={setShowCameraModal}
                    setCameraCapture={setCameraCapture}
                />
            </ContainerP>
        </ScrollForm>
    )
}