import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ScrollForm } from "./style";

export function Home() {
    return (
        <>
            <ScrollForm>
                <ContainerForm>
                    <BoxInput
                        textLabel='Informar CEP'
                        placeholder='CEP...'
                        KeyType='numeric'
                        MaxLenght={9}
                    />
                </ContainerForm>
            </ScrollForm>
        </>
    )
}