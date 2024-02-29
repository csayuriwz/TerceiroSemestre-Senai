import { Modal } from "react-native"
import { TextBlack, TitleBlack } from "../Title/Style"
import { ButtonTitle } from "../Button/Style"
import { ButtonAppointment, ButtonAppointmentSecondary, ButtonModalAppointment, ButtonModalAppointmentClinic, ImageModal, ModalAge, ModalAppointmentContent, ModalAppointmentContentConsult, ModalConsultContentText, ModalContentText, ModalEmail, PatientModalAppointment, TextModalCalendar } from "./Styled"
import { ButtonSecondaryText } from "../CancelattionModal/Style"
import { InputLabel, InputLabel2 } from "../Label/Style"

export const AppointmentModal = ({
    visible,
    setShowModalAppointment,
    ...rest
    // rest todas as outras propriedades do modal de um determinado componente nativo assim como o modal estamos usando todas as suas propriedades
}) => {
    return(
        <Modal 
            {...rest} 
            visible={visible} 
            transparent={true}
            animationType="fade"
        >
            {/* Container */}
            <PatientModalAppointment>
                {/* Content */}
                <ModalAppointmentContent>

                    <ImageModal
                        source={require('../../../src/assets/img/ImageModal.png')}
                    />

                    {/* Titulo */}
                    <TitleBlack>Niccole Sarga</TitleBlack>

                    {/* Descrição */}
                    <ModalContentText>
                        <ModalAge>22 anos</ModalAge>
                        <ModalEmail>niccole.sarga@gmail.com</ModalEmail>
                    </ModalContentText>

                     {/* Botão */}
                    <ButtonModalAppointment>
                        <ButtonTitle>Inserir Prontuário</ButtonTitle>
                    </ButtonModalAppointment>

                    <ButtonAppointmentSecondary onPress={() => setShowModalAppointment(false)}>
                        <ButtonSecondaryText>Cancelar</ButtonSecondaryText>
                    </ButtonAppointmentSecondary> 

                </ModalAppointmentContent>
            </PatientModalAppointment>
        </Modal>
    )
}
export const AppointmentModalPaciente = ({
    visible,
    setShowModalAppointment,
    ...rest
    // rest todas as outras propriedades do modal de um determinado componente nativo assim como o modal estamos usando todas as suas propriedades
}) => {
    return(
        <Modal 
            {...rest} 
            visible={visible} 
            transparent={true}
            animationType="fade"
        >
            {/* Container */}
            <PatientModalAppointment>
                {/* Content */}
                <ModalAppointmentContent>

                    <ImageModal
                        source={require('../../../src/assets/img/ImageModalPaciente.png')}
                    />

                    {/* Titulo */}
                    <TitleBlack>Dr. Claudio</TitleBlack>

                    {/* Descrição */}
                    <ModalContentText>
                        <ModalAge>Cliníco geral</ModalAge>
                        <ModalEmail>CRM-15286</ModalEmail>
                    </ModalContentText>

                     {/* Botão */}
                    <ButtonModalAppointment>
                        <ButtonTitle>Ver local da consulta</ButtonTitle>
                    </ButtonModalAppointment>

                    <ButtonAppointmentSecondary onPress={() => setShowModalAppointment(false)}>
                        <ButtonSecondaryText>Cancelar</ButtonSecondaryText>
                    </ButtonAppointmentSecondary> 

                </ModalAppointmentContent>
            </PatientModalAppointment>
        </Modal>
    )
}
export const AppointmentModalConsulta = ({
    visible,
    setShowModalAppointment,
    ...rest
    // rest todas as outras propriedades do modal de um determinado componente nativo assim como o modal estamos usando todas as suas propriedades
}) => {
    return(
        <Modal 
            {...rest} 
            visible={visible} 
            transparent={true}
            animationType="fade"
        >
            {/* Container */}
            <PatientModalAppointment>
                {/* Content */}
                <ModalAppointmentContentConsult>

                    {/* Titulo */}
                    <TitleBlack>Agendar consulta</TitleBlack>

                    <TextBlack>Consulte os dados selecionados para a sua consulta</TextBlack>

                    {/* Descrição */}
                    <ModalConsultContentText>
                        <InputLabel2>Data da consulta</InputLabel2>
                        <TextModalCalendar>1 de Novembro de 2023</TextModalCalendar>
                    </ModalConsultContentText>

                    <ModalConsultContentText>
                        <InputLabel2>Médico(a) da consulta</InputLabel2>
                        <TextModalCalendar>Dra Alessandra</TextModalCalendar>
                        <TextModalCalendar>Demartologa, Esteticista</TextModalCalendar>
                    </ModalConsultContentText>

                    <ModalConsultContentText>
                        <InputLabel2>Local da consulta</InputLabel2>
                        <TextModalCalendar>São Paulo, SP</TextModalCalendar>
                    </ModalConsultContentText>

                    <ModalConsultContentText>
                        <InputLabel2>Tipo da consulta</InputLabel2>
                        <TextModalCalendar>Rotina</TextModalCalendar>
                    </ModalConsultContentText>

                     {/* Botão */}
                    <ButtonModalAppointmentClinic>
                        <ButtonTitle>Ver local da consulta</ButtonTitle>
                    </ButtonModalAppointmentClinic>

                    <ButtonAppointment onPress={() => setShowModalAppointment(false)}>
                        <ButtonSecondaryText>Cancelar</ButtonSecondaryText>
                    </ButtonAppointment> 

                </ModalAppointmentContentConsult>
            </PatientModalAppointment>
        </Modal>
    )
}