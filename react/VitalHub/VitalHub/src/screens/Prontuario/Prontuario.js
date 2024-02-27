import { BoxInput, BoxInput2, BoxInput3 } from '../../components/BoxInput/Index'
import { ButtonGray, ButtonGrayP, ButtonPerfil, ButtonTitle } from '../../components/Button/Style'
import { ContainerPerfil, ContainerShadow } from '../../components/Container/Style'
import { ImagePerfil } from '../../components/Image/Image'
import { LinkMediumBlue } from '../../components/LinkMedium/Style'
import { ScrollForm } from '../../components/ScrollForm/Style'
import { Subtitle, TitleBlack } from '../../components/Title/Style'

export const Prontuario = () => {
    return(
        <ScrollForm>
        <ContainerPerfil>
            <ImagePerfil
                source={require('../../../src/assets/img/ImagePerfil.png')}
                resizeMode='cover'
            >

                <ContainerShadow>
                    <TitleBlack>Richard Kosta</TitleBlack>
                    <Subtitle>richard.kosta@gmail.com</Subtitle>
                </ContainerShadow>
            </ImagePerfil>

            <BoxInput2
                textLabel='Descrição da consulta'
                placeholder='Descrição'
                keyboardType='numeric'
                maxLength={10}
                editable={true}
                fieldWidth={80}
                customHeight={120}
                customP={60}
            />
            <BoxInput2
                textLabel='Diagnóstico do paciente'
                placeholder='Diagnóstico'
                keyboardType='numeric'
                maxLength={14}
                editable={true}
                fieldWidth={80}
            />
            <BoxInput2
                textLabel='Prescrição médica'
                placeholder='Prescrição médica'
                keyboardType='default'
                maxLength={100}
                editable={true}
                fieldWidth={80}
                customHeight={120}
                customP={60}
            />

            <ButtonPerfil>
                <ButtonTitle>SALVAR</ButtonTitle>
            </ButtonPerfil>

            <ButtonGrayP>
                <ButtonTitle>EDITAR</ButtonTitle>
            </ButtonGrayP>

            <LinkMediumBlue>Cancelar</LinkMediumBlue>
        </ContainerPerfil>
        </ScrollForm> 
    )
}