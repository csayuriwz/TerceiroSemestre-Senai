import styled, { css } from "styled-components"

export const BtnTabsStyle = styled.TouchableHighlight`
    padding: 12px 14px;
    border-radius: 5px;

    ${props => props.clickButton ?
        css`
    background-color: #496bba`
        : css`
    background-color: transparent;
    border: 2px solid #607ec5`}
`

export const BtnTextStyle = styled.Text`
    font-size: 12px;
    font-family: MontserratAlternates_600SemiBold;
    
    ${props => props.clickButton ?
        css`
    color: #fbfbfb;`
        : css`
   color: #607ec5`}
    
`
