import { BtnConsultType, BtnTextConsultType, ButtonCardStyle, ButtonTextCad } from "./Style"


export const ButtonCadastro = ({
    textButton,
    clickButton = false,
    onPress
}) => {
    return(
        <ButtonCardStyle clickButton={clickButton} onPress={onPress}>
            <ButtonTextCad clickButton={clickButton}> {textButton} </ButtonTextCad>
        </ButtonCardStyle>
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