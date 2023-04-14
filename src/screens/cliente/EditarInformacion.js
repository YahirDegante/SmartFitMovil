import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function InformarionScreen() {
  const [nombre, setNombre] = useState('Yahir');
  const [apellidos, setApellidos] = useState('Degante Salinas');
  const [correo, setCorreo] = useState('20213tn054@utez.edu.mx');
  const [peso, setPeso] = useState('60');
  const [altura, setAltura] = useState('150');
  const [fechaNacimiento, setFechaNacimiento] = useState('12/Diciembre/2003');

  const navigation = useNavigation();

  const cancelar = () => {
    navigation.goBack();
  }

  const actualizar = () => {
    //Aqui se deben mandar los datos al servicio
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text>Mi información:</Text>
      <Text>Nombre:</Text>
      <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />
      <Text>Apellidos:</Text>
      <TextInput style={styles.input} value={apellidos} onChangeText={setApellidos} />
      <Text>Correo:</Text>
      <TextInput style={styles.input} value={correo} onChangeText={setCorreo} />
      <Text>Peso:</Text>
        <TextInput style={[styles.input, styles.inputLeft]} value={peso} onChangeText={setPeso} />
        <Text style={styles.inputRight}>kg</Text>
      <Text>Altura:</Text>
        <TextInput style={[styles.input, styles.inputLeft]} value={altura} onChangeText={setAltura} />
        <Text style={styles.inputRight}>cm</Text>
      <Text>Fecha de nacimiento:</Text>
      <TextInput style={styles.input} value={fechaNacimiento} onChangeText={setFechaNacimiento} />
      <TouchableOpacity style={styles.botonIzquierdo} onPress={cancelar}>
        <Text style={{ color: '#fff', fontSize: 14 }}>Cancelar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botonDerecho} onPress={actualizar}>
        <Text style={{ color: '#fff', fontSize: 14 }}>Actualizar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
},
input: {
    width: 267,
    height: 32,
    borderWidth: 1,
    borderRadius: 32,
    paddingHorizontal: 10,
},
botonIzquierdo: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 15,
    backgroundColor: 'blue',
    position: 'absolute',
    width: 159.57,
    height: 47.75,
    left: 11,
    top: 569,
},
botonDerecho: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 159.57,
    height: 47.75,
    left: 188,
    top: 568,
    borderRadius: 15,
    backgroundColor: 'red',
},
})