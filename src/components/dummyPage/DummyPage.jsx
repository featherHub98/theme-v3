import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";


export default function TableData() {
  const [data,setData] = useState([]);
  const [error,setError]=useState();
  useEffect(()=>{
    const fetchData = async (params) => {
      try {
        const response = await axios.get('/user.json')
        setData(response.data.coord)
        
      } catch (error) {
        
      }
    }
    fetchData();

  },[])
  
const add = async()=>{
  try {
    await axios.post("localhost:3001/coord/",{
       city: "London",
      country: "UK",
      lon: -0.1276,
      lat: 51.5074
  
    })
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
       { data.map((item)=>{
        return(<tr>
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
