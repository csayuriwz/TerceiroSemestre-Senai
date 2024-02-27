import { BtnTitle } from "../../components/Button/Style"
import { BtnModal, BtnSegundario, BtnSegundarioText } from "../../components/CancelattionModal/Style"
import { ClinicaLis } from "../../components/CardClinic/Style"
import { CardMedico } from "../../components/CardMedico/CardMedico"
import { TitleBlackDoctor } from "../../components/CardMedico/Style"
import { ClinicContent, ConatinerC } from "../../components/Container/Style"

export const Doctor = [
    {id: 1, 
     nome: Doctor,
     source: require('../../../src/assets/img/DoctorImage.png'),
     name: 'Dra Alessandra',
     type: 'Demartologa, Esteticista', },
     
    {id: 2, 
     nome: Doctor,
     source: require('../../../src/assets/img/DoctorImage2.png'),
     name: 'Dr Kumushiro',
     type: 'Cirurgião, Cardiologista', },

    {id: 3, 
     nome: Doctor,
     source: require('../../../src/assets/img/DoctorImage3.png'),
     name: 'Dr Rodrigo Santos',
     type: 'Clínico, Pediatra', },

]

export const SelecionarMedico = () => {
    return(
        <ConatinerC>
        <ClinicContent>
            <TitleBlackDoctor>Selecionar médico</TitleBlackDoctor>

            <ClinicaLis
            //nome da constante com dados
            data={Doctor}
            //ldefinindo quem sera a key do seu item na constante
            keyExtractor={(item) => item.id}
            //O que vai ser mostrado
            renderItem={({item}) =>
                 (
                    <CardMedico
                        source={item.source}
                        name={item.name}
                        type={item.type}
                    />
                )}
            />
            {/* Botão */}
            <BtnModal>
                <BtnTitle>Continuar</BtnTitle>
            </BtnModal>

            <BtnSegundario>
                <BtnSegundarioText>Cancelar</BtnSegundarioText>
            </BtnSegundario>
        </ClinicContent>
    </ConatinerC>
    )
}