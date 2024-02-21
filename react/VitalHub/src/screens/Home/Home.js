import { useState } from "react"
import { BtnList } from "../../components/BtnList"
import CalendarList from "../../components/Calendario"
import { Container } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { FilterCustom } from "./Style"
import { FlatList, FlatListComponent } from "react-native"
import { ListComponent } from "../../components/List/List"
import { AntDesign } from '@expo/vector-icons';
import { CardA } from "../../components/Card/Card"
import { CancelModal } from "../../components/CancelModal/CancelationModal"

const Consultas = [
    { id: 1, nome: "Carlos", situacao: "Pendentes" },
    { id: 2, nome: "Carlos", situacao: "Realizadas" },
    { id: 3, nome: "Carlos", situacao: "Canceladas" },
    { id: 4, nome: "Carlos", situacao: "Realizadas" },
    { id: 5, nome: "Carlos", situacao: "Canceladas" },
];

export const Home = () => {

    // state para o uso dos cards
    const [statusLista, setStatusLista] = useState("Pendentes")

    // state para o uso dos modias

    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalA, setShowModalA] = useState(false);

    return (

        <Container>
            {/* Header */}
            <Header />

            {/* Calendario */}
            <CalendarList />

            {/* filtros botoes */}
            {/* container */}
            <FilterCustom>
                {/* botao p consultas agendadas */}
                <BtnList
                    textButton={"Agendadas"}
                    clickButton={statusLista === "Pendentes"}
                    onPress={() => setStatusLista("Pendentes")} />

                {/* botao p consultas realizadas */}
                <BtnList
                    textButton={"Realizadas"}
                    clickButton={statusLista === "Realizadas"}
                    onPress={() => setStatusLista("Realizadas")} />

                {/* botao p consultas canceladas */}
                <BtnList
                    textButton={"Canceladas"}
                    clickButton={statusLista === "Canceladas"}
                    onPress={() => setStatusLista("Canceladas")} />
            </FilterCustom>

            {/* Cards */}


            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusLista == item.situacao && (
                        <CardA
                            situacao={item.situacao}
                            onPressCancel={() => setShowModalCancel(true)}
                            // onPressAppointment={() => setShowModalA(true)}
                        />

                    )
                }
                showsVerticalScrollIndicator={false}
            />

            {/* modal de cancelar */}
            <CancelModal
                visible={showModalCancel} 
                setShowModalCancel={setShowModalCancel}
            />


        </Container>

    )
}