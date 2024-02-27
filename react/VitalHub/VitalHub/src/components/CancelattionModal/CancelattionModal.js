import { Modal } from "react-native"
import { TitleBlack } from "../Title/Style"
import { ButtonTitle } from "../Button/Style"
import { ButtonModal, ButtonSecondary, ButtonSecondaryText, ModalContent, ModalText, PatientModal } from "./Style"

export const CancelattionModal = ({
    visible,
    setShowModalCancel,
    ...rest
    // rest todas as outras propriedades do modal de um determinado componente nativo assim como o modal estamos usando todas as suas propriedades
}) => {
    return(
        <Modal 
            {...rest} 
            visible={visible} 
            animationType="fade"
            transparent={true}
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
                    <ButtonModal>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModal>

                    <ButtonSecondary onPress={() => setShowModalCancel(false)}>
                        <ButtonSecondaryText>Cancelar</ButtonSecondaryText>
                    </ButtonSecondary> 

                </ModalContent>
            </PatientModal>
        </Modal>
    )
}