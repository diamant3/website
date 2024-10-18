import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  //createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'

import './styles.css'
import App from './App.jsx'
import { Err } from './Err.jsx'

import { Projects } from './pages/Projects.jsx'
import { AboutMe } from './pages/AboutMe.jsx'

//const router = createBrowserRouter([
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Err />
  },
  {
    path: 'projects',
    element: <Projects />,
    errorElement: <Err />
  },
  {
    path: 'about_me',
    element: <AboutMe />,
    errorElement: <Err />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
