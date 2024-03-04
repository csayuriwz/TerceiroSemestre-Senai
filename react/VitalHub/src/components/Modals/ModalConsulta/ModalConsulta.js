import { Modal } from "react-native"
import { BtnModal, BtnSub, BtnSubText, ModalContent, ModalSubtitle, PatientModal, TitleBold } from "./Style"
import { ContainerBtn } from "../../Container/Style"
import { InputP } from "../../Input/Index"
import { BtnTitle } from "../../Button/Style"


export const ModalConsulta = ({
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
                    <TitleBold>Agendar consulta</TitleBold>

                    {/* Descrição */}
                    <ModalSubtitle>Qual o nível da consulta</ModalSubtitle>
                    <ContainerBtn>
                        <BtnAgendar
                            textButton={"Rotina"}
                            clickButton= {statusModal === "rotina"}
                            onPress={() => setStatusModal("rotina")}
                        />
                        <BtnAgendar
                            textButton={"Exame"}
                            clickButton= {statusModal === "exame"}
                            onPress={() => setStatusModal("exame")}
                        />
                        <BtnAgendar
                            textButton={"Urgência"}
                            clickButton= {statusModal === "urgencia"}
                            onPress={() => setStatusModal("urgencia")}
                        />
                    </ContainerBtn>

                    <ModalSubtitle>Qual o nível da consulta</ModalSubtitle>
                    <InputP
                        placeholder={'Informe a localização'}
                        editable={true}
                        maxLength={200}
                        customWidth={90}
                    />

                  
                    <BtnModal>
                        <BtnTitle>Confirmar</BtnTitle>
                    </BtnModal>

                    <BtnSub onPress={() => setShowModalConsult(false)}>
                        <BtnSubText>Cancelar</BtnSubText>
                    </BtnSub> 

                </ModalContent>
            </PatientModal>
        </Modal>
    )
}