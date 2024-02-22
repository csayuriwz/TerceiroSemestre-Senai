import { BoxInput } from '../../components/BoxInput'
import { Button, ButtonP } from '../../components/Button/Style'
import { ButtonTitle } from '../../components/ButtonTitle/Style'
import { Container, ContainerInput } from '../../components/Container/Style'
import { ContainerInputP } from '../../components/ContainerInput/Style'
import { ImageP } from '../../components/ImageP/style'
import { Input } from '../../components/Input'
import { InputD, InputP } from '../../components/Input/style'
import { InputLabel, InputLabelP } from '../../components/InputLabel/InputLabel'
import { LabelText } from '../../components/Label/style'
import { SubTitle } from '../../components/SubTitle/style'
import { Title } from '../../components/Title/style'

import { ScrollView } from 'react-native'

export function InserirProntuario() {
    return (
        <ScrollView>
            <Container>

                <ImageP
                    source={require('../../../assets/Rectangle 425.png')}

                />

                <Title>
                    22 anos  Richard Kosta
                </Title>

                <SubTitle>richard.kosta@gmail.com</SubTitle>


                <InputLabel>

                    <LabelText>Descricao</LabelText>

                    <InputP
                        placeholder="Descricao"
                    />
                </InputLabel>


                <InputLabelP>
                    
                    <LabelText>Diagnóstico</LabelText>

                    <InputD
                        placeholder="Diagnóstico"
                    />
                </InputLabelP>

                <InputLabel>

                    <LabelText>Prescrição medica</LabelText>

                    <InputP
                        placeholder="Prescrição medica"
                    />
                </InputLabel>


                <ButtonP>
                    <ButtonTitle>Salvar</ButtonTitle>
                </ButtonP>


            </Container>

        </ScrollView>
    )

}