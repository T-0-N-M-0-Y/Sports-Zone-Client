
const AllClassDetails = ({ allclass }) => {

    const { image, name, instructor,
        availableSeats, price, numStudents } = allclass;

    return (
        <div className="card bg-base-200">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Instructor: {instructor}</p>
                <p>Available Seats: {availableSeats}</p>
                <p>Price: ${price}</p>
                <p>Number Of Students: {numStudents}</p>
            </div>
            <figure><img src={image} className="h-96 w-full rounded-full" alt="Album" /></figure>
            <div className="card-actions justify-center my-3">
                <button className="btn bg-orange-500 hover:bg-orange-800 text-white">Select Class</button>
            </div>
        </div>
    );
};

export default AllClassDetails;