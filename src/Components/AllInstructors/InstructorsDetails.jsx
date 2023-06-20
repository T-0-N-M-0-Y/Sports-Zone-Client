import { Helmet } from "react-helmet-async";
import useInstructors from "../../Hooks/useInstructors";
import AllInstructors from "./AllInstructors";

const InstructorsDetails = () => {

    const [instructors] = useInstructors();

    return (
        <div>
            <Helmet>
                <title>Sports Zone | Instructors</title>
            </Helmet>
            <h1 className='md:text-4xl text-2xl uppercase font-bold pt-32 pb-10 text-center'>Know Our Instructors</h1>
            <div className="md:grid grid-cols-3 gap-5 mx-5 md:mx-20">
                {
                    instructors.map(instructor =>
                        <AllInstructors
                            key={instructor._id}
                            instructor={instructor}
                        ></AllInstructors>)
                }
            </div>
        </div>
    );
};

export default InstructorsDetails;