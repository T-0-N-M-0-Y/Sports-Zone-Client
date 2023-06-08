import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GoGiFa = () => {
    return (
        <div className='flex items-center justify-between mx-10'>
            <h1 className="my-3 text-start">Or Login With</h1>
            <div className="flex justify-end">
                <Link><FaGoogle className="text-xl"></FaGoogle></Link>
                <Link><FaFacebook className="mx-5 text-xl"></FaFacebook></Link>
                <Link><FaGithub className="text-xl"></FaGithub></Link>   
            </div>
        </div>
    );
};

export default GoGiFa;