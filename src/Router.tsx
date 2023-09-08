import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Home />,
        errorElement: <ErrorPage />,
    },
    {
        path:'movies/:movieId',
        element: <Detail />,
        errorElement: <ErrorPage />
    }
])

export default Router