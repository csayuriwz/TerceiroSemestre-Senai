import { Btn, BtnTitle, Button, ButtonTitle } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { InputSenha } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, Title } from "../../components/Title/Style"

export const NovaSenha = ({navigation}) => {
    return(
        <Container>
            <Logo
                source={require('../../../src/assets/img/VitalHub_LogoAzul.png')}
            />

            <Title>Redefinir senha</Title>
            <Subtitle>Insira e confirme a sua nova senha</Subtitle>

            <InputSenha
                placeholder='Nova senha'
            />
            <InputSenha
                placeholder='Confirmar nova senha'
            />

            <Btn onPress={() => navigation.replace('Login')}>
                <BtnTitle>confirmar nova senha</BtnTitle>
            </Btn>
        </Container>
    )
}