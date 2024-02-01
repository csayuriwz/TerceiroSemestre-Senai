import { InputText } from "./style"

export const Input = ({
    editable = false,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    KeyType = 'default',
    maxLenght,

}) => {
    return(
      <InputText>
            placeholder={placeholder}
            editable={editable}
            keyboardType={KeyType}
            MaxLenght={maxLenght}
            value={fieldValue}
            onChangeText={onChangeText}
      </InputText>
    )
}