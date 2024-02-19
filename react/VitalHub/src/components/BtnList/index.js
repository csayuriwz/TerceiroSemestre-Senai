import { BtnTabsStyle, BtnTextStyle } from "./Style"

export const BtnList = ({
    textButton,
    clickButton = false,
    onpress
}) => {
    return (
        <BtnTabsStyle clickButton={clickButton} onPress={onpress}>
            <BtnTextStyle clickButton={clickButton}>
                {textButton}
            </BtnTextStyle>
        </BtnTabsStyle>
    )
}