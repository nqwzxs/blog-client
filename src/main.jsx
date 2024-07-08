import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Home, { loader as homeLoader } from './routes/Home.jsx'
import Post, {
  loader as postLoader,
  action as postAction,
} from './routes/Post.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: 'posts/:postId',
        element: <Post />,
        loader: postLoader,
        action: postAction,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
