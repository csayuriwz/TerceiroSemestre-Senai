import { Input, InputD, InputP } from "../Input/Index"
import { Label } from "../Label/Index"
import { FieldContent, FieldContent2 } from "./Style"

export const BoxInput = ({
    fieldWidth = 100,
    customHeight = 53,
    editable = false,
    maxLength,
    fieldValue = null,
    onChangeText,
    keyboardType = 'default',
    customP,
    multiline,
    numberOfLines,
    textLabel,
    placeholder,


}) => {
    return (

        <FieldContent fieldWidth={fieldWidth}>

            <Label
                textLabel={textLabel}
            />

            <Input
                multiline={multiline}
                placeholder={placeholder}
                keyboardType={keyboardType}
                maxLength={maxLength}
                editable={editable}
                customHeight={customHeight}
                fieldValue={fieldValue}
                numberOfLines={numberOfLines}
                customP={customP}
                onChangeText={onChangeText}
            />

        </FieldContent>

    )
}

export const BoxInput2 = ({
    placeholder,
    keyboardType = 'default',
    maxLength,
    customHeight = 53,
    fieldWidth = 100,
    fieldValue = null,
    editable = false,
    textLabel,
    onChangeText,
    customP

}) => {
    return (
       
        <FieldContent
            fieldWidth={fieldWidth}
        >

            <Label
                textLabel={textLabel}
            />

            <InputP
                editable={editable}
                keyboardType={keyboardType}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                customP={customP}
                placeholder={placeholder}
                maxLength={maxLength}
                customHeight={customHeight}
            />

        </FieldContent>

    )
}

