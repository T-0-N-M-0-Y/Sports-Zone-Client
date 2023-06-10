import { Helmet } from "react-helmet-async";

const AllInstructors = ({ instructor }) => {

    const { image, name, email } = instructor;

    return (
        <div>
            <Helmet>
                <title>Sports Zone | Instructors</title>
            </Helmet>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={image} className="h-96" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                    <div className="card-actions justify-start">
                        <button className="btn bg-orange-500 hover:bg-orange-800 text-white">See CLasses</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllInstructors;