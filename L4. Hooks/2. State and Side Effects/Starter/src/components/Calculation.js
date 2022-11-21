import React, { useState } from 'react'

const Calculation = ({proposedAnswer, answer, newNumbers}) => {
    const [numCorrect, setNumCorrect] = useState(0); 
    const [numQuestions, setNumQuestions] = useState(0); 

    const rightAnswer = () => { 
      if (proposedAnswer === answer ) {
        setNumCorrect(numCorrect +1);
      }
      setNumQuestions(numQuestions +1);
      newNumbers();
    };

    const wrongAnswer = () => { 
      if(proposedAnswer !== answer ) {
        setNumCorrect(numCorrect +1);
      }
        setNumQuestions(numQuestions +1);
        newNumbers();
    };

  return (
    <>
        <button onClick={rightAnswer}>True</button>
        <button onClick={wrongAnswer}>False</button>
        <p className="text">
          Your Score: {numCorrect}/{numQuestions}
        </p>
    </>
  )
}

export default Calculation
