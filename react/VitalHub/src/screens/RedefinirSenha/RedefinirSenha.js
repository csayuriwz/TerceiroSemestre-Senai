import { Button } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo/style"
import { SubTitle } from "../../components/SubTitle/style"
import { Title } from "../../components/Title/style"

export const RedefinirSenha = () => {
    return (
        <Container>
            <Logo
                source={require('../../../assets/VitalHub_Logo 1.png')}
            />

            <Title>
                Redefinir Senha
            </Title>

            <SubTitle>
                Insira e confirme a sua nova senha
            </SubTitle>

            <Input
                placeholder="Nova Senha"
            />
            <Input
                placeholder="Confirme sua nova senha"
            />

            <Button>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </Button>
        </Container>
    )
}