import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './View'
import Add from './Add';
import {Routes, Route, Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './fonts.css';
import './index.css';


function App(){

  const updateTodoItems = (id, description, testcount, counter) => {
    const item = {id, description, testcount, counter};
    localStorage.setItem("list", JSON.stringify([...todos, item]))
    changeTodos((state) => [...state, item]);
  }

  const [todos, changeTodos] = useState( [])

    
  useEffect(() => {
    const listContents = localStorage.getItem("list");
    changeTodos(JSON.parse(listContents)||[])
  }, [])

    return (
    
        <Container>
            <Navbar className="mr-auto sticky-top"  bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">BrickWork</Navbar.Brand>            
                  <Nav className="mr-auto">
                    {/* <Link className="nav-link" to="/">Home</Link> */}
                    <Link className="nav-link" to="/view">View Posts</Link>
                    <Link className="nav-link" to="/add">Add New Post</Link>
                  </Nav>
              </Container>
            </Navbar>

            <Routes> 
              <Route path="/" element={
                <View todos={todos}/>
              } />

              <Route path="/View" element={
                <View todos={todos}/>
              } />

              <Route path="/Add" element={
                <Add  onSubmit={(id, description, testcount, counter) => updateTodoItems(id, description, testcount, counter)} />                
              } /> 
            </Routes>
       </Container>

         
    );

}
export default App;



