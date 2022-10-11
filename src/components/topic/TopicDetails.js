import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import Question from './Question/Question';

const TopicDetails = () => {
    const topic = useLoaderData();
    const {questions} = topic.data;


  
    return (
        <div>
           {
                questions.map(questionx => <Question key={questionx.id}  questionx={questionx}></Question> )
           }
        
          
        </div>
       
    );
};

export default TopicDetails;