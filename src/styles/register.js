import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      Color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    firstSection: {
      flex: 1,
      backgroundColor: "#C76A6A",
      width: "100%",
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      padding: 20,
      justifyContent: "space-between",
    },
    title: {
      fontSize: 38,
      color: "white",
      fontWeight: "bold",
      marginTop: 120,   
    },
    formTitle: {
      fontSize: 25,
      color: "white",
      marginBottom: 5,
    },
    label: {
      color: "black",
      
      
    },
    textInput: {
      color: "#000",
      padding: 8,
    },
    button: {
      backgroundColor: "white",
      padding: 15,
      borderRadius: 30,
      alignItems: "center",
    },
    buttonImage: {
      backgroundColor: "#78828c",
      padding: 15,
      borderRadius: 30,
      alignItems: "center",
      marginTop: 20,
    },
    buttonText: {
      color: "black",
      fontWeight: "bold",
    },
    spacing: {
      marginTop: 30,
    },
    row: {
      flexDirection: "row",
      justifyContent: "center",
    },
    signUp: {
      color: "white",
      paddingLeft: 5,
      fontWeight: "bold",
    }
  })