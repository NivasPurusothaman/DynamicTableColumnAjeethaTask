import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DynamicTable() {

    const [headerApiData, setHeaderApiData] = useState([])
    const firstHeader = [{processname:"Employee Name"}]
    const [bodyApiData, setBodyApiData] = useState([])

    useEffect(()=>{
      axios.get("http://13.202.143.30:4001/api/processitem")
      .then((res)=>setHeaderApiData(res.data.results))
    },[])

    useEffect(()=>{
      axios.get("http://13.202.143.30:4001/api/Skillmatrix")
      .then((res)=>setBodyApiData(res.data))
    },[])

    const finalHeaders = firstHeader.concat(headerApiData)
    // console.log( (Object.keys(bodyApiData[0])).filter( (item) => (item == headerApiData[0].processname) ).toString() )
    console.log(bodyApiData)
    console.log(headerApiData)

  return (
    <div>
      <table>
        <thead>
          <tr>
            {finalHeaders.map((header, index)=>
            <th key={index}>{header.processname}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {bodyApiData.map((item, index)=>
            <tr key={index}>
              <td>{item.Employee_name}</td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[0].processname) ).toString()
                  == headerApiData[0].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[1].processname) ).toString()
                  == headerApiData[1].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[2].processname) ).toString()
                  == headerApiData[2].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[3].processname) ).toString()
                  == headerApiData[3].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[4].processname) ).toString()
                  == headerApiData[4].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[5].processname) ).toString()
                  == headerApiData[5].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[6].processname) ).toString()
                  == headerApiData[6].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[7].processname) ).toString()
                  == headerApiData[7].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[8].processname) ).toString()
                  == headerApiData[8].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[9].processname) ).toString()
                  == headerApiData[9].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[10].processname) ).toString()
                  == headerApiData[10].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[11].processname) ).toString()
                  == headerApiData[11].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[12].processname) ).toString()
                  == headerApiData[12].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[13].processname) ).toString()
                  == headerApiData[13].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[14].processname) ).toString()
                  == headerApiData[14].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[15].processname) ).toString()
                  == headerApiData[15].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[16].processname) ).toString()
                  == headerApiData[16].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[17].processname) ).toString()
                  == headerApiData[17].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
              <td>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[18].processname) ).toString()
                  == headerApiData[18].processname ? 
                  2 : (item.null ? 1 : 0)
                }
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default DynamicTable