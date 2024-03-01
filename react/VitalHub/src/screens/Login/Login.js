import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { BtnGoogle, BtnGoogleTitle, Btn, BtnGoogle, BtnGoogleTitle, BtnTitle } from "../../components/Button/Style"
import { Link } from "../../components/LinkMedium/Style"
import { ContentAccount } from "../../components/ContentAccount/Style"
import { TextAccount } from "../../components/TextAccount/Style"
import { AntDesign } from '@expo/vector-icons'
import { LinkBlue } from "../../components/Link/Style"

export const Login = ({navigation}) => {
    return(
        <Container>

            <Logo
                source={require('../../../src/assets/img/VitalHub_Logo.png')}
            />

            <Title>Entrar ou criar conta</Title>
            
            <Input
                placeholder={'Usuário ou E-mail'}
            />

            <Input
                placeholder={'Senha'}
            />

            <Link onPress={() => navigation.navigate('EsqueceuSenha')}>Esqueceu sua senha?</Link>

            <Btn>
                <BtnTitle>entrar</BtnTitle>
            </Btn>

            <BtnGoogle>
                <AntDesign
                name="google"   
                size={20} color='#496BBA'
                />
                <BtnGoogleTitle>entrar com Google</BtnGoogleTitle>
            </BtnGoogle>
            
            <ContentAccount>
                <TextAccount>Não tem conta? <LinkBlue onPress={() => navigation.navigate('Cadastro')}>Crie uma conta agora!</LinkBlue></TextAccount>
            </ContentAccount>

        </Container>
    )
}