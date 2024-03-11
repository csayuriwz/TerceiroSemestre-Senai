import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BoxCircle, Circle, ContainerCancel, ContainerCardSub, ContainerLevantadoConsulta, ContainerText, DataUser, TimeBox } from "../../Container/Style";
import { BtnCancel, BtnCancelSub, BtnText, TextBold } from "./Style";
import { CardPic } from "../../Image/Style";
import { TextGrayBold, TextGraySub, TitleBlack } from "../../Title/Style";
import { useState } from "react";



export const CardPaciente = ({
    name,
    navigation,
    onPressImage,
    age,
    type,
    time,
    situacao,
    onPressCancel,
    onPressAppointment,
    source

}) => {

    const [profile, setProfile] = useState("Paciente")

    return (
        <ContainerLevantadoConsulta>
            <ContainerCardSub>
                <BtnCancelSub onPress={onPressImage}>
                    <CardPic
                        source={source}
                    />
                </BtnCancelSub>
                <DataUser>
                    <ContainerText>
                        <TitleBlack>{name}</TitleBlack>

                        <BoxCircle>
                            <TextGraySub>{age}</TextGraySub>
                            <Circle></Circle>
                            <TextGrayBold>{type}</TextGrayBold>
                        </BoxCircle>

                    </ContainerText>
                    <ContainerCancel>
                        <TimeBox situacao={situacao}>
                            <MaterialCommunityIcons name="clock" size={14} color={situacao == 'pendente' ? "#49B3BA" : "#4E4B59"} />
                            <TextBold situacao={situacao} >{time}</TextBold>
                        </TimeBox>

                        {
                            situacao == 'cancelado' ? (
                                <></>
                            ) : situacao == 'pendente' ?
                                (
                                    <BtnCancel onPress={onPressCancel} situacao={situacao}>
                                        <BtnText situacao={situacao}>Cancelar</BtnText>
                                    </BtnCancel>
                                ) : (
                                    <TouchableOpacity onPress={profile !== "Paciente" ? onPressAppointment : () => navigation.replace("Prescricao")}>
                                        <BtnText situacao={situacao}>Ver prontuário</BtnText>
                                    </TouchableOpacity>
                                )
                        }
                    </ContainerCancel>
                </DataUser>
            </ContainerCardSub>
        </ContainerLevantadoConsulta>
    )
}