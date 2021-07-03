import { 
    REGISTER_USER,
    LOGIN_USER,
    AUTH_USER,
    FORGET,
    PASS,
    logoutuser,
    NOTIFICATION,
    REGISTER_ALUM
} from "../actions/types";

export default function(state={},action){
    switch(action.type){ 
        case REGISTER_USER:
        return {...state, register: action.payload }
        case NOTIFICATION:
            return {...state, notific: action.payload }
        case REGISTER_ALUM:
        return {...state, entalum: action.payload }
        case LOGIN_USER:
            return {...state,member:action.payload}
         case AUTH_USER:
             return {...state, userData: action.payload }   
               
         case logoutuser:
             return  {...state,userData:{
                
             },member:{} }
        case FORGET:
                return{
                    ...state,forget:action.payload
                }
                case PASS:
                    return{
                        ...state,forgetpass:action.payload
                    }
         default:
            return state;
    }
}