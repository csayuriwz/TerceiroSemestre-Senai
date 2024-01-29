import { StyleSheet, Text, View } from "react-native"

const Person = ({name,age}) =>{
    return(
        <View style={styles.container}> 
            <Text style={styles.text} >Nome: {name}</Text>
            <Text style={styles.text} >Idade: {age}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding:10,
        margin:10,
        borderRadius:5,
        backgroundColor: '#FA9696',
    },
    text: {
        fontFamily: 'PTSerif_400Regular_Italic',
    }

})

export default Person;