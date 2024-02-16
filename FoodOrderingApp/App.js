import ReactDOM from "react-dom/client";
import "./App.scss"
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./components/About"
import Error from "./components/Error"
import ContactUs from "./components/ContactUs";

const AppLayout = () => {
    return(
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
      path: "/", // show path for routing
      element: <AppLayout />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children:[{
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/contact",
        element: <ContactUs/>
      }
      ]
    },
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter