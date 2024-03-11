import { Modal } from "react-native"
import { ModalContent, ModalText, PatientModal, BtnSub, BtnSubText } from "./Style"
import { BtnModal, BtnTitle } from "../../Button/Style"
import { TitleBlack } from "../../Title/Style"

export const ModalCancel = ({
    visible,
    setShowModalCancel,
    ...rest
    // rest todas as outras propriedades do modal de um determinado componente nativo assim como o modal estamos usando todas as suas propriedades
}) => {
    return(
        <Modal 
            {...rest} 
            visible={visible} 
            transparent={true}
            animationType="fade"
        >
            {/* Container */}
            <PatientModal>
                {/* Content */}
                <ModalContent>
                    {/* Titulo */}
                    <TitleBlack>Cancelar consulta</TitleBlack>

                    {/* Descrição */}
                    <ModalText>
                        Ao cancelar essa consulta, 
                        abrirá uma possível disponibilidade no seu horário, 
                        deseja mesmo cancelar essa consulta?
                    </ModalText>

                     {/* Botão */}
                    <BtnModal>
                        <BtnTitle>Confirmar</BtnTitle>
                    </BtnModal>

                    <BtnSub onPress={() => setShowModalCancel(false)}>
                        <BtnSubText>Cancelar</BtnSubText>
                    </BtnSub> 

                </ModalContent>
            </PatientModal>
        </Modal>
    )
}