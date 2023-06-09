
const ShowInstructors = ({ instructor }) => {
    console.log(instructor);

    const {image, name} = instructor;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl font-bold text-orange-500">{name}</h2>
            </div>
            <figure><img src={image} className="h-96 w-full" /></figure>
        </div>
    );
};

export default ShowInstructors;