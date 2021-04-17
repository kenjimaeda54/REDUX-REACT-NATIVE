import React, { useState } from 'react';
import { View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from "react-redux"
import { editEmail, editSenha } from "../acition/action"


export default function Login() {
    const user = useSelector(state => state)
    const dispatch = useDispatch();

    function change(item) {
        dispatch(editEmail(item))

    }

    function changeSenha(item) {
        dispatch(editSenha(item))

    }

    return (
        <SafeAreaView>

            <View style={styles.textView} >

                <TextInput

                    style={styles.textInput}
                    placeholder="Email"
                    autoCompleteType='off'
                    value={user.ath.email}
                    onChangeText={(item) => change(item)}
                />


                <TextInput

                    style={styles.textInputAcess}
                    placeholder="Senha"
                    autoCompleteType='off'
                    value={user.ath.senha}
                    onChangeText={(item) => changeSenha(item)}

                />

                <TouchableOpacity style={styles.button}  >

                    <Text> Cadastrar </Text>

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