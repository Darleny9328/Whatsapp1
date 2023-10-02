import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {styles} from '../styles/register.js'

export default function Register(props) {
  const { navigation } = props;


  const goToLogin = () => {
    navigation.navigate("Login");
  }

  const openImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (permissionResult.granted === false) {
      alert('Permiso para acceder a la galería denegado');
      return;
    }
  
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      // La imagen fue seleccionada con éxito
      console.log(result);
      setSelectedImage(result.uri);
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
       
        <View style={styles.firstSection}>
            <View>
                <View>
                    <Text style={styles.title}>Regístrate para una nueva cuenta</Text>
                </View>
                <View>
                    <Text style={styles.formTitle}>Sólo necesitamos algo más de información</Text>
                </View>
           
                <View style={styles.spacing}>
                    <Text style={styles.label}>Nombre</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="pink"                
                            placeholder="Ingrese su nombre"
                        />
                </View>
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
                        <Text style={styles.label}>Confirmar la contraseña</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="pink"                
                            placeholder="********"
                            secureTextEntry={true} 
                        />
                    </View>
                    <View style={styles.spacing}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Siguiente</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        {selectedImage && (
                          <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />)}
                          <TouchableOpacity style={styles.buttonImage}>
                              <Text onPress={openImagePicker}>Selecciona una imagen de tu galería</Text>
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


