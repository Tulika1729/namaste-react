import ReactDOM from "react-dom/client";
import "./App.scss"
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
    return(
        <div className="App">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)