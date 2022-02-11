/* tentativa de usar redux, nunca utilizei uso contentApi */


import { createStore } from 'redux'

const INITIAL_STATE = {
    password: '',
    email: '',
    emailEmpyt: false,
    showPassword: false,
    passwordEmpyt: false,
}

function inputUser(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_INPUT':
            return {...state, password: action.password, email: action.email}
        default:
            return state
    }
}

const store = createStore(inputUser)

export default store;