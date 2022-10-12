import React from 'react';
import quize from './quize.jpg';
import './Defaultpik.css'
import { useLoaderData } from 'react-router-dom';
import Chart from '../chart/Chart';
import '../home/Home.css'
const Defaultpik = () => {
const defaultCharts = useLoaderData()
console.log(defaultCharts);
    return (
       <div>
            <div className='default-pik'>
                <div>
                    <img src={quize} alt="" />
                </div>
                <div className="img-details">
                    <h2>Are you ready to test yourself. thats fine, don't wast time. it is high time to change yourself,you can practice more and more, as a result you can solve critical problems.</h2>
                </div>

            </div>
            <div className='quizes'>
                {
                    defaultCharts.data.map(defaultChart =><Chart defaultChart={defaultChart} key={defaultChart.id}> </Chart> )
                }
            </div>
       </div>
    );
};

export default Defaultpik;