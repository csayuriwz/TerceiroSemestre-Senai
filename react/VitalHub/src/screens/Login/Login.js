import { Text } from 'react-native'
import { Container } from '../../components/Container/Style'
import { Logo } from '../../components/Logo/style'
import { Title } from '../../components/Title/style'
import { Input } from '../../components/Input/style'

export const Login = () => {
    return (
        <Container>
            <Logo 
                source={require('../../../assets/VitalHub_Logo 1.png')}
            
            />
            <Title>
                Entrar ou criar conta
            </Title>

            <Input />

            <Input />
{/* 
            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Butto>
                <ButtonTitle>Entrar</ButtonTitle>
            </Butto>

            <ButtonGoogle>
                <ButtonTitleGoogle>
                    Entrar com Google
                </ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Nao tem conta? Crie uma conta google</TextAccount>
            </ContentAccount> */}


        </Container>
    )
}