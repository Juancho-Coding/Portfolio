import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Main from "./pages/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
