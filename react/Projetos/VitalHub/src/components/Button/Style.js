import styled from "styled-components";

export const Btn = styled.TouchableOpacity`
    width: 90%;
    height: 44px;
    background-color: #496BBA;
    border: solid 1px #496BBA;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`

export const BtnCadastro = styled(Btn)`
    margin-top: 24px;
`

export const BtnTitle = styled.Text`
    color: #FAFAFA;
    font-family: 'MontserratAlternates_700Bold';
    font-size: 14px;
`
export const BtnMedical = styled.TouchableOpacity`
    
`

export const BtnGoogle = styled(Btn)`
    flex-direction: row;
    background-color: #ffff;
    margin-top: 24px;
    margin-bottom: 16px;
    border-color: #496BBA;
    justify-content: center;
`
export const BtnModal = styled(Btn)`
    width: 80%;
    margin-top: 30px;
`

export const BtnGoogleTitle = styled(BtnTitle)`
    color: #496BBA;
    margin-left: 29px;
`

export const BtnPerfil = styled(Btn)`
    width: 80%;
    margin-bottom: 10px;
`

export const BtnCinza = styled(Btn)`
    width: 50%;
    background-color: #ACABB7;
    border: solid 1px #ACABB7;
`
export const BtnCinzaSub = styled(Btn)`
    width: 80%;
    background-color: #ACABB7;
    border: solid 1px #ACABB7;
`

export const BtnCamera = styled.TouchableOpacity`
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

export const BtnCameraText = styled(BtnTitle)`
    color: #FFFFFF;
`

export const BtnStethoscope = styled.TouchableOpacity`

background-color: #49B3BA;
width: 60px;
height: 60px;
background-color: #49B3BA;
border-radius: 10px;
align-items: center;
justify-content: center;


`