import { Button, View } from "react-native"

export const Navegacao = ({ navigation }) => {
    return (
        <View>
            <Button
                title="login"
                onPress={() => navigation.navigate("Login")}
            />

            <Button
                title="Recuperar senha"
                onPress={() => navigation.navigate("Recuperar Senha")}
            />

            <Button
                title="Redefinir senha"
                onPress={() => navigation.navigate("Redefinir Senha")}
            />

            <Button
                title="Cadastro"
                onPress={() => navigation.navigate("Cadastro")}
            />

            <Button
                title="VerificarEmail"
                onPress={() => navigation.navigate("VerificarEmail")}
            />

            <Button
                title="Perfil"
                onPress={() => navigation.navigate("Perfil")}
            />

            <Button
                title="PerfilEditar"
                onPress={() => navigation.navigate("PerfilEditar")}
            />

            <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />

            <Button
                title="Inserir Prontuario"
                onPress={() => navigation.navigate("InserirProntuario")}
            />
        </View>
    )
}