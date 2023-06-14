import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const GoGiFa = () => {

    const { signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const redirectTo = location?.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;

                const userSaved = { name: loggedUser.displayName, email: loggedUser.email }

                fetch('https://assignment-12-sports-academies-server-site-t-0-n-m-0-y.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userSaved)
                })
                    .then(res => res.json())
                    .then(() => {
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
            })
    }

    return (
        <div className='flex items-center justify-between mx-10'>
            <h1 className="my-3 text-start">Or Login With</h1>
            <div className="flex justify-end">
                <Link onClick={handleGoogleSignIn}><FaGoogle className="text-xl"></FaGoogle></Link>
                <Link><FaFacebook className="mx-5 text-xl"></FaFacebook></Link>
                <Link><FaTwitter className='text-xl'></FaTwitter></Link>
                <Link><FaGithub className='text-xl ml-5'></FaGithub></Link>
            </div>
        </div>
    );
};

export default GoGiFa;