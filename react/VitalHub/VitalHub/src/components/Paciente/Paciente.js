import { TouchableOpacity } from "react-native";
import { BoxCard, BoxCircle, CancelBox, Circle, ContainerShadowConsultas, DataUser, TextBox, TimeBox } from "../Container/Style"
import { ImageCard } from "../Image/Image";
import { TextBlue, TextGrayRegular, TextGraySemiBold, TextRed, TitleBlack } from "../Title/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonCancel, ButtonCancel2, ButtonText, TextBold } from "./Style";


export const CardPaciente = ({
    name,
    onPressImage,
    age,
    type,
    time,
    situacao,
    onPressCancel,
    onPressAppointment,
    source

}) => {
    return (
        <ContainerShadowConsultas>
            <BoxCard>
                <ButtonCancel2 onPress={onPressImage}>
                <ImageCard
                //require('../../../src/assets/img/ImageCard.png')
                    source={source}
                />
                </ButtonCancel2>
                <DataUser>
                    <TextBox>
                        <TitleBlack>{name}</TitleBlack>

                        <BoxCircle>
                            <TextGrayRegular>{age}</TextGrayRegular>
                            <Circle></Circle>
                            <TextGraySemiBold>{type}</TextGraySemiBold>
                        </BoxCircle>

                    </TextBox>
                    <CancelBox>
                        <TimeBox situacao={situacao}>
                            <MaterialCommunityIcons name="clock" size={14} color={situacao == 'pendente' ? "#49B3BA" : "#4E4B59"} />
                            <TextBold situacao={situacao} >{time}</TextBold>
                        </TimeBox>

                        {
                            situacao == 'cancelado' ? (
                                <></>
                            ) : situacao == 'pendente' ?
                            (
                            <ButtonCancel onPress={onPressCancel} situacao={situacao}>
                            <ButtonText  situacao={situacao}>Cancelar</ButtonText>
                            </ButtonCancel>
                            ): (
                                <TouchableOpacity onPress={onPressAppointment} situacao={situacao}>
                                <ButtonText situacao={situacao}>Ver prontuário</ButtonText>
                                </TouchableOpacity>
                            )
                        }
                    </CancelBox>
                </DataUser>
            </BoxCard>
        </ContainerShadowConsultas>
    )
}