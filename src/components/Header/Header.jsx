import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm justify-between">
            <a className="btn btn-ghost text-xl">The Meal DB</a>
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <div className="hidden lg:flex ">
                            <ul className="menu menu-horizontal px-1 gap-3">
                                <NavLink  to="/" >Home</NavLink>
                                <NavLink to="/meals">Meals</NavLink>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Header;