import { GET_BOOKMARKED_DATA_FAILURE, GET_BOOKMARKED_DATA_REQUEST, GET_BOOKMARKED_DATA_SUCCESS } from "./ActionsTypes";

const initialState={
    isLoading:false,
    isError:false,
    Bookmark:[]
}

const Reducer=(State=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case GET_BOOKMARKED_DATA_REQUEST:{
            return{
                ...State,
                isLoding:true
            }
        };
        case GET_BOOKMARKED_DATA_SUCCESS:{
            return{
                ...State,
                isLoding:false,
                Bookmark:payload
            }
        };
        case GET_BOOKMARKED_DATA_FAILURE:{
            return{
                ...State,
                isLoding:false,
                isError:true,
                Bookmark:[]
            }
        };
        default:
            return State
    }
}
export{Reducer}