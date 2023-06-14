import { Link, useRouteError } from "react-router-dom";
import { motion } from "framer-motion"

const ErrorPage = () => {

    const { error, status } = useRouteError()

    return (
        <div className="px-20 py-20">
            <div className="card w-full h-screen image-full text-center">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJ_UoLAPR8wkbi2QJnYPtOMdvSNtghsh4w2sGsfZLa-o4_fRujCT5zwGQXXHeFsTrmKg&usqp=CAU" alt="Shoes" /></figure>
                <div className="card-body">
                    <motion.div
                        className="box"
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 360, 360, 0],
                            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    >
                        <p className='text-3xl text-red-500 font-semibold font-serif flex justify-center mt-44'>Error: {status} </p>
                    </motion.div>
                    <br />
                    <p className='text-3xl text-white font-semibold font-serif flex justify-center items-center'>{error.message}</p>
                    <div className="card-actions justify-center items-center">
                        <motion.div className="box"
                            whileHover={{ scale: 2 }}
                            whileTap={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                            <Link className="bg-orange-500 p-2 lg:p-3 font-bold text-white rounded-lg hover:bg-orange-800" to={"/"}> <button>Go Home</button></Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;