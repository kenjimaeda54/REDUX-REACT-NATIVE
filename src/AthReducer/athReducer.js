const user = {
    email: "Kenjifamil@gmaial.com",
    senha: "12123454"
}

const AthReducer = (state = user, action) => {
    if (state.length == 0) {

        return user
    }


    return state;
}

export default AthReducer;