import { BtnTabsStyle, BtnTextStyle } from "./Style"

export const BtnList = ({
    textButton,
    clickButton = false,
    onPress
}) => {
    return (
        <BtnTabsStyle clickButton={clickButton} onPress={onPress}>
            <BtnTextStyle clickButton={clickButton}>
                {textButton}
            </BtnTextStyle>
        </BtnTabsStyle>
    )
}