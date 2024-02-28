import { Modal } from "react-native"
import {  ButtonTitle } from "../Button/Style"
import { ButtonModal, ButtonSecondary, ButtonSecondaryText, ModalContent, ModalSubtitle, PatientModal, TitleBlackBold } from "./Style"
import { ContainerButton } from "../Container/Style"
import { InputP } from "../Input/Index"
import { ButtonAgendar } from "../ButtonCadastro/ButtonCadastro"


export const ConsultModal = ({
    visible,
    setShowModalConsult,
    clickButton,
    statusModal,
    setStatusModal,
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
                    <TitleBlackBold>Agendar consulta</TitleBlackBold>

                    {/* Descrição */}
                    <ModalSubtitle>Qual o nível da consulta</ModalSubtitle>
                    <ContainerButton>
                        <ButtonAgendar
                            textButton={"Rotina"}
                            clickButton= {statusModal === "rotina"}
                            onPress={() => setStatusModal("rotina")}
                        />
                        <ButtonAgendar
                            textButton={"Exame"}
                            clickButton= {statusModal === "exame"}
                            onPress={() => setStatusModal("exame")}
                        />
                        <ButtonAgendar
                            textButton={"Urgência"}
                            clickButton= {statusModal === "urgencia"}
                            onPress={() => setStatusModal("urgencia")}
                        />
                    </ContainerButton>

                    <ModalSubtitle>Qual o nível da consulta</ModalSubtitle>
                    <InputP
                        placeholder={'Informe a localização'}
                        editable={true}
                        maxLength={200}
                        customWidth={90}
                    />

                     {/* Botão */}
                    <ButtonModal>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModal>

                    <ButtonSecondary onPress={() => setShowModalConsult(false)}>
                        <ButtonSecondaryText>Cancelar</ButtonSecondaryText>
                    </ButtonSecondary> 

                </ModalContent>
            </PatientModal>
        </Modal>
    )
}