import axios from 'axios'


export default function Api(){
  const http = axios.create({
    baseURL : `${process.env.REACT_APP_API}`,
    headers : {
      'Content-Type' : 'application/json'
    }
  })
  return (
    http
  )
}