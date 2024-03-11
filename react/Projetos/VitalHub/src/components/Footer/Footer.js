import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { BoxButton, BtnFooter, ContainerFooter, TextBtnFooter } from './Style';
import { useState } from 'react';
export const Footer = ({
    clickButton = null,

}) => {
    const [statusFooter, setStatusFooter] = useState("agenda")

    return(
        <ContainerFooter>
            <BoxButton>

                <BtnFooter clickButton={statusFooter === "agenda"} onPress={() => setStatusFooter("agenda")}>
                    <FontAwesome6 name="calendar-check" size={18} color={statusFooter === "agenda" ? color='#607EC5'  : color='#4E4B59'}/>
                    <TextBtnFooter clickButton={statusFooter === "agenda"} >Agenda</TextBtnFooter>
                </BtnFooter>

            </BoxButton>

            <BoxButton>

                <BtnFooter clickButton={statusFooter === "clinica"} onPress={() => setStatusFooter("clinica")}> 	
                    <FontAwesome6 name="hospital" size={18} color={statusFooter === "clinica" ? color='#607EC5'  : color='#4E4B59' } />                    
                    <TextBtnFooter clickButton={statusFooter === "clinica"} >Clínica</TextBtnFooter>
                </BtnFooter>

                </BoxButton>

            <BoxButton>

                <BtnFooter clickButton={statusFooter === "perfil"} onPress={() => setStatusFooter("perfil")}>
                    <FontAwesome5 name="user-circle" size={18} color={statusFooter === "perfil" ? color='#607EC5'  : color='#4E4B59'}/>
                    <TextBtnFooter clickButton={statusFooter === "perfil"} >Perfil</TextBtnFooter>
                </BtnFooter>
            </BoxButton>

        </ContainerFooter>
    )
}