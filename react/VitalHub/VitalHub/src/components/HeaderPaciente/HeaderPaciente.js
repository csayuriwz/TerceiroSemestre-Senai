import { BoxUser, ContainerHeader, DataUser } from '../Container/Style'
import { ImageHeader } from '../Image/Image'
import { TextGray, UserName } from '../Title/Style'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const HeaderPaciente = () => {
    return(
        <ContainerHeader>
            <BoxUser>
                <ImageHeader
                    source={require('../../../src/assets/img/ImagePaciente.png')}
                    />
                <DataUser>
                    <TextGray>Bem vindo</TextGray>
                    <UserName>Richard Kosta</UserName>
                </DataUser>
            </BoxUser>
            <MaterialCommunityIcons name="bell" size={25} color='#ffffff' />
        </ContainerHeader>
    )
}