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

export const BtnGoogle = styled(Btn)`
    flex-direction: row;
    background-color: #ffff;
    margin-top: 24px;
    margin-bottom: 16px;
    border-color: #ffff;
    justify-content: center;
`

export const BtnGoogleTitle = styled(ButtonTitle)`
    color: #496BBA;
    margin-left: 29px;
`