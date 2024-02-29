import { useState } from "react"
import { ButtonTitle } from "../../components/Button/Style"
import { ButtonModal, ButtonSecondary, ButtonSecondaryText } from "../../components/CancelattionModal/Style"
import { ListClinic } from "../../components/CardClinic/Style"
import { CardMedico } from "../../components/CardMedico/CardMedico"
import { TitleBlackDoctor } from "../../components/CardMedico/Style"
import { ClinicContent, ContainerC } from "../../components/Container/Style"

export const SelecionarMedico = () => {

    const Doctor = [
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

    const [borderColor, setBorderColor] = useState(null)

    return(
        <ContainerC>
        <ClinicContent>
            {/* titulo */}
            <TitleBlackDoctor>Selecionar médico</TitleBlackDoctor>

            {/* lidta as especialidades dos medicos */}
            <ListClinic
            data={Doctor}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>
                 (

                    // card do medico
                    <CardMedico
                        clickButton={item.id == borderColor }
                        onPress={() => setBorderColor(item.id)}
                        source={item.source}
                        name={item.name}
                        type={item.type}
                    />
                )}
            />
            {/* Botão */}
            <ButtonModal>
                {/* titulo do botao */}
                <ButtonTitle>Continuar</ButtonTitle>
            </ButtonModal>

            <ButtonSecondary>
                <ButtonSecondaryText>Cancelar</ButtonSecondaryText>
            </ButtonSecondary>
        </ClinicContent>
    </ContainerC>
    )
}