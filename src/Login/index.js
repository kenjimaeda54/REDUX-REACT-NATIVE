import React, { useEffect } from 'react';
import { View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux'

export default function Login() {
    const user = useSelector(state => state)

    return (
        <SafeAreaView>

            <View style={styles.textView} >

                <TextInput

                    style={styles.textInput}
                    placeholder="Email"
                    autoCompleteType='off'
                    value={user.ath.email}


                />


                <TextInput

                    style={styles.textInputAcess}
                    placeholder="Senha"
                    autoCompleteType='off'
                    value={user.ath.senha}

                />

                <TouchableOpacity

                    style={styles.button}

                >

                    <Text> Logar </Text>

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

    textView: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',

    },
    textInput: {
        backgroundColor: "#DCDCDC",
        color: "#000",
        fontSize: 15,
        padding: 20,
        width: '70%',
        padding: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#000',

    },
    textInputAcess: {
        backgroundColor: "#DCDCDC",
        color: "#000",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#000',
        fontSize: 15,
        padding: 20,
        width: '70%',
        padding: 20,
        margin: 15,

    },
    button: {
        width: '35%',
        backgroundColor: "#87CEEB",
        borderRadius: 2,
        borderWidth: 2,
        borderColor: "#dddd",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 15,
    }



})

