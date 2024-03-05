import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollForm } from '../../components/ScrollForm/Style';
import { ContainerLabel, ContainerLevantado, ContainerP, ContainerPic, ContainerShadow, Separator } from '../../components/Container/Style';
import { ProfilePic } from '../../components/Image/Style';
import { InputBox } from '../../components/InputBox/Index';
import { InputLabelE } from '../../components/Label/Style';
import { Subtitle, TextCancelSub, TextPic, TitleBlack } from '../../components/Title/Style';
import { BtnCamera, BtnCameraText } from '../../components/Button/Style';
import { BtnCard, BtnSubText } from '../../components/Modals/ModalCard/Style';
import { PerfilInput } from '../../components/Input/PerfilInput/Index';

export const Prescricao = () => {
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
                    <MaterialCommunityIcons name="file-alert-outline" size={24} color="#4E4B59" />
                    <TextPic>Nenhuma foto informada</TextPic>
                </ContainerPic>

                <ContainerLabel>
                    <BtnCamera>
                        <BtnCameraText>
                            <MaterialCommunityIcons name="camera-plus-outline" size={24} color="white" />
                        </BtnCameraText>
                        <BtnCameraText>
                            enviar
                        </BtnCameraText>
                    </BtnCamera>
                    <TextCancelSub>Cancelar</TextCancelSub>
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
            </ContainerP>
        </ScrollForm>
    )
}