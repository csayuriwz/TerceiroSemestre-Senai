import { Input } from "../Input";
import { Label } from "../Label";
import { FieldContent } from "./style";

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    KeyType = 'default',
    MaxLenght,

}) => {
    return (
       <FieldContent fieldWidth={fieldWidth}>
        
        <Label textLabel={textLabel}/>

        <Input
        editable={editable}
        placeholder={placeholder}
        KeyType={KeyType}
        MaxLenght={MaxLenght}
        fieldValue={fieldValue}
        onChangeText={onChangeText}/>

       </FieldContent>
    );
};