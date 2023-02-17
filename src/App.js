import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {InputPage} from "./pages/input/InputPage";
import {Root} from "./pages/root/Root";
import {CanvasPage} from "./pages/canvas/CanvasPage";
import {useState} from "react";

function App() {
    const [name, setName] = useState("nameless")
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>
        },
        {
            path: "/input",
            element: <InputPage setName={setName}/>
        },
        {
            path: "/canvas",
            element: <CanvasPage name={name}/>
        }
    ])
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
