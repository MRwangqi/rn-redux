import {combineReducers} from "redux"
import login from "./LoginReducer"


const rootReducer = combineReducers({
    loginIn: login
})

export default rootReducer