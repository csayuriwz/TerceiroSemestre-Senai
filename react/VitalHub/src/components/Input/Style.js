import styled from "styled-components"

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#ffff'
})`
    width: 90%;
    height: 53px;
    border: 1px solid #ffff;
    border-radius: 5px;
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    margin-top: 15px;
    padding-left: 16px;
    color: white;
`

export const InputSenha = styled(Input)`
    margin-bottom: 12px;
`

export const InputCode = styled.TextInput.attrs({
    placeholderTextColor: '#ffff',
    placeholder: '0'
})`
    width: 20%;
    height: 68px;
    border: 1px solid #ffff;
    border-radius: 5px;
    font-family: 'Quicksand_600SemiBold';
    font-size: 45px;
    margin-top: 12px;
    padding: 16px;
    color: white;
    text-align:center;
`