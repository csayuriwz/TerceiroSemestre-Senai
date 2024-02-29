import { ButtonCadastro, ButtonTitle } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { LinkCancel } from "../../components/LinkMedium/Style"
import { Logo } from "../../components/Logo/Style"
import { SubtitleCadastro, Title } from "../../components/Title/Style"

export const Cadastro = ({navigation}) => {
    return(
        <Container>
            <Logo
        source={require('../../../src/assets/img/VitalHub_Logo.png')}
        />
        <Title>Criar Conta</Title>
        <SubtitleCadastro>Insira seu endereço de e-mail e senha para realizar seu cadastro.</SubtitleCadastro>

        <Input
         placeholder={'Usuário ou E-mail'}
         />
        <Input
         placeholder={'Senha'}
         />
        <Input
         placeholder={'Confirmar senha'}
         />

         <ButtonCadastro>
            <ButtonTitle>Continuar</ButtonTitle>
         </ButtonCadastro>

         <LinkCancel onPress={() => navigation.navigate('Login')}>Cancelar</LinkCancel>
        </Container>
    )
}