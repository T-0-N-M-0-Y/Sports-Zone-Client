import useInstructors from "../../Hooks/useInstructors";
import ShowInstructors from "./ShowInstructors";

const Instructors = () => {

    const [instructors] = useInstructors()
    const sortedInstructors = instructors.sort((a, b) => b.numStudents - a.numStudents);
    console.log(sortedInstructors);

    return (
        <div className="text-center">
            <h1 className='md:text-4xl text-2xl uppercase font-bold md:my-10 mt-10'>Top Instructors</h1>

            <div className="md:grid grid-cols-3 gap-3">
                {
                    sortedInstructors.slice(0, 6).map(instructor => <ShowInstructors
                        key={instructor._id}
                        instructor={instructor}
                    ></ShowInstructors>)
                }
            </div>
        </div>
    );
};

export default Instructors;