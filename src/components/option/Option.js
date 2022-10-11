import React, { useState } from 'react';

const Option = ({option, correctAnswer}) => {
    console.log(option);
    const [results, setResults] = useState(false);
    
    const handleClick = (e)=> {
        const correctOption = e.target.innerText;
        
        if(correctAnswer === correctOption){
            setResults(true)
            alert(true)
        }
        else{
            setResults(false);
            // alert(`${correctAnswer}`);
            alert(false)
        }
    }
    return (
        <div>
            <input type="checkbox" name="" id="option" />
            <label onClick={handleClick}
            >{option} </label>
        </div>
    );
};

export default Option;