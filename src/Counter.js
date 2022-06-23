import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import SmileyIcon from './Smily Face1.png'
import AngryIcon from './Angry Face1.png'
import HeartIcon from './Love Face1.png'

import './App.css';

function Counter(props) {
  
  return (
    <Card>
      <Card.Text className = "d-flex cards">
        
        <p>{props.count}</p> 
        <Image onClick={() => props.increaseCounter()} fluid className="mx-auto" src={SmileyIcon} width="40px" alt="Smiley logo" /> 

        <p>{props.count1}</p> 
        <Image onClick={() => props.increaseCounter1()} fluid className="mx-auto" src={AngryIcon} width="40px" alt="Angry logo" /> 

        <p>{props.count2}</p> 
        <Image onClick={() => props.increaseCounter2()} fluid className="mx-auto" src={HeartIcon} width="40px" alt="Love logo" /> 

      </Card.Text>
    </Card>
  );
}

export default Counter;


