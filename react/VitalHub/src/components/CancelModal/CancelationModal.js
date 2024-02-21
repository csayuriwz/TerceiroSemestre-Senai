import { Modal } from "react-native"
import { Title } from "../Title/style"
import { BtnText } from "../Card/Style"
import { ModalContent, ModalText, PatientModal } from "./Style"
import { ModalBtn } from "../Button/Style"
import { ButtonTitle } from "../ButtonTitle/Style"
import { ContentActions } from "../ContentAccount/Style"
import { LinkBold } from "../TextAccount/Style"

export const CancelModal = ({
    visible,
    setShowModalCancel,
    // rest sao todas as outras propriedades como o visible e o transparente
    ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            {/* container */}
            <PatientModal>

                <ModalContent>
                    {/* titulo */}
                    <Title>Cancelar Consulta</Title>

                    {/* descricao */}
                    <ModalText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</ModalText>

                    {/* botao da modal */}
                    <ModalBtn>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ModalBtn>

                    <ContentActions onPress={() => setShowModalCancel(false)}>
                        <LinkBold>Cancelar</LinkBold>
                    </ContentActions>
                </ModalContent>

            </PatientModal>

        </Modal>
    )
}