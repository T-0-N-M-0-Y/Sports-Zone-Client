import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserSecret, FaUserShield, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleDeleteUser = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handlePromoteAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handlePromoteInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Instructor!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Sports Zone | Manage Users</title>
            </Helmet>
            
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                                <th>Make Teacher</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className=""> {user.name}</div>
                                        </td>
                                        <td>
                                            <div className="">{user.email}</div>
                                        </td>
                                        <td>
                                            {
                                                user.role === 'admin' ?
                                                    <p className="text-center flex justify-evenly items-center"><FaUserShield></FaUserShield> Admin</p>
                                                    :
                                                    <button onClick={() => handlePromoteAdmin(user)} className="btn bg-orange-500 hover:bg-orange-800 text-white border-none"><FaUsers></FaUsers></button>
                                            }
                                        </td>
                                        <td>
                                            {
                                                user.role === 'instructor' ?
                                                    <p className="text-center flex justify-evenly items-center"><FaUserSecret></FaUserSecret>Instructor</p>
                                                    :
                                                    <button onClick={() => handlePromoteInstructor(user)} className="btn bg-orange-500 hover:bg-orange-800 text-white border-none"><FaUsers></FaUsers></button>
                                            }
                                        </td>
                                        <th>
                                            <button onClick={() => handleDeleteUser(user)} className="btn bg-red-600 text-white border-none"><FaTrashAlt></FaTrashAlt></button>
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

export default ManageUsers;