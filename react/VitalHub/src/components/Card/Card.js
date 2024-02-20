import { AntDesign } from '@expo/vector-icons';
import { BtnCard, BtnText, ClockCard, ContainerCard, ContentCard, DataProfileCard, ProfileData, ProfileName, ProfilePic, TextAge, TextBold, ViewRow } from './Style';

export const CardA = ({
    situacao = "pendente",
    onPressCancel,
    onPressAppointment
}) => {
    return (
        <ContainerCard>
            {/* imagem do perfil */}
            <ProfilePic />

            <ContentCard>
                <DataProfileCard>
                    <ProfileName>Catarina Sayuri</ProfileName>

                    <ProfileData>

                        <TextAge>16 anos</TextAge>
                        <TextBold>Rotina</TextBold>

                    </ProfileData>

                    <ViewRow>

                        {/* icone e horario */}
                        <ClockCard>
                            <AntDesign name="clockcircle" size={14} color={situacao == "pendente" ? "#49b3ba" : "#8c8a97"} />
                            <TextBold situacao={situacao}>14:00</TextBold>
                        </ClockCard>

                        {/* precisa validar e mostrar o tipo de botao conforme a consulta selecionada */}

                        {
                            situacao === "Canceladas" ? (
                                <>
                                </>
                            ) : situacao == "pendente" ?
                                (
                                    <BtnCard>
                                        <BtnText situacao={situacao}>Cancelar</BtnText>
                                    </BtnCard>
                                ) : (
                                    <BtnCard>
                                        <BtnText situacao={situacao}>Ver prontuário</BtnText>
                                    </BtnCard>
                                )
                        }

                    </ViewRow>

                </DataProfileCard>

            </ContentCard>

        </ContainerCard>
    )
}