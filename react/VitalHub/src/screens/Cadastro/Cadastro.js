import { Button } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container } from "../../components/Container/Style"
import { ContentAccount, ContentActions } from "../../components/ContentAccount/Style"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo/style"
import { SubTitle } from "../../components/SubTitle/style"
import { LinkBold } from "../../components/TextAccount/Style"
import { Title } from "../../components/Title/style"

export const Cadastro = () => {
    return (
        <Container>
            <Logo
                source={require('../../../assets/VitalHub_Logo 1.png')}

            />

            <Title>Criar conta</Title>

            <SubTitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</SubTitle>

            <Input
                placeholder="Usuario ou email"
            />

            <Input
                placeholder="Senha"
            />

            <Input
                placeholder="Confrimar senha"
            />

            <Button>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <ContentActions>
                <LinkBold>Cancelar</LinkBold>
            </ContentActions>
        </Container>
    )
}