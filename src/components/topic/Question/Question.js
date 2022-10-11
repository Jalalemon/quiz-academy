import React from 'react';
import './Question.css'
const Question = ({questionx}) => {
   const {options,id,correctAnswer, questions} = questionx;
    console.log(questionx);
    const handleCorrectAnswer = (correctAnswer) =>{
        
    }

    return (

        <div>

           <div className="question-container">
            </div> 
            <div className="question-option">

                <h3>{questionx.question} </h3>
                <p onClick={() =>handleCorrectAnswer(correctAnswer)}>{options[0]} </p>
                <p> {options[1]}</p>
                <p>{options[2]}</p>
                <p>{options[3]}</p>
                </div> 

        
        </div>
    );
};

export default Question;