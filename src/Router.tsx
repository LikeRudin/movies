import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./routes/Home";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Home />,
        errorElement: <ErrorPage />
    },
])

export default Router