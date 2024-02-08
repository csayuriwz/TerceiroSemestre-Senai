import { Button } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container } from "../../components/Container/Style"
import { ContentActions } from "../../components/ContentAccount/Style"
import { InputNumber } from "../../components/Input/style"
import { Logo } from "../../components/Logo/style"
import { SubTitle } from "../../components/SubTitle/style"
import { LinkBold, LinkUser } from "../../components/TextAccount/Style"
import { Title } from "../../components/Title/style"
import { InputContainer } from "../../components/InputContainer/InputContainer"

export const VerificarEmail = () => {
    return (
        <Container>
            <Logo
                source={require('../../../assets/VitalHub_Logo 1.png')}
            />

            <Title>
                Verifique seu Email
            </Title>

            <SubTitle>Digite o código de 4 dígitos enviado para </SubTitle>
            <LinkUser> username@email.com</LinkUser>

            <InputContainer>
                <InputNumber
                    placeholder="0"
                    keyboardType="numeric"
                    maxLenght={1}
                />
                <InputNumber
                    placeholder="0"
                    keyboardType="numeric"
                    maxLenght={1}
                />
                <InputNumber
                    placeholder="0"
                    keyboardType="numeric"
                    maxLenght={1}
                />
                <InputNumber
                    placeholder="0"
                    keyboardType="numeric"
                    maxLenght={1}
                />

            </InputContainer>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ContentActions>
                <LinkBold>Reenviar código</LinkBold>
            </ContentActions>

        </Container>
    )

}