
import React, {useState} from 'react';
import Counter from './Counter';
import 'bootstrap/dist/css/bootstrap.min.css';



function Likes() {
  const [counters, changeCounters] = useState([{id:0, count:0}]);

  const generateCounters = () =>{
    return counters.map((counter) => {
       return <Counter 
                count={counter.count}              
                increaseCounter = {()=> increaseCounter(counter.id, true)}     
                // count1={counter1.count1}              
                // increaseCounter1 = {()=> increaseCounter1(counter1.id, true)}     
              />
    })
  }
  const increaseCounter = (id, increment) =>{
    const updated = counters.map((counter) => {
      if(counter.id === id){
        if(increment){
          return {id, count: counter.count+1}
        } else {
          return {id, count: 0}
        }
      }
      return counter;
      })

      changeCounters(updated)
    }

    //  const increaseCounter1 = (id, increment1) =>{
    //     const updated1 = counters.map((counter) => {
    //       if(counter.id === id){
    //         if(increment1){
    //           return {id, count1: counter.count1+1}
    //         } else {
    //           return {id, count1: 0}
    //         }
    //       }
    //       return counter;
          
    //       })
  

    //   changeCounters(updated1)
    // }

  return (
    <div className="App">
     {generateCounters()}     
    </div>
  );
}
export default Likes;
