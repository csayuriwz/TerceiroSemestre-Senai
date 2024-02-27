import styled from "styled-components";
import { ContainerShadowConsultas } from "../Container/Style";
import { FlatList } from "react-native";
export const IconContent = styled.View`

    flex-direction: row;
    align-items: center;
    gap: 3px;
`
export const TextGold = styled.Text`

     font-size: 14px;
     font-family: 'Quicksand_600SemiBold';
     color: #F9A620;
`
export const TextBlue = styled(TextGold)`
     color: #49B3BA;
`

export const TextCity = styled.Text`

    font-size: 14px;
    color: #4E4B59;
    margin-bottom: 18px;
    font-family: Quicksand_600SemiBold;
`
export const DayBox = styled.View`
    width: 100px;
    height: 26px;
    gap: 5px;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    background-color: #E8FCFD;
    justify-content: center;
`

export const BoxDay = styled.View`
    flex-direction: row;
    align-items: center;
    width: 80%;
    justify-content: space-between;
`
export const TextBox = styled.View`
    width: 80%;
    flex-direction: row;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
`

export const BoxCard = styled.SafeAreaView`
    gap: 15px;
    align-items: center;
    width: 100%;
`
export const ContainerShadowClinic = styled(ContainerShadowConsultas)`
    border: 2px solid ${(props) => `${props.border}`};
`

export const ClinicaLis = styled(FlatList)`
    width: 100%;
    background-color: #FBFBFB;
    padding-top: 10px;
    margin: 15px;
`