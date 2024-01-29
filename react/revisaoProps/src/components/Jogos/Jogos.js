import { StyleSheet, Text, View } from "react-native"

const Jogos = ({name, genero, dLancamento}) =>{
    return(
        <View style={styles.container}> 
            <Text style={styles.text} >Nome: {name}</Text>
            <Text style={styles.text} >Genero: {genero}</Text>
            <Text style={styles.text} >Data de Lancamento: {dLancamento}</Text>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding:10,
        margin:10,
        borderRadius:5,
        backgroundColor: 'pink',
    },
    text: {
        fontFamily: 'PTSerif_400Regular_Italic',
    }

})

export default Jogos;