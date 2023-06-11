import { Helmet } from "react-helmet-async";
import { FaAward, FaHome, FaPaypal, FaRegGem, FaUniversity, FaUserGraduate, FaUserSecret, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useVerifyInstructor from "../../Hooks/useVerifyInstructor";
import useVerifyAdmin from "../../Hooks/useVerifyAdmin";


const Dashboard = () => {

    const [isInstructor] = useVerifyInstructor();
    const [isAdmin] = useVerifyAdmin();

    return (
        <div>
            <div>
                <Helmet>
                    <title>Sports Zone | Dashboard</title>
                </Helmet>

                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">

                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                        <Outlet></Outlet>


                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-orange-500 text-white text-xl">
                            {
                                isAdmin ?
                                    <>
                                        <li><NavLink to={'/dashboard/manageclasses'}><FaRegGem></FaRegGem> Manage Classes</NavLink></li>
                                        <li><NavLink to={'/dashboard/manageusers'}><FaUsers></FaUsers> Manage Users</NavLink></li>
                                    </>
                                    :
                                    <>
                                        {
                                            isInstructor ?
                                                <>
                                                    <li><NavLink to={'/dashboard/addclass'}><FaAward></FaAward> Add Class</NavLink></li>
                                                    <li><NavLink to={'/dashboard/myclasses'}><FaUserGraduate></FaUserGraduate> My Classes</NavLink></li>
                                                </>
                                                :
                                                <>
                                                    <li><NavLink to={'/dashboard/selectedclass'}><FaAward></FaAward> Selected Classes</NavLink></li>
                                                    <li><NavLink to={'/dashboard/enrolledclass'}><FaUserGraduate></FaUserGraduate> Enrolled Classes</NavLink></li>
                                                    <li><NavLink to={'/dashboard/paymenthistory'}><FaPaypal></FaPaypal> Payment History</NavLink></li>
                                                </>
                                        }
                                    </>
                            }
                            <div className="divider"></div>

                            <li><NavLink to={'/'}
                            ><FaHome></FaHome> Home</NavLink></li>
                            <li><NavLink to={'/classes'}><FaUniversity></FaUniversity> Classes</NavLink></li>
                            <li><NavLink to={'/instructors'}><FaUserSecret></FaUserSecret> Instructors</NavLink></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;