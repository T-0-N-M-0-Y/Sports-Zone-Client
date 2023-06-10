import useClasses from "../../Hooks/useClasses";
import ShowClasses from "./ShowClasses";

const ClassesSection = () => {

    const [classes] = useClasses();

    const sortClasses = classes.sort((a, b) => b.numStudents - a.numStudents);

    return (
        <div>
            <h1 className='md:text-4xl text-2xl uppercase text-center font-bold my-10'>Popular Classes</h1>
            <div className="md:grid grid-cols-6 gap-1">
                {
                    sortClasses.slice(0, 6).map(sortClass => <ShowClasses
                        key={sortClass._id} 
                        sortClass={sortClass}
                    ></ShowClasses>)
                }
            </div>
        </div>
    );
};

export default ClassesSection;