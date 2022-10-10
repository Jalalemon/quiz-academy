import React from 'react';
import quize from './quize.jpg';
import './Defaultpik.css'

const Defaultpik = () => {
    return (
        <div className='default-pik'>
           <div>
                <img src={quize} alt="" />
           </div>
           <div className="img-details">
           <h1>Are you ready to test yourself. thats fine, don't wast time. it is high time to change yourself,you can practice more and more, as a result you will solve complex critical problems.</h1>

           </div>
        </div>
    );
};

export default Defaultpik;