
const AllInstructors = ({ instructor }) => {

    const { image, name, email } = instructor;

    return (
        <div>

            <div className="card w-full bg-base-200">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                </div>
                <figure><img src={image} className="h-96 w-full rounded-full" alt="Shoes" /></figure>
                <div className="card-actions justify-center my-3">
                    <button className="btn bg-orange-500 hover:bg-orange-800 text-white">See CLasses</button>
                </div>
            </div>
        </div>
    );
};

export default AllInstructors;