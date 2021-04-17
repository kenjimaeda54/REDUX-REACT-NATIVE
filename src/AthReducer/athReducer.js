const user = {
    email: 'kenjimaeda@gmail.com',
    senha: '2121212'
    // ele não passa number
}

const AthReducer = (state = [], action) => {
    if (state.lengt == 0) {

        return user

    }

    switch (action.type) {
        case "editEmail":
            return {
                ...state, email: action.payload.email,
            }
    }

    switch (action.type) {
        case "editSenha":
            return {

                ...state, senha: action.payload.senha,
            }

    }


    return user;

}
export default AthReducer;