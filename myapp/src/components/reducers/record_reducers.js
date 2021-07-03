import { 
    ADDRECORD,
    GETRECORD,
    ALLALUM,
    SEARCHYR,
    ADDNEWS,
    ALLNEWS,
    ADDEVENTS,
    ADDDETAIL,
    ALLGALLERY
} from "../actions/types";

export default function(state={},action){
    switch(action.type){ 
        case ADDRECORD:
        return {...state, award:action.payload }
        
        case GETRECORD:
            return {...state, rec:action.payload }
         case ADDNEWS:
            return {...state, news:action.payload }
        case ALLALUM:
            return {...state, all:action.payload }
        case ADDEVENTS:
            return {...state, event:action.payload }
        case ADDDETAIL:
            return {...state, detail:action.payload }
        case ALLGALLERY:
            return {...state, gallery:action.payload }
        case ALLNEWS:
            return {...state, allnews:action.payload }
        case SEARCHYR:
            return {...state, searchresult:action.payload }
              
        
        default:
            return state;
    }
}
