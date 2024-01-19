import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

const router = createHashRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <NotFound />,
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
