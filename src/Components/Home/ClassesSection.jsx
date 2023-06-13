import useClasses from "../../Hooks/useClasses";
import ShowClasses from "./ShowClasses";
import { motion } from "framer-motion"

const ClassesSection = () => {

    const [classes] = useClasses();

    const sortClasses = classes.sort((a, b) => b.numStudents - a.numStudents);

    return (
        <div>
            <h1 className='md:text-4xl text-2xl uppercase text-center font-bold my-10'>Popular Classes</h1>
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
            >
                <div className="md:grid grid-cols-6 gap-1">
                    {
                        sortClasses.slice(0, 6).map(sortClass => <ShowClasses
                            key={sortClass._id}
                            sortClass={sortClass}
                        ></ShowClasses>)
                    }
                </div>
            </motion.div>

        </div>
    );
};

export default ClassesSection;