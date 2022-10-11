import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import Question from './Question/Question';

const TopicDetails = () => {
    const topic = useLoaderData();
    const questionAll = topic.data.questions;
  
    return (
        <div>
          {
                <h1>Quize of {topic.data.name}</h1>
          }
        <ol>
           {
                questionAll.map((questionx => (<Question key={questionx.id}  questionx={questionx}></Question> )
           ))}
        
            </ol>
        </div>
       
    );
};

export default TopicDetails;