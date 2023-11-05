import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C76A6A',
        alignItems: 'center',
        justifyContent: 'center',
      },
    title:{
      fontSize: 56,
      color: "white",
      fontWeight: "bold",
    },
    formTitle: {
        fontSize: 25,
        color: "white",
        marginBottom: 20,
        fontWeight: "bold"
      },
    label: {
        color: "black",
    },
    textInput: {
        color: "#000",
        padding: 8,
    },
    forgotPassword: {
        color: "black",
        textAlign: "right",
    },
    button: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 30,
        alignItems: "center",
    },
    buttonText: {
        color: "black",
        fontWeight: "bold",
    },
    spacing: {
        marginTop: 25,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    }, 
    singup: {
        color: "white",
        paddingLeft: 5,
        fontWeight: "bold"
    }

})
