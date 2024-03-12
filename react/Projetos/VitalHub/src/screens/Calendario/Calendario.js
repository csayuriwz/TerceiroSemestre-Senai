import { useState } from "react"
import { ClinicContent, ContainerCalendar, InputContent } from "../../components/Container/Style"
import { TitleBlackDoctor } from "../../components/Cards/CardMedico/Style"
import CalendarComponent from "../../components/Calendar/Calendar"
import { BtnModal, BtnSub, BtnSubText, ModalSubtitle2 } from "../../components/Modals/ModalConsulta/Style"
import InputSelect from "../../components/Input/InputSelect/InputSelect"
import { BtnTitle } from "../../components/Button/Style"
import { AppointmentModalConsulta } from "../../components/Modals/ModalCard/ModalCard"


export const CalendarioPaciente = ({ navigation }) => {
    const [showModalAppointment, setShowModalAppointment] = useState(false)
    return (
        <ContainerCalendar>
            <ClinicContent>
                <TitleBlackDoctor>Selecionar data</TitleBlackDoctor>

                <CalendarComponent

                />
                <InputContent>
                    <ModalSubtitle2>Selecione um horário disponível</ModalSubtitle2>
                    <InputSelect />
                </InputContent>


                {/* Botão */}
                <BtnModal onPress={() => setShowModalAppointment(true)}>
                    <BtnTitle>Continuar</BtnTitle>
                </BtnModal>

                <BtnSub onPress={() => navigation.replace('SelecionarMedico')}>
                    <BtnSubText>Cancelar</BtnSubText>
                </BtnSub>
            </ClinicContent>

            <AppointmentModalConsulta
                navigation={navigation}
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />
        </ContainerCalendar>
    )
}