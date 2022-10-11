import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import Question from './Question/Question';

const TopicDetails = () => {
    const topic = useLoaderData();
    console.log(topic.data.questions);
    const {questions} = topic.data;
    console.log(questions);

    const handleGoToLearn = (questions) => {
        console.log(questions);
    }


    return (
        <div>
           {
                questions.map(questionx => <Question key={questionx.id}  questionx={questionx}></Question> )
           },
           {
                <Quiz handleGoToLearn={handleGoToLearn}></Quiz>
           }
        </div>
       
    );
};

export default TopicDetails;