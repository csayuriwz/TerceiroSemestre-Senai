import { Button } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo/style"
import { SubTitle } from "../../components/SubTitle/style"
import { Title } from "../../components/Title/style"

import { AntDesign } from '@expo/vector-icons';


export const RecuperarSenha = () => {
    return (
        <Container>
            <Logo
                source={require('../../../assets/VitalHub_Logo 1.png')}
            />

            <Title>
                Recuperar Senha
            </Title>

            <SubTitle>
                Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha
            </SubTitle>

            <Input
                placeholder="Usuario ou email"
            />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

        </Container>
    )
}