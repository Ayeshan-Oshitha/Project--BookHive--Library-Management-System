import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/main/Home';
import MainLayout from './pages/MainLayout';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';


const router = createBrowserRouter([
  {path:'/login' , element:<LoginPage/> },
  {path:'/signup' , element:<RegistrationPage/>  },
  {path:'/', element:<MainLayout /> }
])


function App() {
  return (
   <>
   <RouterProvider router={router} />
   </>
  );
}

export default App;
