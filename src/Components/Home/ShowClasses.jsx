const ShowClasses = ({ sortClass }) => {

    const { name, image, numStudents } = sortClass;

    return (
        <div>
            <div>
                <div className="card w-full">
                    <figure><img src={image} className="h-64" /></figure>
                    <div className="card-body">
                        <h2 className="uppercase text-md font-bold text-orange-500">{name}</h2>
                        <p>Students: {numStudents}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowClasses;