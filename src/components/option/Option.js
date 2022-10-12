import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({option, correctAnswer}) => {
    console.log(option);
    const [results, setResults] = useState(false);
    
    const handleClick = (e) => {

       
        const correctOption = e.target.innerText;
        
        if(correctAnswer === correctOption){
            setResults(true)
            toast.success("Wow! congrats, correct answer",
            {
                position: 'top-center'
            }
            );
            
        }
        else{
            setResults(false);
            // alert(`${correctAnswer}`);
            toast.warning("it is not the correct answer",
                {
                    position: 'top-center'
                }
            );
        }
    }
    return (
        <div>
            <input type="checkbox" name="" id="option" />
            <label onClick={handleClick}
            >{option} </label>
            
            <ToastContainer />
        </div>
    );
};

export default Option;