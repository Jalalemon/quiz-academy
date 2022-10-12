import React from 'react';
import { Link } from 'react-router-dom';
import '../Quiz/Quize.css'
const Chart = ({defaultChart}) => {
    const { id,total, name, logo } = defaultChart
console.log(defaultChart);
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

export default Chart;