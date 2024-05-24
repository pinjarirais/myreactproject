import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            
            <ul className="navigation">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/Params/user1">User1</NavLink></li>
                <li><NavLink to="/Params/user2">User2</NavLink></li>
                <li><NavLink to="/Hoc">Hoc</NavLink></li>
                <li><NavLink to="/Login">Login</NavLink></li>
                <li><NavLink to="/Todo">Todo</NavLink></li>
                <li><NavLink to="/Weather">Weather</NavLink></li>
                <li><NavLink to="/UseState">UseState</NavLink></li>
                <li><NavLink to="/UseEffect">UseEffect</NavLink></li>
                <li><NavLink to="/UseRef">UseRef</NavLink></li>
                <li><NavLink to="/UseCallBack">Usecallback</NavLink></li>
                <li><NavLink to="/Usememohooks">UseMemo</NavLink></li>
                <li><NavLink to="/Apicall">Apicall</NavLink></li>
                <li><NavLink to="/ReduxApicall">ReduxApicall</NavLink></li>
            </ul>
            
        </>
    );
}

export default Navbar;
