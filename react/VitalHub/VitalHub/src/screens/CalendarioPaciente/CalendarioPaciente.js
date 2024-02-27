import { useState } from "react"
import { AppointmentModalConsulta } from "../../components/AppointmentModal/AppointmentModal"
import { ButtonTitle } from "../../components/Button/Style"
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent"
import { ButtonModal, ButtonSecondary, ButtonSecondaryText } from "../../components/CancelattionModal/Style"
import { TitleBlackDoctor } from "../../components/CardMedico/Style"
import { ModalSubtitle2 } from "../../components/ConsultModal/Style"
import { ClinicContent, ConatinerC, InputContent } from "../../components/Container/Style"
import InputSelect from "../../components/InputSelect/InputSelect"

export const CalendarioPaciente = () => {
    const [showModalAppointment, setShowModalAppointment] = useState(false)
    return (
        <ConatinerC>
            <ClinicContent>
                <TitleBlackDoctor>Selecionar data</TitleBlackDoctor>

                <CalendarComponent />
                <InputContent>
                    <ModalSubtitle2>Selecione um horário disponível</ModalSubtitle2>
                    <InputSelect />
                </InputContent>


                {/* Botão */}
                <ButtonModal onPress={() => setShowModalAppointment(true)}>
                    <ButtonTitle>Continuar</ButtonTitle>
                </ButtonModal>

                <ButtonSecondary>
                    <ButtonSecondaryText>Cancelar</ButtonSecondaryText>
                </ButtonSecondary>
            </ClinicContent>

            <AppointmentModalConsulta
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />
        </ConatinerC>
    )
}