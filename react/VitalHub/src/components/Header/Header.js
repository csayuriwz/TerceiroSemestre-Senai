import { ContainerHeader } from "../Container/Style"
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./style"
import { MaterialIcons } from '@expo/vector-icons';

export const Header = () => {
    return (

        <ContainerHeader>
            <BoxUser>
                <ImageUser />
                <DataUser>
                    <TextDefault>Bem Vindo</TextDefault>
                    <NameUser>Doutor fulado</NameUser>
                </DataUser>
            </BoxUser>

            <MaterialIcons name="notifications" size={24} color="pink" />

            
        </ContainerHeader>
        

    )
}