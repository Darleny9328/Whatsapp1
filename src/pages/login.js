import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import {styles} from '../styles/login.js'

export default function Login(props) {

    const { navigation } = props;

    const goToRegister = () => {
        navigation.navigate("Register");
    }

    return (
        <SafeAreaView style={styles.container}>

             
                     <View>
                    <Text style={styles.title}>Strand</Text>
                </View>
                <View>
                    <Text style={styles.formTitle}>Ayuda a salvar vidas</Text>
                </View>
             
               
            <View style={styles.secondSection}>
                
                <View>
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Correo electrónico</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="white"                
                            placeholder="ejemplo@ejemplo.com"
                            keyboardType='email-address'
                            returnKeyType='next'
                        />
                    </View>

                    <View style={styles.spacing}> 
                        <Text style={styles.label}>Contraseña</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="white"                
                            placeholder="********"
                            secureTextEntry={true} 
                        />
                    </View>
                    
                  

                    <View style={styles.spacing}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Iniciar sesión</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.spacing, styles.row]}>
                    <Text style={styles.label}>¿No tienes una cuenta?</Text>
                    <TouchableOpacity onPress={goToRegister}>
                        <Text style={styles.singup}>Registrate</Text>
                    </TouchableOpacity>
                </View>
               
                   <View style={styles.spacing}>
                        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
                    </View>
            </View>

        </SafeAreaView>
    );
}

