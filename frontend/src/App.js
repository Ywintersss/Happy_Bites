import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/layout'
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      // parent route wraps child routes
      element: <Layout />,
      children : 
      [
        // Outlet is used to render child route components when the corresponding url is matched.
        { 
          path: "/",
          element: ""
        },
      ]
    }
  ])


  return (
    <div className="App">
      {/* RouterProvider is used to render child routes */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
