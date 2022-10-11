import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return ( 
        <div className='blogs'>
           <h1>What is purpose of react router?</h1>
            <h3> by using react router can easily move on one page to another page. it's very simple and gorgies. actually anyone who use one time react router i'm sure he fall into love of it. so easily we can go any components also using useful hook. various components in a React Application, allows changing the browser URL, and keeps the UI in syncronously with the URL. quick start. declarative. fleaxible,link,useful and mainly used for developing single page web applications.</h3>
            <h1>
                How does contetxt api works?
            </h1>
            <h3>
                context api is mainly works produced to pass throw variables data effectivly. if we can compare to prop drilling whice is very painful. in this api context helps the web to developer to asily pass throw data,object, array,variables and etc using api context. accessible data various difference and complex nested components useprovider hook. every child can access those value by using useContext.solve a lot of problems that modern applications facesolve a lot of problems that modern applications face.
            </h3>
            <h1>what is useref ? </h1>
            <h3>
                useref hook can returns an unchangable value.but access between value easily.manage focus, text selection, trigger imperative animations or integrating third-party libraries.usecase toggole button.useRef returns only one value which is the actual data stored.Reference and state diff. accessing dom element by another value.Import the hook from the React library at the top of file. one component is mounted. ref.current.
            </h3>
        </div>
    );
};

export default Blogs;