import { Btn, View } from "react-native";

export const Navegacao = ({navigation}) => {
    return(
        <View>
            <Btn
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Btn
                title="Verifique seu email"
                onPress={() => navigation.navigate('VerifiqueEmail')}
            />
            <Btn
                title="Nova senha"
                onPress={() => navigation.navigate('NovaSenha')}
            />
            <Btn
                title="Perfil Paciente"
                onPress={() => navigation.navigate('Perfil')}
            />
            <Btn
                title="Prontuario Paciente"
                onPress={() => navigation.navigate('Prontuario')}
            />
            <Btn
                title="Consultas Medico"
                onPress={() => navigation.navigate('Home')}
            />
            <Btn
                title="Consultas Paciente"
                onPress={() => navigation.navigate('HomePaciente')}
            />
            <Btn
                title="Selecionar Clínica"
                onPress={() => navigation.navigate('Clinica')}
            />
            <Btn
                title="Selecionar Médico"
                onPress={() => navigation.navigate('Medico')}
            />
            <Btn
                title="Calendário"
                onPress={() => navigation.navigate('Calendario')}
            />
            <Btn
                title="Prescrição"
                onPress={() => navigation.navigate('Prescricao')}
            />
            <Btn
                title="Mapa"
                onPress={() => navigation.navigate('Mapa')}
            />
        </View>
    );
}