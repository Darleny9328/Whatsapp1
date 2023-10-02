import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import {styles} from '../styles/login.js'

export default function Login(props) {

    const { navigation } = props;

    const goToRegister = () => {
        navigation.navigate("Register");
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.firstSection}>
                    <Image
                        source={{
                            uri: 'https://ca-times.brightspotcdn.com/dims4/default/5903084/2147483647/strip/false/crop/3315x2296+0+0/resize/1486x1029!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9c%2F7e%2F04f056354c19888ba613f1f10cfe%2Fcf23698f3598465181748b7e77ff9038',
                        }}
                        style={{ width: "100%", height: "120%", resizeMode: "cover" }}
                    />
                    <View style={{ position: "absolute" }}>
                        <Text style={styles.title}>Trevelo</Text>
                    </View>
            </View>
               
            <View style={styles.secondSection}>
                
                <View>
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Correo electrónico</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="pink"                
                            placeholder="ejemplo@ejemplo.com"
                            keyboardType='email-address'
                            returnKeyType='next'
                        />
                    </View>

                    <View style={styles.spacing}> 
                        <Text style={styles.label}>Contraseña</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="pink"                
                            placeholder="********"
                            secureTextEntry={true} 
                        />
                    </View>
                    
                    <View style={styles.spacing}>
                        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
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
                        <Text style={styles.singup}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
               
            </View>

        </SafeAreaView>
    );
}

