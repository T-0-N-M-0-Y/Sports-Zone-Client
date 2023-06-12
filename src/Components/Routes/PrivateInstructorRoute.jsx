import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import useVerifyInstructor from "../../Hooks/useVerifyInstructor";

const PrivateInstructorRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [checkInstructor, checkInstructorLoading] = useVerifyInstructor();

    if (loading || checkInstructorLoading) {
            return (
                <>
                    <span className="flex justify-center"><FaSpinner className='animate-spin text-4xl my-20'></FaSpinner></span>
                </>
            )
    }
    if (user && checkInstructor) {
        return children;
    }
    return <Navigate to={'/'} state={{ from: location }} replace></Navigate>
};

export default PrivateInstructorRoutes;