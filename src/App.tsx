import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import './localization/localization'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import ParticlesUI from './utils/particles'
import CalibrationBench from './pages/CalibrationBench'
import IotSystem from './pages/IotSystem'
import ManagementLab from './pages/ManagementLab'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
  },
  {
    path: '/projectDetails',
    element: <Outlet />,
    children: [
      {
        path: 'IotSystem',
        element: <IotSystem />,
      },
      {
        path: 'calibration_Meters',
        element: <CalibrationBench />,
      },
      {
        path: 'managementLab',
        element: <ManagementLab />,
      },
    ],
  },
])

function App() {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Particles container */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: '-1',
          backgroundColor: '#05101c',
        }}
      >
        <ParticlesUI />
      </div>
      {/* Main container */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
