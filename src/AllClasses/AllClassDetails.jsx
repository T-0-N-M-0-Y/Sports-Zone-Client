
const AllClassDetails = ({ allclass }) => {

    const { image, name, instructor,
        availableSeats, price, numStudents } = allclass;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} className="h-96 w-full" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Instructor: {instructor}</p>
                <p>Available Seats: {availableSeats}</p>
                <p>Price: ${price}</p>
                <p>Number Of Students: {numStudents}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-orange-500 hover:bg-orange-800 text-white">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassDetails;