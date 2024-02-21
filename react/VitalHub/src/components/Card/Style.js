import styled from "styled-components";
import { Title } from "../Title/style";

export const ContainerCard = styled.View`
    width: 90%;
    margin: 0px auto;
    margin-bottom: 12px;
    padding: 10px;
    border-radius: 5px;
    flex-direction: row;
    background-color: #fff;
    gap: 10px;
    box-shadow: 4px 4px 15px rgba(0,0,0,0.08);
`

export const ProfilePic = styled.Image`
    width: 77px;
    height: 80px;
    border-radius: 5px;
`

export const ContentCard = styled.View`
    width: 70%;
    gap: 11px;
`
export const DataProfileCard = styled.View`
    gap: 6px;
`

export const ProfileName = styled(Title)`
font-size: 16px;
`

export const ProfileData = styled.View`
    flex-direction: row;
    gap: 15px;
`

export const TextAge = styled.Text`
    font-size: 14px;
    font-family: Quicksand_400Regular;
`

export const TextBold = styled.Text`
    font-family: Quicksand_600SemiBold;
    font-size: 14px;
    color: ${(props) => props.situacao == "Pendentes" ? "#49b3ba" : "#8c8a97"};

`

export const ViewRow = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ClockCard = styled.View`
    gap: 6px;
    flex-direction: row;
    border-radius: 5px;
    padding: 4px 23px;
    align-items: center;
    background-color: ${(props) => props.situacao == "Pendentes" ? "#e8fcfd" : "#F1F0F5"};
`

export const BtnCard = styled.TouchableOpacity`

`

export const BtnText = styled.Text`
    font-size: 12px;
    font-family: MontserratAlternates_500Medium;
    color: ${(props) => props.situacao == "Pendentes" ? "#C81D25" : "#344F8F"};

`

