import { CalendarList } from 'react-native-calendars'
import { ContainerBtn, ContainerConsulta, ContainerMedico } from '../../components/Container/Style'
import { HeaderPaciente } from '../../components/Header/HeaderPaciente/HeaderPaciente'
import { BtnCadastro } from '../../components/Button/BtnCadastro/BtnCadastro'
import { ListComponent } from '../../components/Lista/Lista'
import { CardPaciente } from '../../components/Cards/CardPaciente/CardPaciente'
import { ModalConsulta } from '../../components/Modals/ModalConsulta/ModalConsulta'
import { CardModalPaciente } from '../../components/Modals/ModalCard/ModalCard'


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
            <CalendarList/>

            {/* Botões */}
            <ContainerBtn>
                <BtnCadastro
                    textButton={"Agendadas"}
                    clickButton= {statusListaPaciente === "pendente"}
                    onPress={() => setStatusListaPaciente("pendente")}
                />
                <BtnCadastro
                    textButton={"Realizadas"}
                    clickButton= {statusListaPaciente === "realizado"}
                    onPress={() => setStatusListaPaciente("realizado")}

                />
                <BtnCadastro
                    textButton={"Canceladas"}
                    clickButton= {statusListaPaciente === "cancelado"}
                    onPress={() => setStatusListaPaciente("cancelado")}

                />
            </ContainerBtn>

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
                    />
                )}
            />

            <ContainerMedico>
                <BtnMedico onPress={() => setShowModalConsult(true)}>
                    <FontAwesome6 name="stethoscope" size={28} color="#FBFBFB" /> 
                </BtnMedico>
            </ContainerMedico>

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