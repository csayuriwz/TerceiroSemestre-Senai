import { Text } from 'react-native'
import { Container } from '../../components/Container/Style'
import { Logo } from '../../components/Logo/style'
import { Title } from '../../components/Title/style'
import { Input } from '../../components/Input/style'
import { LinkMedium } from '../../components/LinkMedium/Style'
import { Button, ButtonGoogle } from '../../components/Button/Style'
import { ButtonTitle, ButtonTitleGoogle  } from '../../components/ButtonTitle/Style'

import { AntDesign } from '@expo/vector-icons';
// import { LinkBold } from '../../components/LinkBold/Style'
// import { TextAccount } from '../../components/TextAccount/Style'
import { ContentAccount } from '../../components/ContentAccount/Style'
import { LinkBold, TextAccount } from '../../components/TextAccount/Style'


export const Login = () => {
    return (
        <Container>
            <Logo 
                source={require('../../../assets/VitalHub_Logo 1.png')}
            
            />
            <Title>
                Entrar ou criar conta
            </Title>

            <Input
             placeholder="Usuario ou email"
            />

            <Input placeholder="Senha" />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign name="google" size={18} color="#496bba" />
                <ButtonTitleGoogle>
                    Entrar com Google
                </ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta?</TextAccount>
                <LinkBold> Crie uma agora!</LinkBold>
            </ContentAccount>


        </Container>
    )
}
