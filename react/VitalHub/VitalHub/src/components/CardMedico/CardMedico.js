import { BoxCard, ContainerConsultasShadow, DataUser, TextBox} from "../Container/Style"
import { CardImage } from "../Image/Image";
import {  TextGraySemiBold, TitleBlack } from "../Title/Style"

export const CardDoctor = ({
    name,
    type,
    source

}) => {
    return (
        <ContainerConsultasShadow>
            <BoxCard>
                <CardImage
                    source={source}
                />
                <DataUser>
                    <TextBox>
                            <TitleBlack>{name}</TitleBlack>
                            <TextGraySemiBold>{type}</TextGraySemiBold>
                    </TextBox>
                </DataUser>
            </BoxCard>
        </ContainerConsultasShadow>
    )
}