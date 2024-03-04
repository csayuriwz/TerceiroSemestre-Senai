import { ContainerLabel, ContainerLevantado, ContainerP} from "../../components/Container/Style"
import { Subtitle, TitleBlack } from "../../components/Title/Style"
import { ScrollForm } from "../../components/ScrollForm/Style"
import { BtnCinza, BtnPerfil, BtnTitle,} from "../../components/Button/Style"
import { ProfilePic } from "../../components/Image/Style"
import { InputBox } from "../../components/InputBox/Index"

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

            <InputBox
                textLabel='Data de Nascimento'
                placeholder='04/05/1999'
                keyboardType='numeric'
                maxLength={10}
                editable={true}
                fieldWidth={80}
            />
            <InputBox
                textLabel='CPF'
                placeholder='859********'
                keyboardType='numeric'
                maxLength={14}
                editable={true}
                fieldWidth={80}
            />
            <InputBox
                textLabel='Endereço'
                placeholder='Rua Vicenso Silva, 987'
                keyboardType='default'
                maxLength={100}
                editable={true}
                fieldWidth={80}
            />

            <ContainerLabel>

            <InputBox
                textLabel='Cep'
                placeholder='06548-909'
                keyboardType='numeric'
                maxLength={9}
                editable={true}
                fieldWidth={45}
            />
            <InputBox
                textLabel='Cidade'
                placeholder='Moema-SP'
                keyboardType='default'
                maxLength={20}
                editable={true}
                fieldWidth={45}
            />
            </ContainerLabel>

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