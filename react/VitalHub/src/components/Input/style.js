import styled, { css } from "styled-components"

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#34898f"
})`
    height: 53px;
    width: 90%;
    border: 2px solid #49b3ba;
    padding: 16px;
    border-radius: 5px;
    margin-top:15px;
    font-size: 16px;
    color: #34898f;

`
export const InputNumber = styled.TextInput.attrs({
    keyboardType: 'numeric',
})
`
    width: 15%;
    padding:0px;
    padding-bottom: 2px;
    border: 2px solid #34898F;
    border-radius:5px;

    line-height:52px;
    font-size: 40px;
    flex-direction: 'row';
    text-align:center;
    font-family: 'Quicksand_500Medium';
`

export const InputText = styled.TextInput`
    height: 53px;
    border: 1px solid #F5F3F3;
    padding: 16px;
    border-radius: 5px;
    margin-top:15px;
    font-size: 16px;
    color: #33303E;

    ${props => props.editable && css`
        background-color: #F5F3F3;
    `
    }
`



