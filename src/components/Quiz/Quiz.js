import React from 'react';
import './Quize.css'
const Quiz = ({quiz}) => {
    const {name, id, logo, total} =quiz
    return (
        <div className='quiz-container'>
           <div>
                <img src={logo} alt="" />
           </div>
           <div className="quiz-details">
            <h4>{name} </h4>
            <button> Go to learn</button>
           </div>
        </div>
    );
};

export default Quiz;