import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question/Question';

const TopicDetails = () => {
    const topic = useLoaderData();
    console.log(topic.data.questions);
    const {questions} = topic.data;
    console.log(questions);
    
    
    return (
        <div>
           {
            questions.map(question =><Question key={question.id } question={question}></Question> )
           }
        </div>
    );
};

export default TopicDetails;