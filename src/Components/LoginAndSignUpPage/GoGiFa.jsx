import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const GoGiFa = () => {

    const {signInWithGoogle} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const redirectTo = location?.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;

                const userSaved = { name: loggedUser.displayName, email: loggedUser.email }

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userSaved)
                })
                    .then(res => res.json())
                    .then(() => {
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