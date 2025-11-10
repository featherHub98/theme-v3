import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";


export default function TableData() {
  const [coordData,setCoordData] = useState([]);
  
  const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/coord')
       if (response.data)
       setCoordData(response.data)
        
      } catch (error) {
        
      }
    }

  useEffect(()=>{
    
    fetchData();

  },[])
  
const add = async()=>{
 
  try {
    
   await axios.post("http://localhost:3001/coord/",{
       city: "Tunis",
      country: "TN", 
      lon: -0.1276,
      lat: 51.5074,
      id: null
  
    }).then((res)=>{
       
       setCoordData(res.data)
    }).catch((err)=>{
      alert(err);
      
    })
   /*fetch('http://localhost:3001/coord', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    city: "London",
      country: "UK", 
      lon: -0.1276,
      lat: 51.5074,
      id: null
  })
})*/
    
  } catch (error) {
    
  }
}
  return(
    <Container>
      <button onClick={add}>add</button>
      <Table>
        <thead>
        <tr>
          <th>city</th>
          <th>country</th>
          <th>lon</th>
          <th>lat</th>
        </tr>
      </thead>
      <tbody>
       { coordData.map((item,index)=>{
        return(<tr key={index}>
          <td>{item.city}</td>
          <td>{item.country}</td>
          <td>{item.lon}</td>
          <td>{item.lat}</td>
        </tr>)
      })}
        </tbody>
      </Table>
    </Container>
  )
}
