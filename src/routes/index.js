import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ExplorePage from "../pages/ExplorePage";
import DetailsPage from "../pages/DetailsPage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "about",
                element : <About/>
            },
            {
                path : "contact",
                element : <Contact/>
            },
            {
                path : ":explore",
                element : <ExplorePage/>
            },
            {
                path : ":explore/:id",
                element : <DetailsPage/>
            },
            {
                path : "search",
                element : <SearchPage/>
            }
        ]
    }
])

export default router