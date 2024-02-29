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
export const InputSenha = styled(Input)`
    margin-bottom: 12px;
`

export const InputPerfil = styled.TextInput.attrs({
    placeholderTextColor: '#33303E',

})`
    font-family: 'MontserratAlternates_500Medium';
    width: ${(props) => `${props.customWidth}%`};
    height: ${(props) => `${props.customHeight}px`};
    /* border: 1px solid #ffff ; */
    border-radius: 5px;
    padding-left: 16px;
    background-color:#F5F3F3;
    margin-bottom: 24px;
    padding-top: ${(props) => `${props.customP}px`}; 
    
    

`
export const InputProntuario = styled.TextInput.attrs({
    placeholderTextColor: '#34898F'
})`
    width: ${(props) => `${props.customWidth}%`};
    height: ${(props) => `${props.customHeight}px`};
    border: 2px solid #49B3BA;
    border-radius: 5px;
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    margin-bottom: 15px;
    padding-left: 16px;
    color: #4E4B59;
    padding-bottom: ${(props) => `${props.customP}`}; 
`


