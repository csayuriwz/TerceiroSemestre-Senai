import { ContainerP } from "../../components/Container/Style"
import { ProfilePicSub } from "../../components/Image/Style"
import { InputBox } from "../../components/InputBox/Index"
import { TextGray, TitleSub } from "../../components/Title/Style"

export const Mapa = () => {
    return (
       
        <ContainerP>
            <ProfilePicSub
                source={require('../../../src/assets/img/Mapa.png')}
                resizeMode='cover'
            />

            <TitleSub>Clínica Natureh</TitleSub>
            <TextGray>São Paulo, SP</TextGray>

            <InputBox
                textLabel='Endereço'
                placeholder='Rua Vicenso Silva, 987'
                keyboardType='default'
                maxLength={100}
                editable={true}
                fieldWidth={80}
            />
            <ContainerSub>


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
            </ContainerSub>

        </ContainerP>
        
    )
}

