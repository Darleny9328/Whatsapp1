import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {styles} from '../styles/register.js'

export default function Register(props) {
  const { navigation } = props;
  const [selectedImage, setSelectedImage] = useState(null);


  const goToLogin = () => {
    navigation.navigate("Login");
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
      
  };


  return (
    <SafeAreaView style={styles.container}>
       
        <View style={styles.firstSection}>
            <View>
                <View>
                    <Text style={styles.title}>Strand</Text>
                </View>
                <View>
                    <Text style={styles.formTitle}>Inscribirse</Text>
                </View>
           
                <View style={styles.spacing}>
                    <Text style={styles.label}>Nombre</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="white"                
                            placeholder="Ingrese su nombre"
                        />
                </View>
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
                        <Text style={styles.label}>Confirmar la contraseña</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="white"                
                            placeholder="********"
                            secureTextEntry={true} 
                        />
                    </View>
                    <View style={styles.spacing}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Siguiente</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.spacing}>
                    <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText} onPress={pickImage}>Selecciona una imagen de tu galería</Text>
                            {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 100, height: 100 }} />} 
                        </TouchableOpacity>
                    </View>

                </View> 

                    <View style={[styles.spacing, styles.row]}>
                        <Text style={styles.label}>¿Ya tienes una cuenta?</Text>
                        <TouchableOpacity onPress={goToLogin}>
                            <Text style={styles.signUp}>Inicia sesión</Text>
                        </TouchableOpacity>
                    </View>
      </View>
    </SafeAreaView>
  );
}



