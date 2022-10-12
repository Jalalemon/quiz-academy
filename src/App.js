import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './components/home/Home';
import Blogs from './components/blogs/Blogs';
import Statistics from './components/statistics/Statistics';
import About from './components/layout/header/about/About';
import Defaultpik from './components/default/Defaultpik';
import TopicDetails from './components/topic/TopicDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Defaultpik></Defaultpik>
        },
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/quiz/:topicId',
          loader: async({params}) =>{
            
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <TopicDetails></TopicDetails>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
    {
      path: '*',element: <h1> 404: this rout not found, please! provide the valid route</h1>
    }
   
  ])
  return (
    <div className="App">
    <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
