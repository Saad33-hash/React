
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Mocktest from './components/Mocktest';
import NewCourses from './components/NewCourses';
import Process from './components/Process';
import NotFound from './components/NotFound';
function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:
    <div>
      <Navbar/>
    <Home/>
    </div>
  },
  
  {
    path:"/about",
    element:<div>
      <Navbar/>
    <About/>
    </div>
  },
  
  {
  path:"/dashboard",
  element:<div>
      <Navbar/>
    <Dashboard/>
    </div>,
  children:[
    {
      path:'mocktest',
      element:
      <div>
       
        <Mocktest/>
      </div>
    },
    {
   path:'process',
   element:
   <div>
    
   <Process/>
   </div>

    },
    {
   path:"newcourses",
   element:
   <div>
    
    <NewCourses/>
   </div>
    }
  ]

  },
  {
    path:"/student/:id",
    element:
    <div>
      <Navbar/>
    <ParamComp/>
    </div>

  },
  {
    path:"*",
    element:
    <div>
      <NotFound/>
    </div>
  }

]);

  return (
    <>
      <div>
       <RouterProvider router={router} />
      </div>
    
    </>
  )
}

export default App
