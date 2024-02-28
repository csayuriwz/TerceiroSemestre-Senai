import { Input, InputD, InputP } from "../Input/Index"
import { Label } from "../Label/Index"
import { FieldContent, FieldContent2 } from "./Style"

export const BoxInput = ({
    fieldWidth = 100,
    customHeight = 53,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText,
    keyboardType = 'default',
    maxLength,
    customP,
    multiline,
    numberOfLines


}) => {
    return(
        // "conteúdo do campo" tipo a div sabe?
        <FieldContent fieldWidth={fieldWidth}>
            {/* label e input */}

            <Label 
                textLabel={textLabel}
            /> 

            <Input
            numberOfLines={numberOfLines}
            multiline={multiline}
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyboardType}
            maxLength={maxLength}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            customHeight={customHeight}
            customP={customP}
            />

        </FieldContent>
        
    )
}

export const BoxInput2 = ({
    fieldWidth = 100,
    customHeight = 53,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText,
    keyboardType = 'default',
    maxLength,
    customP

}) => {
    return(
        // "conteúdo do campo" tipo a div sabe?
        <FieldContent 
            fieldWidth={fieldWidth}
            >
            {/* label e input */}

            <Label 
                textLabel={textLabel}
                /> 

            <InputP
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyboardType}
            maxLength={maxLength}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            customHeight={customHeight}
            customP={customP}
            />

        </FieldContent>
        
    )
}

