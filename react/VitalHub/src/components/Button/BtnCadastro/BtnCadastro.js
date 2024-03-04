import { BtnCadText, BtnCadastroS, BtnConsultType, BtnTextConsultType} from "./Style"


export const BtnCadastro = ({
    textButton,
    clickButton = false,
    onPress
}) => {
    return(
        <BtnCadastroS clickButton={clickButton} onPress={onPress}>
            <BtnCadText clickButton={clickButton}> {textButton} </BtnCadText>
        </BtnCadastroS>
    )
}

export const BtnAgendar = ({
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