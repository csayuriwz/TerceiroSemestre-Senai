import { BoxInput } from '../../components/BoxInput'
import { Container, ContainerInput } from '../../components/Container/Style'
import { ImageP } from '../../components/ImageP/style'
import { SubTitle } from '../../components/SubTitle/style'
import { Title } from '../../components/Title/style'

import { ScrollView } from 'react-native'



export function Perfil() {
    return (
        <ScrollView>
            <Container>


                <ImageP
                    source={require('../../../assets/Rectangle 425.png')}

                />

                <Title>
                    Richard Kosta
                </Title>

                <SubTitle>richard.kosta@gmail.com</SubTitle>


                <BoxInput
                    textLabel='Informar CEP'
                    placeholder='CEP...'
                    fieldWidht={80}
                    editable={true}
                    KeyType='numeric'
                    MaxLenght={9}

                />
            </Container>

        </ScrollView>
    )

}