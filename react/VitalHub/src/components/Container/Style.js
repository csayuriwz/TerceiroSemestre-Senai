import styled, { css } from "styled-components";
import { LinearGradient } from "expo-linear-gradient";


export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #49B3BA;
`
export const ContainerPerfil = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FBFBFB;
`
export const ContainerConsulta = styled.View`
    flex: 1;
    align-items: center;
    background-color: #FBFBFB;
`
export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'], // Cores do gradiente
    start: {x: -0.05, y: 1.08},// Ponto inicial do gradiente
    end: {x: 1, y: 0} // Ponto final do gradiente
})`

    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 25px;
    width: 100%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`
export const DataUser = styled.View`
    gap: 10px;
`
export const BoxUser = styled.SafeAreaView`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
export const BoxCard = styled.SafeAreaView`
    flex-direction: row;
    /* justify-content: start; */
    /* margin-left: 40px; */
    align-items: center;
    gap: 15px;
    width: 100%;
`
export const TimeBox = styled.View`
    width: 90px;
    height: 26px;
    gap: 5px;
    border-radius: 5px;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    /* gap: 10px; */
    background-color: ${(props) => props.situacao == 'pendente' ? '#E8FCFD' : '#F1F0F5'};
    justify-content: center;
`


export const ContainerLabel = styled.View`
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const ContainerFoto = styled.View`
    width: 80%;
    height: 111px;
    background-color: #F5F3F3;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
`
export const ContainerShadow = styled.SafeAreaView`
    background-color: #FBFBFB;
    width: 70%;
    height: 100px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    margin-top: 300px;
    align-items: center;
    justify-content: center;
`
export const ContainerShadowConsultas = styled.TouchableOpacity`
    background-color: #FBFBFB;
    width: 90%;
    height: 110px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    margin: 0px auto;
    margin-bottom: 12px;
    padding: 10px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    ${props => props.clickButton ?
        css`
     border: 2px solid #496BBA;
    `
        : css`
   border-color: transparent;
   
    `}
`
export const ContainerInput = styled.SafeAreaView`
    width: 80%;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 25px;
    
`

export const ContainerButton = styled.View`
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
`

export const TextBox = styled.View`
    width: 100%;
    /* align-items: center; */
`
export const BoxCircle = styled.View`
    width: 100%;
    align-items: center;
    gap: 5px;
    flex-direction: row;
    /* align-items: center; */
`
export const Circle = styled.View`
    border-radius: 100px ;
    background-color: #D9D9D9;
    width: 3px;
    height: 3px;
`
export const CancelBox = styled.View`
    	flex-direction: row;
        align-items: center;
        width: 80%;
        padding-right: 10px;
        justify-content: space-between;
`
export const MedicalContent = styled.View`
    position: fixed;
    left: 145px;
    top: -80px;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background-color: #49B3BA;
    border-radius: 7px;
`

export const ContainerClinic = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    margin-top: 30px;
    justify-content: center;
    width: 100%;
`
export const ContainerC = styled(ContainerClinic)`
    background-color: #FBFBFB;
    margin-top: 0px;
`
export const ClinicContent = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    
`
export const InputContent = styled.View`
    width: 80%;
    
`
export const ShadowContent = styled.View`
    flex-direction: row;
    padding-left: 80px;
    padding-right: 80px;
`
export const Separator = styled.View`
    width: 80%;
    height: 2px;
    margin-top: 20px;
    background-color: #8C8A97;
`
