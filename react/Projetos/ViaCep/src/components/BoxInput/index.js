import { Input } from "../Input";
import { Label } from "../Label";
import { FieldContent } from "./style";

export const BoxInput = ({
    fieldWidht = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    KeyType = 'default',
    MaxLenght,

}) => {
    return (
       <FieldContent fieldWidht={fieldWidht}>
        
        <Label textLabel={textLabel}/>

        <Input
        editable={editable}
        placeholder={placeholder}
        KeyboardType={KeyType}
        MaxLenght={MaxLenght}
        fieldValue={fieldValue}
        onChangeText={onChangeText}/>

       </FieldContent>
    );
};