import { Link } from "react-router-dom";

const Navbar = () => {

    const navbarItems = 
    <>
        <Link to={'/'}><li className="hover:bg-orange-800 p-3 rounded-lg mr-5">HOME</li></Link>
        <Link><li className="hover:bg-orange-800 p-3 rounded-lg mr-5">INSTRUCTORS</li></Link>
        <Link><li className="hover:bg-orange-800 p-3 rounded-lg mr-5">CLASSES</li></Link>
        <Link><li className="hover:bg-orange-800 p-3 rounded-lg mr-5">DASHBOARD</li></Link>
    </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-black bg-opacity-60 text-white">
                <div className="navbar-start  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbarItems}
                    </ul>
                </div>
                
                <div className="navbar-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-yellow-500 rounded-box w-52">
                            {navbarItems}
                        </ul>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0FvJKoWnnZoq_Sg7TcatuUt_OLjrjlY-dW0FrXdipH-F7UmgFSp2ppnnUp5Fqua8s3Q&usqp=CAU" className="w-24 md:w-44" alt="" />
                </div>
                <div className="navbar-end">
                    <Link className="mr-2 bg-base-800 p-2 lg:p-3 text-white rounded-lg hover:bg-orange-800"> <button>LOGOUT</button></Link>
                    <Link className="mr-2 bg-base-800 p-2 lg:p-3 text-white rounded-lg hover:bg-orange-800" to={"/login"}> <button>LOGIN</button></Link>
                    <div className="tooltip tooltip-bottom">
                        <img className="w-10 h-10 lg:h-14 lg:w-14 rounded-full" src='' referrerPolicy="no-referrer" />
                    </div>
                    <Link className="mr-2 bg-base-800 p-2 lg:p-3 text-white rounded-lg hover:bg-orange-800" to={"/signup"}> <button>SIGN UP</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;