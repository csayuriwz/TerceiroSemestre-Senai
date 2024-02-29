import { useState } from "react"
import { ButtonCadastro } from "../../components/ButtonCadastro/ButtonCadastro"
import  CalendarList from "../../components/Calendar/Index"
import { ContainerButton, ContainerConsulta, MedicalContent } from "../../components/Container/Style"
import { HeaderPaciente } from "../../components/HeaderPaciente/HeaderPaciente"
import { ListComponent } from "../../components/List/List"
import { CardPaciente } from "../../components/Paciente/Paciente"
import { FontAwesome6 } from '@expo/vector-icons';
import { BtnMedical } from "../../components/Button/Style"
import { ConsultModal } from "../../components/ConsultModal/ConsultModal"
import { AppointmentModalPaciente } from "../../components/AppointmentModal/AppointmentModal"

const ConsultasPaciente = [
    {id: 1, nome: 'Richard', situacao: "pendente"},
    {id: 2, nome: 'Richard', situacao: "realizado"},
    {id: 3, nome: 'Richard', situacao: "cancelado"},
]

export const PacienteConsulta = () => {
    const [showModalAppointment, setShowModalAppointment] = useState(false)

    const [showModalConsult, setShowModalConsult] = useState(false)

    const [statusListaPaciente, setStatusListaPaciente] = useState("pendente")

    const [statusModal, setStatusModal] = useState("")

    

    return(
        <ContainerConsulta>
            {/* Header */}
            <HeaderPaciente/>

            {/* Calendário */}
            <CalendarList/>

            {/* Botões */}
            <ContainerButton>
                <ButtonCadastro
                    textButton={"Agendadas"}
                    clickButton= {statusListaPaciente === "pendente"}
                    onPress={() => setStatusListaPaciente("pendente")}
                />
                <ButtonCadastro
                    textButton={"Realizadas"}
                    clickButton= {statusListaPaciente === "realizado"}
                    onPress={() => setStatusListaPaciente("realizado")}

                />
                <ButtonCadastro
                    textButton={"Canceladas"}
                    clickButton= {statusListaPaciente === "cancelado"}
                    onPress={() => setStatusListaPaciente("cancelado")}

                />
            </ContainerButton>

            {/* FlatList */}
            <ListComponent
            //nome da constante com dados
            data={ConsultasPaciente}
            //ldefinindo quem sera a key do seu item na constante
            keyExtractor={(item) => item.id}
            //O que vai ser mostrado
            renderItem={({item}) => 
                statusListaPaciente == item.situacao && (
                    <CardPaciente
                    onPressImage={() => setShowModalAppointment(true)}
                    source={require('../../../src/assets/img/ImageDoctor.png')}
                    name={'Dr. Claudio'}
                    age={'30 anos'}
                    type={'Rotina'}
                    time={'14:00'}
                    situacao={item.situacao}
                    // onPressCancel={() => setShowModalCancel(true)}
                    // onPressAppointment={() => setShowModalAppointment(true)}
                    />
                )}
            />

            <MedicalContent>
                <BtnMedical onPress={() => setShowModalConsult(true)}>
                    <FontAwesome6 name="stethoscope" size={28} color="#FBFBFB" /> 
                </BtnMedical>
            </MedicalContent>

            <ConsultModal
                visible={showModalConsult}
                setShowModalConsult={setShowModalConsult}
                setStatusModal={setStatusModal}
                statusModal={statusModal}
            />
            
            <AppointmentModalPaciente
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />
        </ContainerConsulta>
    )
}