import styled from "styled-components";
import {LinearGradient} from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
    flex:1;
    align-items: center;
    background-color: #fafafa;
    /* justify-content: center; */
`

export const ContainerInput = styled.SafeAreaView`
    background-color: #fafafa;
    align-items: center;
`
export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ["#60BFC5", "#446BBA"],
    start: { x: -0.5, y: 1.08 },
    end: { x: 1, y: 0 },

})`
width: 100%;
flex-direction:row;
padding: 20px 20px 22px 20px;
border-radius: 0px 0px 15px 15px;
box-shadow: 0px 4px 15px #00000014;

align-items:center;
justify-content: space-between;
`
