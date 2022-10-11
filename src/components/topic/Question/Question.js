import React from 'react';

const Question = ({questionx}) => {
   const {options,id, questions} = questionx
console.log(questionx.question);


    return (
        <div>

            
            <h3>{questionx.question} </h3>
          <h5>{options[0]} </h5>
            <h5> {options[1]}</h5>
            <h5>{options[2]}</h5>
            <h5>{options[3]}</h5>  

        
        </div>
    );
};

export default Question;