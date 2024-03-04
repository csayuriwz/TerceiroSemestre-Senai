import { Button, View } from "react-native";
import { Btn } from "../../components/Button/Style";

export const Navegacao = ({navigation}) => {
    return(
        <View>
            <Button
                title="login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Verifique seu email"
                onPress={() => navigation.navigate('VerifiqueEmail')}
            />
            <Button
                title="Nova senha"
                onPress={() => navigation.navigate('NovaSenha')}
            />
            <Button
                title="Perfil"
                onPress={() => navigation.navigate('Perfil')}
            />
            <Button
                title="Prontuario"
                onPress={() => navigation.navigate('Prontuario')}
            />
            <Button
                title="Consultas Medico"
                onPress={() => navigation.navigate('ConsultasMedico')}
            />
            <Button
                title="Consultas Paciente"
                onPress={() => navigation.navigate('ConsultasPaciente')}
            />
            <Button
                title="Clínica"
                onPress={() => navigation.navigate('Clinica')}
            />
            <Button
                title="Médico"
                onPress={() => navigation.navigate('SelecionarMedico')}
            />
            <Button
                title="Calendário"
                onPress={() => navigation.navigate('Calendario')}
            />
            <Button
                title="Mapa"
                onPress={() => navigation.navigate('Mapa')}
            />
            <Button
                title="Prescrição"
                onPress={() => navigation.navigate('Prescricao')}
            />
        </View>
    );
}