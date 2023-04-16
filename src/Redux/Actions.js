import { GET_BOOKMARKED_DATA_FAILURE, GET_BOOKMARKED_DATA_REQUEST, GET_BOOKMARKED_DATA_SUCCESS } from "./ActionsTypes"

export const GetBookmarkedRequest=()=>{
    return{
        type:GET_BOOKMARKED_DATA_REQUEST
    }
}
export const GetBookmarkedSuccess=(payload)=>{
    return{
        type:GET_BOOKMARKED_DATA_SUCCESS,
        payload
    }
}
export const GetBookmarkedFailure=()=>{
    return{
        type:GET_BOOKMARKED_DATA_FAILURE
    }
}