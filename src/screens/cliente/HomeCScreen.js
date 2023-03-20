import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppBar from '../../components/common/AppBar'

export default function IndexCScreen() {
    const onPress = () => {
        console.log("presionaste el boton")
    }
    return (
        <>
            <SafeAreaProvider>
                <View>
                    <AppBar />
                    <Text>Pantalla Index Cliente</Text>
                    <TouchableOpacity style={styles.button1} onPress={onPress}>
                        <Image source={require('../../../assets/imagenes/informacion.png')} style={styles.image} />
                        <Text style={{ color: '#fff', fontSize: 35}}>MI INFORMACION</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={onPress}>
                        <Image source={require('../../../assets/imagenes/rutina.png')} style={styles.image} />
                        <Text style={{ color: '#fff', fontSize: 35}}>RUTINA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button3} onPress={onPress}>
                        <Image source={require('../../../assets/imagenes/progreso.png')} style={styles.image} />
                        <Text style={{ color: '#fff', fontSize: 35}}>PROGRESO</Text>
                    </TouchableOpacity>
                    
                </View>
            </SafeAreaProvider>
        </>
    )
}

const styles = StyleSheet.create({
    button1:{
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 335,
        height: 124,
        left: 12,
        top: 114,
        borderRadius: 16,
    },
    button2: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 335,
        height: 124,
        left: 12,
        top: 278,
        borderRadius: 16,
        backgroundColor: "#1E1E1E"
    },
    button3:{
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 335,
        height: 124,
        left: 12,
        top: 442,
        borderRadius: 16,
        backgroundColor: "#1E1E1E"
    },
    image: {
        position: 'absolute',
        width: 335,
        height: 122.76,
        borderRadius: 16
    },
})