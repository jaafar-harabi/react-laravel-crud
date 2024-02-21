import React, { useEffect, useState } from 'react'
import { Card } from "@material-tailwind/react";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import Api from '../api/Api'



const View = () => {

  const http =Api();

  const navigate = useNavigate()

  const [data,setData]=useState([]);

  const handlDelete = async(id)=>{
      const res = await http.delete('/'+id)
      if (res.data){
        console.log('success')
        fetchData()

      }

  }

  const handlEdit = (id)=>{

      navigate(`http://127.0.0.1:8000/api/${id}`)


  }

  const fetchData = async()=>{
    try {
      const res = await http.get('/')
      console.log(res)
      console.log(res.data)
      console.log(res.data.results)
      console.log(res.results)
      if (res){
        setData(res.data.results)
        console.log(res.data.results)

      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{

      

      fetchData()


  },[])


  return (
    <Card className="h-full w-1/2 overflow-scroll mx-auto mt-36">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Options</th>

          </tr>
          
        </thead>
        <tbody>
          {data!=="" && data.map((item,index)=>(
          
              <tr key={item.id}>
                <td>
                    {index+1}

                </td>
                
                <td>
                  {item.name}  
                </td>
                
                <td>
                  {item.email}
                </td>
                
                <td>
                  {item.phone}  
                </td>

                <td>
                    <button onClick={()=>handlDelete(item.id)} className='mx-2'> 
                      <FaDeleteLeft  />
                    </button> 

                    <button onClick={()=>handlEdit(item.id)}  >    
                      <FaRegEdit />
                    </button>


                </td>
              </tr>
            
            ))}
        </tbody>
      </table>
    </Card>
  )
}

export default View