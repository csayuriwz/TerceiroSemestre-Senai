import styled from "styled-components";
import { Button } from "../Button/Style";

export const PatientModalAppointment = styled.View`
    flex: 1;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.60);
    align-items: center;
`

export const ModalContentText = styled.View`
    flex-direction: row;
    gap: 10px;
    
    justify-content: center;
    width: 90%;
`
export const ModalConsultContentText = styled(ModalContentText)`
    flex-direction: column;
`

export const ModalAppointmentContent = styled.View`
    padding: 30px 30px 10px;
    width: 90%;
    
    background-color: white;
    align-items: center;

    border-radius: 10px;
`
export const ModalAppointmentContentConsult = styled.View`
    padding: 30px 30px 10px;
    width: 90%;

    
    background-color: white;
    align-items: center;
    gap: 20px;

    border-radius: 10px;
`

export const ModalEmail = styled.Text`
    font-size: 14px;
    color: #5f5c6b;
    text-align: center;
    font-family: Quicksand_500Medium;

    margin-top: 10px;
`

export const ModalAge = styled(ModalEmail)`
    color: #4E4B59;
`

export const ButtonModalAppointment = styled(Button)`
    width: 80%;
    margin-top: 30px;
`
export const ButtonModalAppointmentClinic = styled(ButtonModalAppointment)`
    width: 90%;
`
export const ButtonAppointmentSecondary = styled(Button)`
    background-color: transparent;
    border: none;

    margin-top: 30px;
`
export const ButtonAppointment = styled(ButtonAppointmentSecondary)`
    margin-top: 0px;
   
    background-color: transparent;
    border: none;
    
`

export const ButtonSecondaryText = styled.Text`
    color: #496BBA;
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    text-decoration: underline;
    text-decoration-color: #496BBA;

    align-self: center;
   
`
export const TextModalCalendar = styled.Text`
    color: #4E4B59;
    font-size: 14px;
    font-family: 'QuickSand_500Medium';
`

export const ImageModal = styled.Image`
    margin-bottom: 20px;
    width: 285px;
    height: 181px;
    
`

