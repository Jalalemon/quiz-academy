import React from 'react';
import './Quize.css'
const Quiz = ({ quiz, handleGoToLearn }) => {
    const {name, id, logo, total} =quiz
    return (
        <div className='quiz-container'>
           <div>
                <img src={logo} alt="" />
           </div>
           <div className="quiz-details">
            <h4>{name} </h4>
                <button onClick={() => handleGoToLearn(id,)}> Go to learn</button>
           </div>
        </div>
    );
};

export default Quiz;