import { BtnCadastro, BtnTitle } from '../../components/Button/Style'
import { Container } from '../../components/Container/Style'
import { LinkCancel } from '../../components/Link/Style'
import { Logo } from '../../components/Logo/Style'
import { Subtitle, Title } from '../../components/Title/Style'

export const Cadastro = ({ navigation }) => {
    return (
        <Container>
            <Logo
                source={require('../../../src/assets/img/VitalHub_Logo.png')}
            />

            <Title>Criar conta</Title>

            <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Subtitle>


            <Input
                placeholder={'Usuário ou E-mail'}
            />
            <Input
                placeholder={'Senha'}
            />
            <Input
                placeholder={'Confirmar senha'}
            />

            <BtnCadastro>
                <BtnTitle>Confirmar</BtnTitle>
            </BtnCadastro>

            <LinkCancel onPress={() => navigation.navigate('Login')}>Cancelar</LinkCancel>

        </Container>
    )
}