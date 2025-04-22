import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { SoftwareCalibration } from "./pages/SoftwareCalibration";

import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

const router = createHashRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <NotFound />,
    },
    {
        path: "/projectDetails",
        children: [
            {
                path: "calibration_Meters",
                element: <SoftwareCalibration />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
