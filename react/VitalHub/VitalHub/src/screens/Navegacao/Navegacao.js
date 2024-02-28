import { Button, View } from "react-native";

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
                title="Consultas"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Consultas Paciente"
                onPress={() => navigation.navigate('HomePaciente')}
            />
            <Button
                title="Clínica"
                onPress={() => navigation.navigate('Clinica')}
            />
            <Button
                title="Médico"
                onPress={() => navigation.navigate('Medico')}
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