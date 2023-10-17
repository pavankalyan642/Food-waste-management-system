import React, { useEffect, useState } from 'react'
import Adminnav from '../Navbar/Adminnav'
import axios from 'axios'

const History = () => {

    const[data,setData]=useState([])

    const getFoods=async ()=>{
        try{
              const res=await axios.get("http://localhost:8080/food")
              if(res.status===200)
              {
                  setData(res.data)
              }
        }
        catch(err)
        {
            console.log(err)
        }
    }

    useEffect(()=>{
        getFoods()
    },[])

    console.log(data)


  return (
    <div  className="history" style={{
        minHeight: "100vh"
      }}>
          <Adminnav/>

          <div >
                <h2 className="mt-2">History</h2>
                <table className="table table-hover table-striped bg-light mt-3">
                    <thead>
                        <tr>
                        <th>Donor Name</th>
                            <th>Type of food</th>
                            <th>Amount of food</th>
                            <th>Location</th>
                            <th>Image</th>
                            <th>Allocate Person</th>
                            <th>Timing</th>                         
                        </tr>
                    </thead>

                    <tbody>
                        
                    {
                            data.map((item,index)=>{
                                return(
                                    <tr key={index} >
                                        
                                        <td>{item.donorName}</td>
                                    <td>{item.foodType}</td>
                                    <td>{item.foodAmount}</td>
                                    <td>{item.location}</td>
                                    <td><img src={`http://${window.location.hostname}:8080/images/${item.file}`} alt="food" height="100" width="200" /></td>
                                    <td>{item.orphan}</td>
                                    <td>{item.time}</td>
                                </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>

            </div>
    </div>
  )
}

export default History