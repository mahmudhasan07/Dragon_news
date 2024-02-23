import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";

const App = () => {

    return (
        <>
        <div className="m-5">
            <div className="">
            <Header></Header>
            <Outlet></Outlet>

            </div>
        </div>
        </>
    );
};

export default App;