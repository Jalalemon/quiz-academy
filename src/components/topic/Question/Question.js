import React, { useState } from 'react';
import './Question.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import Option from '../../option/Option';

const Question = ({questionx}) => {
   const {options, correctAnswer, question} = questionx;
    const handleCorrectAnswer = correctAnswer =>  {

        alert(`The correct Answer of the question is:  ${correctAnswer}`)
    }
    return (
        <div>
           <div className="question-container">
            </div> 
            <div className="question-option">

                <div className="question">
                    <h3>{question} </h3>
                  
                <button onClick={() =>handleCorrectAnswer(correctAnswer)}> 
                    <FontAwesomeIcon icon={faShoppingBag }></FontAwesomeIcon>
                    
                </button>
                  
                </div>
                {
                    options.map((option) => (
                        <Option option={option} correctAnswer={correctAnswer}></Option>
                    ))
                }



               
                {/* <p onClick={() => handleCorrectAnswer(correctAnswer)}>{options[0]} </p>
                <p onClick={() => handleCorrectAnswer(correctAnswer)}> {options[1]}</p>
                <p onClick={() => handleCorrectAnswer(correctAnswer)}>{options[2]}</p>
                <p onClick={() => handleCorrectAnswer(correctAnswer)}>{options[3]}</p> */}
                </div> 

        
        </div>
    );
};

export default Question;