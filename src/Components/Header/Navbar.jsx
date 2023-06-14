import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useSelectedClasses from "../../Hooks/useSelectedClasses";
import { motion } from "framer-motion"

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [selectedclasses] = useSelectedClasses();

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navbarItems =
        <>
            <motion.div className="box"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: .9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                <Link to={'/'}><li className="hover:bg-orange-800 p-3 rounded-lg mr-5">HOME</li></Link>
            </motion.div>
            <motion.div className="box"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: .9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                <Link to={'/instructors'}><li className="hover:bg-orange-800 p-3 rounded-lg mr-5">INSTRUCTORS</li></Link>
            </motion.div>
            <motion.div className="box"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: .9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                <Link to={'/classes'}><li className="hover:bg-orange-800 p-3 rounded-lg mr-5">CLASSES</li></Link>
            </motion.div>
            <motion.div className="box"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: .9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                <Link to={'/dashboard/dashhome'}><li className="hover:bg-orange-800 p-3 rounded-lg">DASHBOARD + {selectedclasses?.length || ' '}</li></Link>
            </motion.div>
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
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-orange-500 hover:bg-orange-800 rounded-box w-52">
                            {navbarItems}
                        </ul>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0FvJKoWnnZoq_Sg7TcatuUt_OLjrjlY-dW0FrXdipH-F7UmgFSp2ppnnUp5Fqua8s3Q&usqp=CAU" className="w-24 md:w-44" alt="" />
                </div>

                <div className="navbar-end">
                    {
                        user ?
                            <motion.div className="box"
                                whileHover={{ scale: 1.3 }}
                                whileTap={{ scale: .9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                                <Link onClick={handleSignOut} className="mr-2 bg-base-800 p-2 lg:p-3 text-white rounded-lg hover:bg-orange-800"> <button>LOGOUT</button></Link>
                            </motion.div>
                            :
                            <motion.div className="box"
                                whileHover={{ scale: 1.3 }}
                                whileTap={{ scale: .9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                                <Link className="mr-2 bg-base-800 p-2 lg:p-3 text-white rounded-lg hover:bg-orange-800" to={"/login"}> <button>LOGIN</button></Link>
                            </motion.div>
                    }
                    {
                        user ?
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <img className="w-10 h-10 lg:h-14 lg:w-14 rounded-full" src={user.photoURL} referrerPolicy="no-referrer" />
                            </div>
                            :
                            <motion.div className="box"
                                whileHover={{ scale: 1.3 }}
                                whileTap={{ scale: .9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                                <Link className="mr-2 bg-base-800 p-2 lg:p-3 text-white rounded-lg hover:bg-orange-800" to={"/signup"}> <button>SIGN UP</button></Link>
                            </motion.div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;