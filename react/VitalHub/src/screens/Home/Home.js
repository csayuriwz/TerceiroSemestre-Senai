import CalendarList from "../../components/Calendario"
import { Container } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"

export const Home =()=>{
    return (

        <Container>
            {/* Header */}
            <Header/>

            <CalendarList/>
               
          
        </Container>
       
    )
}