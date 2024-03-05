import { HeaderPaciente } from '../../components/Header/HeaderPaciente/HeaderPaciente'
import { ListComponent } from '../../components/Lista/Lista'
import { CardPaciente } from '../../components/Cards/CardPaciente/CardPaciente'
import { ModalConsulta } from '../../components/Modals/ModalConsulta/ModalConsulta'
import { CardModalPaciente } from '../../components/Modals/ModalCard/ModalCard'
import { useState } from 'react'
import { BtnCadastro, BtnMedical } from '../../components/Button/Style'
import { FontAwesome6 } from '@expo/vector-icons';
import CalendarList from "../../components/Calendario/Index";
import { ContainerBtn, ContainerConsulta } from '../../components/Container/Style'
import { BtnCadastroM } from '../../components/Button/BtnCadastro/BtnCadastro'

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
            <HeaderPaciente />

            {/* Calendário */}
            <CalendarList />

            {/* Botões */}
            <ContainerBtn>
                <BtnCadastroM
                    textButton={"Agendadas"}
                    clickButton= {statusListaPaciente === "pendente"}
                    onPress={() => setStatusListaPaciente("pendente")}
                />
                <BtnCadastroM
                    textButton={"Realizadas"}
                    clickButton= {statusListaPaciente === "realizado"}
                    onPress={() => setStatusListaPaciente("realizado")}

                />
                <BtnCadastroM
                    textButton={"Canceladas"}
                    clickButton= {statusListaPaciente === "cancelado"}
                    onPress={() => setStatusListaPaciente("cancelado")}

                />
            </ContainerBtn>

            {/* FlatList */}
            <ListComponent
            data={ConsultasPaciente}
            keyExtractor={(item) => item.id}
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
                    />
                )}
            />

            <ModalConsulta
                visible={showModalConsult}
                setShowModalConsult={setShowModalConsult}
                setStatusModal={setStatusModal}
                statusModal={statusModal}
            />
            
            <CardModalPaciente
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />
        </ContainerConsulta>
    )
}