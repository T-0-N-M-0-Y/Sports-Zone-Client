import { Helmet } from "react-helmet-async";
import useClasses from "../../../Hooks/useClasses";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const ManageClasses = () => {

    const [classes, refetch] = useClasses();
    console.log(classes);
    const [AXIOS] = useAxios()

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
                AXIOS.patch(`/classes/${classs._id}`)
                    .then(data => {
                        if (data.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Denied!',
                                'Your file has been Denied!',
                                'success'
                            )
                        }
                    })
            }
        })
    }

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
                AXIOS.patch(`/classes/${classs._id}`)
                    .then(data => {
                        if (data.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Approved!',
                                'Your file has been Approved.',
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
                                                        <button disabled={classs.status === 'Denied'} onClick={() => handleApproveClass(classs)} className="btn btn-xs bg-orange-500 hover:bg-orange-800 text-white border-none">Pending</button>
                                                    </>
                                            }
                                            {
                                                classs.status === 'Denied'
                                                    ?
                                                    <><span>Denied</span></>
                                                    :
                                                    <>
                                                        <button disabled={classs.status === 'Approved'} onClick={() => handleDenyClass(classs)} className="btn btn-xs bg-orange-500 hover:bg-orange-800 text-white border-none mx-2">Deny</button>
                                                    </>
                                            }
                                            <button className="btn btn-xs bg-orange-500 hover:bg-orange-800 text-white border-none">Feedback</button>
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