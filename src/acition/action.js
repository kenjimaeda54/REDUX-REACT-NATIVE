
export function editEmail(email) {

    return {
        type: 'editEmail',
        payload: {
            email: email,

        }
    }
}

export function editSenha(senha) {

    return {
        type: 'editSenha',
        payload: {
            senha: senha,

        }
    }
}
