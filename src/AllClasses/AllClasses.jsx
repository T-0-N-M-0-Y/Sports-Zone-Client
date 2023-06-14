import { Helmet } from "react-helmet-async";
import useClasses from "../Hooks/useClasses";
import AllClassDetails from "./AllClassDetails";

const AllClasses = () => {

    const [classes] = useClasses();

    const sortClasses = classes.sort((a, b) => b.numStudents - a.numStudents);

    return (
        <div>
            <Helmet>
                <title>Sports Zone | Classes</title>
            </Helmet>
            <h1 className='md:text-4xl text-2xl uppercase font-bold pt-32 pb-10 text-center'>Our Classes</h1>
            <div className="md:grid grid-cols-3 gap-5 md:mx-20 mx-5">
                {
                    sortClasses.map(allclass => <AllClassDetails
                        key={allclass._id}
                        allclass={allclass}
                    ></AllClassDetails>)
                }
            </div>
        </div>
    );
};

export default AllClasses;