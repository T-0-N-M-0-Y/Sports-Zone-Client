import { Helmet } from "react-helmet-async";
import useSelectedClasses from "../../Hooks/useSelectedClasses";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const SelectedClass = () => {

    const [selectedclasses, refetch] = useSelectedClasses();

    const total = selectedclasses.reduce((sum, selectedclass) => selectedclass.price + sum, 0);
    const totalPrice = parseFloat(total.toFixed(2));

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
                fetch(`http://localhost:5000/selectedclass/${selectedclass._id}`, {
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
        <div className="w-full h-full mt-10 mx-10">
            <Helmet>
                <title>Bristro Boss | Selected Class</title>
            </Helmet>
            <div className="flex justify-evenly items-center mb-5">
                <h1 className="text-xl font-semibold">Selected Classes: {selectedclasses.length}</h1>
                <h1 className="text-xl font-semibold">Total Price: $ {totalPrice}</h1>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Instructor</th>
                                <th>Course Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                selectedclasses.map((selectedclass, index) =>
                                    <tr key={selectedclass._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={selectedclass.image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-bold">{selectedclass.name}</div>
                                        </td>
                                        <td>
                                            <div className="font-bold">{selectedclass.instructor}</div>
                                        </td>
                                        <td>$ {selectedclass.price}</td>
                                        <th>
                                            <button onClick={() => handleDeleteClass(selectedclass)} className="btn bg-orange-500 hover:bg-orange-800 text-white border-none"><FaTrashAlt></FaTrashAlt></button>
                                        </th>
                                        <th>
                                            <Link to={'/dashboard/payment'}><button className="btn bg-orange-500 w-14 h-10 text-white hover:bg-orange-800 border-none">Pay</button></Link>
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

export default SelectedClass;