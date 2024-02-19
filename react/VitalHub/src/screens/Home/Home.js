import { useState } from "react"
import { BtnList } from "../../components/BtnList"
import CalendarList from "../../components/Calendario"
import { Container } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { FilterCustom } from "./Style"
import { ScrollView } from "react-native"

export const Home = () => {
    const [statusLista, setStatusLista] = useState("pendente")
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
                <BtnList textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")} />

                {/* botao p consultas realizadas */}
                <BtnList textButton={"Realizadas"}
                    clickButton={statusLista === "Realizadas"}
                    onPress={() => setStatusLista("Realizadas")} />

                {/* botao p consultas canceladas */}
                <BtnList textButton={"Canceladas"}
                    clickButton={statusLista === "Canceladas"}
                    onPress={() => setStatusLista("Canceladas")} />
            </FilterCustom>

            <ContainerConsulta>

            </ContainerConsulta>


        </Container>

    )
}