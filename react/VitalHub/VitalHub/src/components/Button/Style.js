import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44px;

    background-color: #496BBA;
    border: solid 1px #496BBA;
    border-radius: 5px;

    align-items: center;
    justify-content: center;
    margin-top: 15px;
`

export const ButtonPerfil = styled(Button)`
    width: 80%;
    margin-bottom: 10px;
`
export const ButtonGray = styled(Button)`
    width: 50%;
    
    border: solid 1px #ACABB7;
    background-color: #ACABB7;
`
export const ButtonGrayP = styled(Button)`
    width: 80%;

    background-color: #ACABB7;
    border: solid 1px #ACABB7;
`

export const ButtonTitle = styled.Text`
    color: #FAFAFA;
    font-family: 'MontserratAlternates_700Bold';
    font-size: 14px;
`

export const ButtonCadastro = styled(Button)`
    margin-top: 24px;
`

export const ButtonGoogle = styled(Button)`
    flex-direction: row;
    background-color: #ffff;
    margin-top: 24px;
    margin-bottom: 16px;
    border-color: #ffff;
    justify-content: center;
`

export const BtnMedical = styled.TouchableOpacity`
    
`
export const ButtonCamera = styled.TouchableOpacity`
    height: 44px;
    background-color: #49B3BA;
    align-items: center;
    border-radius: 5px;
    width: 50%;
    margin-top: 10px;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
`

export const ButtonGoogleTitle = styled(ButtonTitle)`
    color: #496BBA;
    margin-left: 29px;
`;

export const TextButtonCamera = styled(ButtonTitle)`
    color: #FFFFFF;
`



