import { Text, Image } from "react-native"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { Button, ButtonTitle, ButtonGoogle, ButtonGoogleTitle } from "../../components/Button/Style"
import { LinkMedium, LinkMediumBlue } from "../../components/LinkMedium/Style"
import { ContentAccount } from "../../components/ContentAccount/Style"
import { TextAccount } from "../../components/TextAccount/Style"

import { AntDesign } from '@expo/vector-icons';

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

            <LinkMedium onPress={() => navigation.navigate('EsqueceuSenha')}>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign
                name="google"   
                size={20} color='#496BBA'
                />
                <ButtonGoogleTitle>entrar com Google</ButtonGoogleTitle>
            </ButtonGoogle>
            
            <ContentAccount>
                <TextAccount>Não tem conta? <LinkMediumBlue onPress={() => navigation.navigate('Cadastro')}>Crie uma conta agora!</LinkMediumBlue></TextAccount>
            </ContentAccount>

        </Container>
    )
}