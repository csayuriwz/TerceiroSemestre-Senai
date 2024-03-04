import { Modal } from "react-native"
import { BtnCard, BtnCardSub, BtnModalCard, BtnModalCardClinic, BtnSubText, CardPacienteModal, ContainerModalText, ModalAge, ModalCardContainer, ModalCardContainerConsulta, ModalConsultContentText, ModalContentText, ModalEmail, ModalPic, TextModalCalendar } from "./Style"
import { TextBlack, TitleBlack } from "../../Title/Style"
import { BtnTitle } from "../../Button/Style"
import { InputLabelSub } from "../../Label/Style"

export const ModalCard = ({
    visible,
    setShowModalAppointment,
    ...rest
    // rest todas as outras propriedades do modal de um determinado componente nativo assim como o modal estamos usando todas as suas propriedades
}) => {
    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            {/* Container */}
            <CardPacienteModal>
                {/* Content */}
                <ModalCardContainer>

                    <ModalPic
                        source={require('../../../assets/img/ImageModal.png')}
                    />

                    {/* Titulo */}
                    <TitleBlack>Niccole Sarga</TitleBlack>

                    {/* Descrição */}
                    <ModalContentText>
                        <ModalAge>22 anos</ModalAge>
                        <ModalEmail>niccole.sarga@gmail.com</ModalEmail>
                    </ModalContentText>

                    {/* Botão */}
                    <BtnModalCard>
                        <BtnTitle>Inserir Prontuário</BtnTitle>
                    </BtnModalCard>

                    <BtnCardSub onPress={() => setShowModalAppointment(false)}>
                        <BtnSubText>Cancelar</BtnSubText>
                    </BtnCardSub>

                </ModalCardContainer>
            </CardPacienteModal>
        </Modal>
    )
}
export const CardModalPaciente = ({
    visible,
    setShowModalAppointment,
    ...rest
    // rest todas as outras propriedades do modal de um determinado componente nativo assim como o modal estamos usando todas as suas propriedades
}) => {
    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            {/* Container */}
            <CardPacienteModal>
                {/* Content */}
                <ModalCardContainer>

                    <ModalPic
                        source={require('../../../assets/img/ImageModalPaciente.png')}
                    />

                    {/* Titulo */}
                    <TitleBlack>Dr. Claudio</TitleBlack>

                    {/* Descrição */}
                    <ContainerModalText>

                        <ModalAge>Cliníco geral</ModalAge>
                        <ModalEmail>CRM-15286</ModalEmail>

                    </ContainerModalText>


                    {/* Botão */}
                    <BtnModalCard>

                        <BtnTitle>Ver local da consulta</BtnTitle>

                    </BtnModalCard>

                    <BtnCardSub onPress={() => setShowModalAppointment(false)}>

                        <BtnSubText>Cancelar</BtnSubText>

                    </BtnCardSub>

                </ModalCardContainer>
            </CardPacienteModal>
        </Modal>
    )
}
export const AppointmentModalConsulta = ({
    visible,
    setShowModalAppointment,
    ...rest
    // rest todas as outras propriedades do modal de um determinado componente nativo assim como o modal estamos usando todas as suas propriedades
}) => {
    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            {/* Container */}
            <CardPacienteModal>
                {/* Content */}
                <ModalCardContainerConsulta>

                    {/* Titulo */}
                    <TitleBlack>Agendar consulta</TitleBlack>

                    <TextBlack>Consulte os dados selecionados para a sua consulta</TextBlack>

                    {/* Descrição */}
                    <ModalConsultContentText>

                        <InputLabelSub>Data da consulta</InputLabelSub>
                        <TextModalCalendar>1 de Novembro de 2023</TextModalCalendar>

                    </ModalConsultContentText>

                    <ModalConsultContentText>

                        <InputLabelSub>Médico(a) da consulta</InputLabelSub>
                        <TextModalCalendar>Dra Alessandra</TextModalCalendar>
                        <TextModalCalendar>Demartologa, Esteticista</TextModalCalendar>

                    </ModalConsultContentText>

                    <ModalConsultContentText>

                        <InputLabelSub>Local da consulta</InputLabelSub>
                        <TextModalCalendar>São Paulo, SP</TextModalCalendar>

                    </ModalConsultContentText>

                    <ModalConsultContentText>

                        <InputLabelSub>Tipo da consulta</InputLabelSub>
                        <TextModalCalendar>Rotina</TextModalCalendar>

                    </ModalConsultContentText>

                    {/* Botão */}
                    <BtnModalCardClinic>

                        <BtnTitle>Ver local da consulta</BtnTitle>

                    </BtnModalCardClinic>

                    <BtnCard onPress={() => setShowModalAppointment(false)}>
                        <BtnSubText>Cancelar</BtnSubText>
                    </BtnCard>

                </ModalCardContainerConsulta>
            </CardPacienteModal>
        </Modal>
    )
}