import { StyleSheet, Text, View } from "react-native"

const Person = ({name,age}) =>{
    return(
        <View styles={styles.container}> 
            <Text>Nome: {name}</Text>
            <Text>Idade: {age}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        padding:10,
        margin:10,
        borderRadius:5,
        backgroundColor: '#c1c1c1',
    }
})

export default Person;