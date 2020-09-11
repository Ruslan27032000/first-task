const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const RENAME = 'RENAME'

const initialState = {
    auth: true,
    login:'admin',
    password:'12345',
    name:'Admin'
}

export const authReducer = (state=initialState,action) => {
    switch (action.type){
        case LOGIN:
            return{
                ...state,
                auth: true
            }
        case LOGOUT:
            return{
                ...state,
                auth:false
            }
        case RENAME :
            return{
                ...state,
                name:action.name
            }
        default:
            return state
    }
}

export function logIn(){
    return{
        type:LOGIN
    }
}

export function logOut(){
    return{
        type:LOGOUT
    }
}

export function rename(name){
    return{
        type:RENAME,
        name
    }
}