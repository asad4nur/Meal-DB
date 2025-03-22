import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import Meals from './components/Meals/Meals';
import MealDetails from './components/MealDetails/MealDetails';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path: '/header',
    element: <Header></Header>
  },
  {
    path: '/',
    errorElement: <Error></Error>,
    element: <Home></Home>,
    children: [
      {
        path: 'meals',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='),
        element: <Meals></Meals>,
      },
      {
        path: 'meals/:mealsId',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.mealsId}`),
        element: <MealDetails></MealDetails>,
      },
    ]

  },
  {
    path: 'footer',
    element: <Footer></Footer>,
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
