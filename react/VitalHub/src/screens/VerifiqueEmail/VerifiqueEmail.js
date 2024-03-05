import { BtnCadastro, BtnTitle, Button, ButtonTitle } from "../../components/Button/Style"
import { Container, ContainerInput } from "../../components/Container/Style"
import { InputCode } from "../../components/Input/Style"
import { LinkCode } from "../../components/Link/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, SubtitleLink, Title } from "../../components/Title/Style"

export const VerifiqueEmail = ({navigation}) => {
    return(
        <Container>
            <Logo
                source={require('../../../src/assets/img/VitalHub_Logo.png')}
            />

            <Title>Verifique seu e-mail</Title>

            <Subtitle>Digite o código de 4 dígitos enviado para o e-mail</Subtitle>
            <SubtitleLink>username@email.com</SubtitleLink>
            
            <ContainerInput>
                <InputCode
                     keyboardType="numeric"
                />
                <InputCode
                     keyboardType="numeric"
                />
                <InputCode
                     keyboardType="numeric"
                />
                <InputCode
                     keyboardType="numeric"
                />
            </ContainerInput>

            <BtnCadastro onPress={() => navigation.replace('NovaSenha')}>
                <BtnTitle>entrar</BtnTitle>
            </BtnCadastro>

            <LinkCode>Reenviar código</LinkCode>

        </Container>
    )
}