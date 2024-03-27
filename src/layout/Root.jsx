import { Outlet } from "react-router-dom";
import NavvBar from "../pages/Shared/NavvBar/NavvBar";

const Root = () => {
    return (
        <div>
          <NavvBar></NavvBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;