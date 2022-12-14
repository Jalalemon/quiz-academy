import React from 'react';
import { Link } from 'react-router-dom';
import './Quize.css'
const Quiz = ({ quiz}) => {
    const { id, total,name, logo,} =quiz
    return (
        <div className='quiz-container'>
           <div>
                <img src={logo} alt="" />
           </div>
           <div className="quiz-details">
            <h4>{name} </h4>
                <h5>Quiz:{total} </h5>
                <button><Link to={`/quiz/${id}`}> Go to learn</Link> </button>
           </div>
        </div>
    );
};

export default Quiz;