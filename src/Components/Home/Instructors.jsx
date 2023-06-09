import useInstructors from "../../Hooks/useInstructors";
import ShowInstructors from "./ShowInstructors";

const Instructors = () => {

    const [instructors] = useInstructors()
    const sortedInstructors = instructors.sort((a, b) => b.numStudents - a.numStudents);
    console.log(sortedInstructors);

    return (
        <div className="text-center">
            <h1 className='text-4xl uppercase font-bold my-10'>Top Instructors</h1>

            <div className="grid grid-cols-3 gap-3 mx-20">
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