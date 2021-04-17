import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native"



export default function Home() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.btnVieww} >

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("login")}

                >

                    <Text style={{ color: "#fff", fontSize: 15 }} >Tela Login</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonacess}
                    onPress={() => navigation.navigate("loginUp")}
                >

                    <Text style={{ color: "#fff", fontSize: 15 }} >Tela cadastro</Text>

                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',


    },
    btnVieww: {
        width: '100%',
        height: '100%',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",


    },
    button: {
        width: 150,
        backgroundColor: "#CD5C5C",
        color: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 5,


    },
    buttonacess: {
        borderRadius: 5,
        width: 150,
        backgroundColor: "#CD5C5C",
        color: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 10,

    }


})