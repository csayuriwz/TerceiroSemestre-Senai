import { ContainerLabel, ContainerLevantado, ContainerP, PerfilCityInputsContainer } from "../../components/Container/Style"
import { Subtitle, TitleBlack } from "../../components/Title/Style"
import { ScrollForm } from "../../components/ScrollForm/Style"
import { BtnCinza, BtnPerfil, BtnTitle, } from "../../components/Button/Style"
import { ProfilePic } from "../../components/Image/Style"
import { InputBox } from "../../components/InputBox/Index"
import { PerfilInput } from "../../components/Input/PerfilInput/Index"

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

                <PerfilInput
                    inputLabel="Data de nascimento"
                    inputPlaceholder="04/15/1999"
                    containerWidth="90%"
                    inputType={"numeric"}
                />
                <PerfilInput
                    inputLabel="CPF"
                    inputPlaceholder="859********"
                    containerWidth="90%"
                    inputType={"numeric"}
                />
                <PerfilInput
                    inputLabel="Endereço"
                    inputPlaceholder="Rua Vicente Silva, 987"
                    containerWidth="90%"
                />

                <PerfilCityInputsContainer>
                    <PerfilInput
                        inputLabel="Cep"
                        inputPlaceholder="06548-909"
                        containerWidth="40%"
                    />
                    <PerfilInput
                        inputLabel="Cidade"
                        inputPlaceholder="Moema-SP"
                        containerWidth="40%"
                    />
                </PerfilCityInputsContainer>
                <BtnPerfil>
                    <BtnTitle>SALVAR</BtnTitle>
                </BtnPerfil>
                <BtnPerfil>
                    <BtnTitle>EDITAR</BtnTitle>
                </BtnPerfil>
                <BtnCinza>
                    <BtnTitle>Sair do app</BtnTitle>
                </BtnCinza>
            </ContainerP>
        </ScrollForm>
    )
}