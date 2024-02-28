
import { BoxCard, ContainerShadowConsultas, DataUser, TextBox} from "../Container/Style"
import { ImageCard } from "../Image/Image";
import {  TextGraySemiBold, TitleBlack } from "../Title/Style"



export const CardMedico = ({
    name,
    type,
    source

}) => {
    return (
        <ContainerShadowConsultas>
            <BoxCard>
                <ImageCard
                //require('../../../src/assets/img/ImageCard.png')
                    source={source}
                />
                <DataUser>
                    <TextBox>
                            <TitleBlack>{name}</TitleBlack>
                            <TextGraySemiBold>{type}</TextGraySemiBold>
                    </TextBox>
                </DataUser>
            </BoxCard>
        </ContainerShadowConsultas>
    )
}