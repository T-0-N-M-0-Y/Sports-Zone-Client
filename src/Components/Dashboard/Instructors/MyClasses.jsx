import { Helmet } from "react-helmet-async";
import useAddedClass from "../../../Hooks/useAddedClass";

const MyClasses = () => {

    const [addedclasses] = useAddedClass()
    console.log(addedclasses);
    return (
        <div className="text-center">
            <Helmet>
                <title>Sports Zone | Manage Users</title>
            </Helmet>

            <h1 className="my-10 font-bold text-4xl">Manage all Classes</h1>

            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Available Seats</th>
                                <th>Enrolled</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                addedclasses.map((addedClass, index) =>
                                    <tr key={addedClass._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={addedClass.image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-bold">{addedClass.name}</div>
                                        </td>
                                        <td>
                                            <div className="font-bold">{addedClass.availableSeats}</div>
                                        </td>
                                        <td>{addedClass.numStudents}</td>

                                        <th>
                                            {
                                                !addedClass.status ?
                                                    <><span>Pending...</span></>
                                                    :
                                                    <>
                                                        {addedClass.status}
                                                    </>
                                            }

                                            <br />

                                            <label htmlFor="my_modal_6" disabled={addedClass.status === 'Approved' || !addedClass.status} className="btn btn-xs bg-orange-500 hover:bg-orange-800 text-white border-none mt-3">Feedback</label>
                                            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box">
                                                    <p className="flex mt-20 justify-center">Update Your Info To Get Approved Again!</p>
                                                    <div className="modal-action">
                                                        <label htmlFor="my_modal_6" className="btn">Ok</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <button className="btn btn-xs bg-orange-500 hover:bg-orange-800 text-white border-none mt-2 mx-2 ">Update</button>
                                            </div>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClasses;