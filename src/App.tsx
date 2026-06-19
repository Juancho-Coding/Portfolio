import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import { SoftwareCalibration } from './pages/SoftwareCalibration'

import './localization/localization'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import ParticlesUI from './utils/particles'
import LabDashboard from './pages/LabDashboard'
import CalibrationBench from './pages/calibrationBench'

const router = createHashRouter([
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
        path: 'LabDashboard',
        element: <LabDashboard />,
      },
      {
        path: 'calibration_Meters',
        element: <CalibrationBench />,
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
