import { Btn, BtnTitle } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { LinkCancel } from "../../components/Link/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, Title } from "../../components/Title/Style"

export const EsqueceuSenha = ({navigation}) => {
    return(
        <Container>
        <Logo
        source={require('../../../src/assets/img/VitalHub_Logo.png')}
        />
        <Title>Recuperar Senha</Title>
        <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>

        <Input
         placeholder={'Usuário ou E-mail'}
         />

         <Btn>
            <BtnTitle>Continuar</BtnTitle>
         </Btn>

         <LinkCancel onPress={() => navigation.navigate('Login')}>Cancelar</LinkCancel>

    </Container>
    )
}