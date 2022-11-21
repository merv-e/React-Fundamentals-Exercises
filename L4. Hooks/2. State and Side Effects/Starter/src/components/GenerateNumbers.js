import React, { useState, useEffect } from 'react'
import Calculation from './Calculation';

const GenerateNumbers = () => {
    const [value1, setValue1] =  useState(Math.floor(Math.random() * 100));
    const [value2, setValue2] = useState(Math.floor(Math.random() * 100));
    const [value3, setValue3]= useState(Math.floor(Math.random() * 100));
  
    const [proposedAnswer, setProposedAnswer] = useState(Math.floor(Math.random() * 3) + value1 + value2 + value3);
    
    const [answer, setAnswer] = useState(value1 + value2 + value3);

   //  useEffect(() => {
   //    let newValues = newNumbers();

   // }
   // , []);

     const newNumbers = () => { 
        setValue1(Math.floor(Math.random() * 100));
        setValue2(Math.floor(Math.random() * 100));
        setValue3(Math.floor(Math.random() * 100));
        setProposedAnswer(Math.floor(Math.random() * 3) + value1 + value2 + value3);
        setAnswer(value1 + value2 + value3);
     }

    
  return (
    <div className="equation">
       <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
    <Calculation answer={answer} proposedAnswer={proposedAnswer} newNumbers={newNumbers} />
    </div>

    )
}

export default GenerateNumbers
