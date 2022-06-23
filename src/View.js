import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Likes from './Likes';


function View(props){
    
  const buildRows = () =>  {
    return props.todos.map((current) => (
      <tr key={current.id} >
        <td>
          {current.id}
        </td>
        <td>
          {current.description}
        </td>
        <td>
          {current.testcount}       
        </td>
        <td>
         {Likes()}       
        </td>
      </tr>
    )
    )
  }

    return (
      <>      
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Task</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {buildRows()}            
          </tbody>
        </Table>
      </>
    );

}
export default View;

