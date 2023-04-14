import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import AppBarCliente from '../../components/common/AppBarCliente'

export default function InformarionScreen() {
    //const baseUrl = '//192.168.100.10:8090/auth/alumno/{id}';
    const [values, setValues] = useState({
        name: 'Yahir',
        lastName: 'Degante Salinas',
        email: '20213tn054@utez.edu.mx',
        weight: '60',
        height: '150',
        birthdate: '12/Diciembre/2003'
    });
    const navigation = useNavigation();

    const handleEditPress = () => {
        navigation.navigate('editInfoScreen', { values });
    };

    const handleChangePress = () => {
        navigation.navigate('cambiarContra');
        console.log('cambiar contraseña');
    };
    return (
        <View style={styles.container}>
            <AppBarCliente />
            <Text>Mi información:</Text>
            <Text>Nombre:</Text>
            <Text style={styles.input}>Yahir</Text>
            <Text>Apellidos:</Text>
            <Text style={styles.input}>Degante Salinas</Text>
            <Text>Correo:</Text>
            <Text style={styles.input}>20213tn054@utez.edu.mx</Text>
            <Text>Peso:</Text>
            <Text style={styles.input}>60 <Text>kg</Text></Text>
            <Text>Altura:</Text>
            <Text style={styles.input}>150 <Text>cm</Text></Text>
            <Text>Fecha de nacimiento:</Text>
            <Text style={styles.input}>12/Diciembre/2003</Text>
            <TouchableOpacity style={styles.botonIzquierdo} onPress={handleChangePress}>
                <Text style={{ color: '#fff', fontSize: 14 }}>Cambiar contraseña   <Icon name="lock" size={20} color="white" /></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonDerecho} onPress={handleEditPress}>
                <Text style={{ color: '#fff', fontSize: 14 }}>Editar Información   <Icon name="pencil" size={20} color="white" /> </Text>
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