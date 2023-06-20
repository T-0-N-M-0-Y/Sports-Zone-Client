import { Helmet } from "react-helmet-async";
import useSelectedClasses from "../../Hooks/useSelectedClasses";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { motion } from "framer-motion"

const SelectedClass = () => {

    const [selectedclasses, refetch] = useSelectedClasses();

    const totalPrice = selectedclasses.reduce((sum, item) => item.price + sum, 0)

    const handleDeleteClass = selectedclass => {

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
                fetch(`https://assignment-12-sports-academies-server-site-t-0-n-m-0-y.vercel.app/selectedclass/${selectedclass._id}`, {
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

    return (
        <div className="h-full w-3/4 mt-20">
            <Helmet>
                <title>Sports Zone | Selected Class</title>
            </Helmet>
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-xl font-semibold">Selected Classes: {selectedclasses.length}</h1>

                <h1 className="text-xl font-semibold">Total Price: $ {totalPrice}</h1>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Instructor</th>
                                <th>Course Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                selectedclasses.map((selectedclass) =>
                                    <tr key={selectedclass._id}>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={selectedclass.image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>{selectedclass.name}</div>
                                        </td>
                                        <td>
                                            <div>{selectedclass.instructor}</div>
                                        </td>
                                        <td>$ {selectedclass.price}</td>
                                        <th>
                                            <button onClick={() => handleDeleteClass(selectedclass)} className="btn bg-orange-500 hover:bg-orange-800 text-white border-none"><FaTrash></FaTrash></button>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <motion.div className="box"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: .9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                <Link to={'/dashboard/payment'}><button disabled={selectedclasses.length === 0} className="btn bg-orange-500 w-full h-10 mt-10 text-white hover:bg-orange-800 border-none">Pay</button></Link>
            </motion.div>
        </div>
    );
};

export default SelectedClass;