import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./routes/Home";
import Preview from "./routes/Preview";
import Detail from "./routes/Detail";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:'movies/:movieId',
                element: <Preview />,
                errorElement: <ErrorPage />
            }
        ]
    },
    {
        path: 'character/:characterId',
        element: <Detail />,
        errorElement: <ErrorPage />
    }
])

export default Router