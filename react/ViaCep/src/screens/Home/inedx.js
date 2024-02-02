import { useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ContainerInput, ScrollForm } from "./style";

export function Home() {

    //states - variaveis
    const [cep, setCep] = useState('07181230');
    const [logadouro,setLogadouro]  = useState();
    const [Bairro,setBairro]  = useState();
    const [cidade,setCidade]  = useState();
    const [estado,setEstado]  = useState();
    const [uf,setUf]  = useState();

    return (
        <>
            <ScrollForm>
                <ContainerForm>
                    <BoxInput
                        textLabel='Informar CEP'
                        placeholder='CEP...'
                        KeyType='numeric'
                        MaxLenght={9}
                        editable={true}
                        onChangeText={tx => setCep(tx)}
                        fieldValue={cep}
                    />

                    <BoxInput
                        textLabel='Logradouro:'
                        placeholder='Logradouro...'
                        MaxLenght={20}
                        onChangeText={tx => setLogadouro(tx)}
                        fieldValue={logadouro}
                    />

                    <BoxInput
                        textLabel='Bairro'
                        placeholder='Bairro...'
                        MaxLenght={20}
                        onChangeText={tx => setBairro(tx)}
                        fieldValue={Bairro}
                    />

                    <BoxInput
                        textLabel='Cidade'
                        placeholder='Cidade...'
                        MaxLenght={20}
                        onChangeText={tx => setCidade(tx)}
                        fieldValue={cidade}
                    />
                    <ContainerInput>
                        <BoxInput
                            textLabel='Estado'
                            placeholder='Estado...'
                            MaxLenght={20}
                            fieldValue={estado}
                            onChangeText={tx => setEstado(tx)}
                        />

                        <BoxInput
                            textLabel='UF'
                            placeholder='UF...'
                            MaxLenght={4}
                            onChangeText={tx => setUf(tx)}
                            fieldValue={uf}
                        />
                    </ContainerInput>

                </ContainerForm>
            </ScrollForm>
        </>
    )
}