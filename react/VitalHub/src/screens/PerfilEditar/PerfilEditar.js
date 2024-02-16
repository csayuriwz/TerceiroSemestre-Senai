import { BoxInput } from '../../components/BoxInput'
import { Button, ButtonP } from '../../components/Button/Style'
import { ButtonTitle } from '../../components/ButtonTitle/Style'
import { Container, ContainerInput } from '../../components/Container/Style'
import { ContainerInputP } from '../../components/ContainerInput/Style'
import { ImageP } from '../../components/ImageP/style'
import { SubTitle } from '../../components/SubTitle/style'
import { Title } from '../../components/Title/style'

import { ScrollView } from 'react-native'
3

export function PerfilEditar() {
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
                    textLabel='Data de nascimento'
                    placeholder='Data...'
                    fieldWidth={80}
                    editable={true}
                    KeyType='numeric'
                    MaxLenght={9}

                />

                <BoxInput
                    textLabel='CPF'
                    placeholder='CPF...'
                    fieldWidth={80}
                    editable={true}
                    KeyType='numeric'
                    MaxLenght={9}

                />

                <BoxInput
                    textLabel='Endereco'
                    placeholder='Endereco...'
                    fieldWidth={80}
                    editable={true}
                    MaxLenght={9}

                />

                <ContainerInputP>

                    <BoxInput
                        textLabel='Cep'
                        placeholder='Cep...'
                        fieldWidth={45}
                        editable={true}
                        MaxLenght={9}

                    />

                    <BoxInput
                        textLabel='Cidade'
                        placeholder='Cidade...'
                        fieldWidth={45}
                        editable={true}
                        MaxLenght={9}

                    />

                </ContainerInputP>


                <ButtonP>
                    <ButtonTitle>Salvar</ButtonTitle>
                </ButtonP>

                <ButtonP>
                    <ButtonTitle>Editar</ButtonTitle>
                </ButtonP>

            </Container>

        </ScrollView>
    )

}