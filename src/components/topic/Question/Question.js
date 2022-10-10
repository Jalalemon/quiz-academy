import React from 'react';

const Question = ({question}) => {
   const {options } = question
    return (
        <div>
          <h1>options:{options} </h1>  
        </div>
    );
};

export default Question;