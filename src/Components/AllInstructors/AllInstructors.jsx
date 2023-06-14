import { motion } from "framer-motion"

const AllInstructors = ({ instructor }) => {

    const { image, name, email } = instructor;

    return (
        <div>

            <div className="card w-full bg-base-200 mt-5">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                </div>
                <figure><img src={image} className="h-96 w-full rounded-full" alt="Shoes" /></figure>
                <div className="card-actions justify-center my-3">
                    <motion.div className="box"
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: .9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                        <button className="btn bg-orange-500 hover:bg-orange-800 text-white">See CLasses</button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AllInstructors;