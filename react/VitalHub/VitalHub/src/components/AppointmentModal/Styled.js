import styled from "styled-components";
import { Button } from "../Button/Style";

export const PatientModalAppointment = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.60);
`

export const ModalContentText = styled.View`
    flex-direction: row;
    gap: 10px;
    width: 90%;
    justify-content: center;
`
export const ModalConsultContentText = styled(ModalContentText)`
    flex-direction: column;
`

export const ModalAppointmentContent = styled.View`
    padding: 30px 30px 10px;
    width: 90%;
    border-radius: 10px;
    background-color: white;
    align-items: center;
`
export const ModalAppointmentContentConsult = styled.View`
    padding: 30px 30px 10px;
    width: 90%;
    border-radius: 10px;
    background-color: white;
    align-items: center;
    gap: 20px;
`

export const ModalEmail = styled.Text`
    font-size: 14px;
    color: #5f5c6b;
    text-align: center;
    margin-top: 10px;
    font-family: Quicksand_500Medium;
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
    background-color: transparent;
    border: none;
    margin-top: 0px;
`

export const ButtonSecondaryText = styled.Text`
    color: #496BBA;
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    text-decoration: underline;
    text-decoration-color: #496BBA;
    align-self: center;
    /* margin-top: 16px; */
`
export const TextModalCalendar = styled.Text`
    color: #4E4B59;
    font-family: 'QuickSand_500Medium';
    font-size: 14px;
`

export const ImageModal = styled.Image`
    width: 285px;
    height: 181px;
    margin-bottom: 20px;
`

