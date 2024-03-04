import { useState } from "react";
import { CalendarList } from "react-native-calendars";
import { ContainerBtnSub } from "../../components/Container/Style";
import { BtnCadastro } from "../../components/Button/Style";
import { CardPaciente } from "../../components/Cards/CardPaciente/CardPaciente";
import { ModalCancel } from "../../components/Modals/ModalCancel/ModalCancel";
import { ModalCard } from "../../components/Modals/ModalCard/ModalCard";
import { Footer } from "../../components/Footer/Footer";

const Consultas = [
    { id: 1, nome: 'Carlos', situacao: "pendente" },
    { id: 2, nome: 'Carlos', situacao: "realizado" },
    { id: 3, nome: 'Carlos', situacao: "cancelado" },
    { id: 4, nome: 'Carlos', situacao: "realizado" },
    { id: 5, nome: 'Carlos', situacao: "cancelado" },
    { id: 6, nome: 'Carlos', situacao: "pendente" },
]

export const ConsultasMedico = () => {
    //state para o estado da lista cards
    const [statusLista, setStatusLista] = useState("pendente")

    //state par exibição dos modais

    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalAppointment, setShowModalAppointment] = useState(false)

    return (
        <ContainerConsultas>
            <Header />

            <CalendarList />

            {/* Botões */}

            <ContainerBtnSub>
                <BtnCadastro
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />
                <BtnCadastro
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")}

                />
                <BtnCadastro
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")}

                />
            </ContainerBtnSub>

            {/* Lista */}

            <ListComponent

                showsVerticalScrollIndicator={false}
                data={Consultas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
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

            <ModalCancel
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />

            {/* Modal Prontuário */}

            <ModalCard
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />

            <Footer />
        </ContainerConsultas>
    )
}