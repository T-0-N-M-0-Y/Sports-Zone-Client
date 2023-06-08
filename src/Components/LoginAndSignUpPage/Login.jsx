import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import GoGiFa from './GoGiFa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';


const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const redirectTo = location?.state?.from?.pathname || "/";

    const { signInWithEmailPass } = useContext(AuthContext);

    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        console.log(data);

        signInWithEmailPass(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Login Success',
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
            <div className='py-20 w-1/2 mx-auto border-2 shadow-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h1 className='text-2xl font-bold text-center'>Login</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-orange-800 text-white hover:bg-orange-500 border-none" type="submit" value="Login" />
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