import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaUserSecret, FaUserShield, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const ManageUsers = () => {

    const [AXIOS] = useAxios()

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await AXIOS.get('/users')
        console.log(res.data);
        return res.data;
    })


    const handlePromoteAdmin = user => {
        fetch(`https://assignment-12-sports-academies-server-site-t-0-n-m-0-y.vercel.app/users/admin/${user._id}`, {
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
        fetch(`https://assignment-12-sports-academies-server-site-t-0-n-m-0-y.vercel.app/users/instructor/${user._id}`, {
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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                                <th>Make Teacher</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                users.map((user) =>
                                    <tr key={user._id}>
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