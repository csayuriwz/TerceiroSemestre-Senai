import { BoxInput } from "../../components/BoxInput/Index"
import { ContainerLabel, ContainerLevantado, ContainerP, ContainerPerfil, ContainerShadow } from "../../components/Container/Style"
import { Subtitle, TitleBlack } from "../../components/Title/Style"
import { ScrollForm } from "../../components/ScrollForm/Style"
import { ButtonGray, ButtonPerfil, ButtonTitle } from "../../components/Button/Style"

export const Perfil = () => {
    return (
       <ScrollForm>
        <ContainerP>
            <ProfilePic
                source={require('../../../src/assets/img/ImagePerfil.png')}
                resizeMode='cover'
            >

                <ContainerLevantado>
                    <TitleBlack>Richard Kosta</TitleBlack>
                    <Subtitle>richard.kosta@gmail.com</Subtitle>
                </ContainerLevantado>
            </ProfilePic>

            <BoxInput
                textLabel='Data de Nascimento'
                placeholder='04/05/1999'
                keyboardType='numeric'
                maxLength={10}
                editable={true}
                fieldWidth={80}
            />
            <BoxInput
                textLabel='CPF'
                placeholder='859********'
                keyboardType='numeric'
                maxLength={14}
                editable={true}
                fieldWidth={80}
            />
            <BoxInput
                textLabel='Endereço'
                placeholder='Rua Vicenso Silva, 987'
                keyboardType='default'
                maxLength={100}
                editable={true}
                fieldWidth={80}
            />

            <ContainerLabel>

            <BoxInput
                textLabel='Cep'
                placeholder='06548-909'
                keyboardType='numeric'
                maxLength={9}
                editable={true}
                fieldWidth={45}
            />
            <BoxInput
                textLabel='Cidade'
                placeholder='Moema-SP'
                keyboardType='default'
                maxLength={20}
                editable={true}
                fieldWidth={45}
            />
            </ContainerLabel>

            <ButtonPerfil>
                <ButtonTitle>SALVAR</ButtonTitle>
            </ButtonPerfil>
            <ButtonPerfil>
                <ButtonTitle>EDITAR</ButtonTitle>
            </ButtonPerfil>
            <ButtonGray>
                <ButtonTitle>Sair do app</ButtonTitle>
            </ButtonGray>
        </ContainerP>
        </ScrollForm> 
    )
}