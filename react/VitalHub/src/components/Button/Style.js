import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44px;

    background-color: #496bba;
    border: #496bba;
    margin-top: 15px;
    border-radius: 5px;
    padding: 12px 8px 12px 8px;

    align-items: center;
    justify-content: center;

`


export const ButtonGoogle = styled(Button)`
    background-color: #fafafa;
    flex-direction: row;
    gap: 27px;
    margin-bottom: 30px;
`