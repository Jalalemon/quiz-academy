import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import'./Home.css';

const Home = () => {
    const quizes = useLoaderData();
    console.log(quizes);
    


    const handleGoToLearn = (quizes) => {
        console.log(quizes);
    }

    return (
        <div>
          
           <div className="quizes">
                {
                    quizes.data.map(quiz => <Quiz key={quiz.id} handleGoToLearn={handleGoToLearn} quiz={quiz}></Quiz>)
                },
                
           </div>
        </div>
    );
};

export default Home;