import React, { useEffect, useState } from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import Api from '../api/Api'


const Add = () => {

  const http =Api();

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState(null)

  const handlAdd = async(e)=>{

    e.preventDefault()

    try {
    
      const res = await http.post('/data',{name,email,phone})
      if (res.data){
        console.log('success')
        console.log(res.data)
      }
      
    } catch (error) {

      console.log(error)
      
    }

    
  }

  
  return (
    <Card color="transparent" shadow={false} className='border-2 border-black mx-auto w-1/2 mt-20'>
      
      
      <form onSubmit={handlAdd} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-1 flex flex-col gap-6">

        <Typography variant="h6" color="blue-gray" className="-mb-3">
            Name
          </Typography>
        <Input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            size="lg"
            type='text'
            placeholder="name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
        <Input

            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            size="lg"
            placeholder="name@mail.com"
            type='text'
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Phone
          </Typography>

        <Input
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            size="lg"
            placeholder="phone"
            type='number'
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
    
        <Button className="mt-6 mb-5" fullWidth  type='submit' >
            Add
        </Button>
      
      </form>
    </Card>
  )
}

export default Add