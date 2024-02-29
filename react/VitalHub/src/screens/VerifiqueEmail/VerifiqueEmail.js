import { Button, ButtonTitle } from "../../components/Button/Style"
import { Container, ContainerInput } from "../../components/Container/Style"
import { InputCode } from "../../components/Input/Style"
import { LinkCancel, LinkCode, LinkMedium } from "../../components/LinkMedium/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, SubtitleBlue, Title } from "../../components/Title/Style"

export const VerifiqueEmail = () => {
    return(
        <Container>
            <Logo
                source={require('../../../src/assets/img/VitalHub_Logo.png')}
            />

            <Title>Verifique seu e-mail</Title>

            <Subtitle>Digite o código de 4 dígitos enviado para o e-mail</Subtitle>
            <SubtitleBlue>username@email.com</SubtitleBlue>
            
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

            <Button>
                <ButtonTitle>entrar</ButtonTitle>
            </Button>

            <LinkCode>Reenviar código</LinkCode>



        </Container>
    )
}