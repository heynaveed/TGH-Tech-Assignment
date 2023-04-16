import axios from "axios"

export const GetQuotesAPI=(Tag)=>{
    console.log(Tag)
    return axios.get(`https://api.quotable.io/random?maxLength=60&tags=${Tag}`)
}

export const PostQuotesAPI=(payload)=>{
    console.log("Payloaddd",payload)
  return axios.post(`https://tghtech.onrender.com/quotes`,payload)
}

export const GetBookmarked=()=>{
  return axios.get("https://tghtech.onrender.com/quotes")
}

export const DeleteBookmarked=(id)=>{
  console.log(id,"id")
  return axios.delete(`https://tghtech.onrender.com/quotes?id=${id}`)
}