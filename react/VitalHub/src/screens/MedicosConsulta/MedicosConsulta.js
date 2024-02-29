import { useState } from "react";
import  CalendarList from "../../components/Calendar/Index";
import { ContainerButton, ContainerConsulta } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header";
import { ButtonCadastro } from "../../components/ButtonCadastro/ButtonCadastro";
import { CardPaciente } from "../../components/Paciente/Paciente";
import { ListComponent } from "../../components/List/List";
import { Footer } from "../../components/Footer/Footer";
import { CancelattionModal } from "../../components/CancelattionModal/CancelattionModal";
import { AppointmentModal, AppointmentModalPaciente } from "../../components/AppointmentModal/AppointmentModal";
// import { TextGray, UserName } from "../../components/Title/Style"

const Consultas = [
    {id: 1, nome: 'Carlos', situacao: "pendente"},
    {id: 2, nome: 'Carlos', situacao: "realizado"},
    {id: 3, nome: 'Carlos', situacao: "cancelado"},
    {id: 4, nome: 'Carlos', situacao: "realizado"},
    {id: 5, nome: 'Carlos', situacao: "cancelado"},
    {id: 6, nome: 'Carlos', situacao: "pendente"},
]

export const MedicosConsulta = () => {
    //state para o estado da lista cards
    const [statusLista, setStatusLista] = useState("pendente")

    //state par exibição dos modais

    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalAppointment, setShowModalAppointment] = useState(false)

    return(
            <ContainerConsulta>
                    <Header/>

                    <CalendarList/>

            {/* Botões */}

                        <ContainerButton>
                            <ButtonCadastro
                                textButton={"Agendadas"}
                                clickButton= {statusLista === "pendente"}
                                onPress={() => setStatusLista("pendente")}
                            />
                            <ButtonCadastro
                                textButton={"Realizadas"}
                                clickButton= {statusLista === "realizado"}
                                onPress={() => setStatusLista("realizado")}

                            />
                            <ButtonCadastro
                                textButton={"Canceladas"}
                                clickButton= {statusLista === "cancelado"}
                                onPress={() => setStatusLista("cancelado")}

                            />
                        </ContainerButton>

            {/* Lista */}

                        <ListComponent

                            showsVerticalScrollIndicator={false}
                            data={Consultas}
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) =>
                            statusLista == item.situacao && (
                                
                            <CardPaciente
                            
                            source={require('../../../src/assets/img/ImageCard.png')}
                            name={'Catarina'}
                            age={'17 anos'}
                            type={'Rotina'}
                            time={'14:00'}
                            situacao={item.situacao}
                            onPressCancel={() => setShowModalCancel(true)}
                            onPressAppointment={() => setShowModalAppointment(true)}
                            />)}
                        />

            {/* Modal cancelar */}

            <CancelattionModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />

            {/* Modal Prontuário */}

            <AppointmentModal
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />

                <Footer/>
            </ContainerConsulta>
    )
}