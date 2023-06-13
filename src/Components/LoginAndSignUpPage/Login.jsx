import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import GoGiFa from './GoGiFa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import { motion } from "framer-motion"


const Login = () => {


    const navigate = useNavigate();
    const location = useLocation();
    const redirectTo = location?.state?.from?.pathname || "/";

    const { signInWithEmailPass } = useContext(AuthContext);

    const { register, handleSubmit } = useForm();

    const [showPassowrd, setShowPassword] = useState(false)

    const onSubmit = data => {
        console.log(data);

        signInWithEmailPass(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Login Success!! Enjoy Your Time',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(redirectTo, { replace: true });
            })
            .catch(error => console.log(error))

    }

    return (
        <div className='h-screen'>
            <Helmet>
                <title>Sports Zone | Login</title>
            </Helmet>
            <div className='py-24 w-1/2 mx-auto border-2 rounded-2xl shadow-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h1 className='text-2xl font-bold text-center'>Login</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered w-11/12" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className='flex items-center justify-between'>
                            <input type={showPassowrd ? 'text' : 'password'} {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" className="input input-bordered w-11/12" />
                            <Link><FaEye className='text-xl' onClick={() => setShowPassword(!showPassowrd)}></FaEye></Link>
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <motion.div className="box"
                            whileHover={{ scale: .9 }}
                            whileTap={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                            <input className="btn w-11/12 bg-orange-800 text-white hover:bg-orange-500 border-none" type="submit" value="Login" />
                        </motion.div>
                    </div>
                </form>
                <div className='mx-10'>
                    <Link to={'/signup'}><p className='text-orange-800'>New here?? Create an Account</p></Link>
                </div>
                <GoGiFa></GoGiFa>
            </div>
        </div>
    );
};

export default Login;