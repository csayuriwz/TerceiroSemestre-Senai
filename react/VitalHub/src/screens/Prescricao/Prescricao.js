import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollForm } from '../../components/ScrollForm/Style';
import { ContainerLabel, ContainerLevantado, ContainerP, ContainerPic, ContainerShadow, Separator } from '../../components/Container/Style';
import { ProfilePic } from '../../components/Image/Style';
import { InputBox } from '../../components/InputBox/Index';
import { InputLabelE } from '../../components/Label/Style';
import { Subtitle, TextCancelSub, TextPic, TitleBlack } from '../../components/Title/Style';
import { BtnCamera, BtnCameraText } from '../../components/Button/Style';
import { BtnCard, BtnSubText } from '../../components/Modals/ModalCard/Style';

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

            <InputBox
                textLabel='Descrição da consulta'
                placeholder='O paciente possuí uma infecção no 
                ouvido. Necessário repouse de 2 dias
                 e acompanhamento médico constante'
                keyboardType='numeric'
                maxLength={100}
                editable={true}
                fieldWidth={80}
                customHeight={121}
                customP={25}
                multiline={true}
                numberOfLines={2}
            />
            <InputBox
                textLabel='Diagnóstico do paciente'
                placeholder='Infecção no ouvido'
                keyboardType='numeric'
                maxLength={14}
                editable={true}
                fieldWidth={80}
            />
            <InputBox
                textLabel='Prescrição médica'
                placeholder='Medicamento: Advil
                Dosagem: 50 mg
                Frequência: 3 vezes ao dia
                Duração: 3 dias'
                keyboardType='default'
                maxLength={100}
                editable={true}
                fieldWidth={80}
                multiline={true}
                numberOfLines={4}
                customHeight={133}
                customP={25}
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