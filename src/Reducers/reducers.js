import { combineReducers } from "redux"
import AthReducer from "../AthReducer/athReducer"


const Reducers = combineReducers({

    //ath pode ser qualquer nome ele sera referencia para as constantes 
    ath: AthReducer

})

export default Reducers;