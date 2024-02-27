import { Modal } from "react-native"
import {  BtnTitle } from "../Button/Style"
import { ModalBtn, SecondaryBtn, SecondaryBtnT, ModalContent, SubTitleM, PatientModal, TitleBlackBold } from "./Style"
import { ContainerButton } from "../Container/Style"
import { InputP } from "../Input/Index"
import { BtnTipoConsulta } from "../ButtonCadastro/ButtonCadastro"


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
                    <SubTitleM>Qual o nível da consulta</SubTitleM>
                    <ContainerButton>
                        <BtnTipoConsulta
                            textButton={"Rotina"}
                            clickButton= {statusModal === "rotina"}
                            onPress={() => setStatusModal("rotina")}
                        />
                        <BtnTipoConsulta
                            textButton={"Exame"}
                            clickButton= {statusModal === "exame"}
                            onPress={() => setStatusModal("exame")}
                        />
                        <BtnTipoConsulta
                            textButton={"Urgência"}
                            clickButton= {statusModal === "urgencia"}
                            onPress={() => setStatusModal("urgencia")}
                        />
                    </ContainerButton>

                    <SubTitleM>Qual o nível da consulta</SubTitleM>
                    <InputP
                        placeholder={'Informe a localização'}
                        editable={true}
                        maxLength={200}
                        customWidth={90}
                    />

                     {/* Botão */}
                    <ModalBtn>
                        <BtnTitle>Confirmar</BtnTitle>
                    </ModalBtn>

                    <SecondaryBtn onPress={() => setShowModalConsult(false)}>
                        <SecondaryBtnT>Cancelar</SecondaryBtnT>
                    </SecondaryBtn> 

                </ModalContent>
            </PatientModal>
        </Modal>
    )
}