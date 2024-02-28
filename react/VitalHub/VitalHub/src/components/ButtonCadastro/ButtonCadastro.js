import { BtnConsultType, BtnTextConsultType, ButtonCadStyle, ButtonTextCad } from "./Style"


export const ButtonCadastro = ({
    textButton,
    clickButton = false,
    onPress
}) => {
    return(
        <ButtonCadStyle clickButton={clickButton} onPress={onPress}>
            <ButtonTextCad clickButton={clickButton}> {textButton} </ButtonTextCad>
        </ButtonCadStyle>
    )
}

export const ButtonAgendar = ({
    textButton,
    clickButton = false,
    onPress
}) => {
    return(
        <BtnConsultType clickButton={clickButton} onPress={onPress}>
            <BtnTextConsultType clickButton={clickButton}> {textButton} </BtnTextConsultType>
        </BtnConsultType>
    )
}