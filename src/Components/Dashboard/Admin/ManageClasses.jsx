import { Helmet } from "react-helmet-async";
import useClasses from "../../../Hooks/useClasses";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const ManageClasses = () => {

    const [classes, refetch] = useClasses();
    const [AXIOS] = useAxios()

    const handleApproveClass = classs => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                AXIOS.patch(`/classes/pending/${classs._id}`)
                    .then(data => {
                        if (data.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Approved!',
                                'Class has been Approved.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handleDenyClass = classs => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                AXIOS.patch(`/classes/denied/${classs._id}`)
                    .then(data => {
                        if (data.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Denied!',
                                'Class has been Denied!',
                                'success'
                            )
                        }
                    })
            }
        })
    }

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
                                <th>Instructor</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                classes.map((classs, index) =>
                                    <tr key={classs._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={classs.image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-bold">{classs.name}</div>
                                        </td>
                                        <td>
                                            <div className="font-bold">{classs.instructor}</div>
                                            <div>{classs.email}</div>
                                        </td>
                                        <td>
                                            <div className="font-bold">{classs.availableSeats}</div>
                                        </td>
                                        <td>$ {classs.price}</td>
                                        <th>
                                            {
                                                classs.status === 'Approved' ?
                                                    <><span>Approved</span></>
                                                    :
                                                    <>
                                                        <button onClick={() => handleApproveClass(classs)} className="btn btn-xs bg-orange-500 hover:bg-orange-800 text-white border-none" disabled={classs.status === 'Denied'}>Pending</button>
                                                    </>
                                            }
                                            {
                                                classs.status === 'Denied'
                                                    ?
                                                    <><span className="mx-2">Denied</span></>
                                                    :
                                                    <>
                                                        <button onClick={() => handleDenyClass(classs)} className="btn btn-xs bg-orange-500 hover:bg-orange-800 text-white border-none mx-2 " disabled={classs.status === 'Approved'}>Deny</button>
                                                    </>
                                            }
                                            <label htmlFor="my_modal_6" className="btn btn-xs bg-orange-500 hover:bg-orange-800 text-white border-none" disabled={classs.status === 'Approved'}>Feedback</label>
                                            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box">
                                                    <h3 className="font-bold text-lg">Feedback</h3>
                                                    <textarea className="textarea textarea-bordered w-full h-full" type="text" placeholder="Feedback"></textarea>
                                                    <div className="modal-action">
                                                        <label htmlFor="my_modal_6" className="btn">Send</label>
                                                    </div>
                                                </div>
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

export default ManageClasses;