import { combineReducers } from 'redux'
import AthReducer from "../AthReducer/athReducer"


const Reducers = combineReducers({

    // ath: poderia ser qualquer variavel   

    ath: AthReducer,

});

export default Reducers;