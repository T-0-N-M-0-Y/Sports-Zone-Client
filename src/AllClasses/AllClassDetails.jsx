import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useSelectedClasses from "../Hooks/useSelectedClasses";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useVerifyAdmin from "../Hooks/useVerifyAdmin";
import useVerifyInstructor from "../Hooks/useVerifyInstructor";
import { motion } from "framer-motion"

const AllClassDetails = ({ allclass }) => {

    const { _id, image, name, instructor, availableSeats, price, numStudents } = allclass;

    const { user } = useContext(AuthContext);

    const [, refetch] = useSelectedClasses();

    const navigate = useNavigate();
    const location = useLocation();

    const handleSelectedClasses = allclass => {
        console.log(allclass);
        if (user && user.email) {
            const selectClass = { classId: _id, name, instructor, image, price, email: user.email }
            fetch('https://assignment-12-sports-academies-server-site-t-0-n-m-0-y.vercel.app/selectedclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            title: 'Class Added',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                    }
                })
        }
        else {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Please Login First!!',
                icon: 'warning',
                confirmButtonText: 'Login',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    const [checkAdmin] = useVerifyAdmin();
    const [checkInstructor] = useVerifyInstructor();

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (availableSeats === 0 || checkAdmin || checkInstructor) {
            setDisabled(true)
        }
    }, [availableSeats, checkAdmin, checkInstructor])

    return (
        <div className="card bg-base-200">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Instructor: {instructor}</p>
                <p>Available Seats: {availableSeats}</p>
                <p>Price: ${price}</p>
                <p>Number Of Students: {numStudents}</p>
            </div>
            <figure><img src={image} className="h-96 w-full rounded-full" alt="Album" /></figure>
            <div className="card-actions justify-center my-3">
                <motion.div className="box"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: .9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                    <button onClick={() => handleSelectedClasses(allclass)} disabled={disabled} className="btn bg-orange-500 hover:bg-orange-800 text-white">Select Class</button>
                </motion.div>
            </div>
        </div>
    );
};

export default AllClassDetails;