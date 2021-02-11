import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { Table} from 'react-bootstrap';
import axios from "axios";

const View =(req, res)=>{
    const [datas, setDatas] = useState([]);
    const displayData=async()=>{
        let viewData= await axios.get(`https://ypjm72q65l.execute-api.ap-south-1.amazonaws.com/dev/aws-insert-record`);
        let results=JSON.parse(viewData.data.body);
        
        let aa=results.data;
        setDatas(aa) ;
      }
console.log(">>>>>>>",datas);
    useEffect(() => {
      displayData();
      },[]);
    
    return(
        <> 
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th> Name</th>
                <th>Email </th>
                <th>Actions </th>
                </tr>
            </thead>
            <tbody>
                {datas.map((item) => {
                    return [
                <tr key={item.aws_crud_id}>
                    <td >
                        {item.aws_crud_id}
                    </td>
                    <td >
                        {item.aws_name}
                    </td>
                    <td >
                        {item.aws_email}
                    </td>
                    <td >
                    <Link to={`/edit/$id=${item.aws_crud_id}`}>Edit</Link>/<Link to={`/delete/$id=${item.aws_crud_id}`}>Delete</Link>
                    
                    </td>
                </tr>
            ];
        })}
            
            </tbody>
                </Table> 
               
           
        </>
    )
}

export default View