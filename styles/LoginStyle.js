import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        color: 'black'
    },
    input:{
        borderWidth: 1,
        borderColor: '#black',
        borderRadius: 8,
        width: 300,
        padding: 10,
        marginTop: 10,
    },
    button:{
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
    },
})

export default styles;