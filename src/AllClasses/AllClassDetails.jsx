import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useSelectedClasses from "../Hooks/useSelectedClasses";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AllClassDetails = ({ allclass }) => {

    const { _id, image, name, instructor, availableSeats, price, numStudents } = allclass;

    const { user } = useContext(AuthContext);

    const [, refetch] = useSelectedClasses();

    const navigate = useNavigate();

    const handleSelectedClasses = allclass => {
        console.log(allclass);
        if (user && user.email) {
            const selectClass = { classId: _id, name, instructor, image, price, email: user.email }
            fetch('http://localhost:5000/selectedclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); //refetch to update the number of items to the cart
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
                    navigate('/login')
                }
            })
        }
    }

    const [disabled, setDisabled] = useState([false]);

    useEffect(() => {
        if(availableSeats === 0){
            setDisabled(true)
        }
        else{
            setDisabled(false)
        }
    }, [availableSeats])

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
                <button onClick={() => handleSelectedClasses(allclass)} disabled={disabled} className="btn bg-orange-500 hover:bg-orange-800 text-white">Select Class</button>
            </div>
        </div>
    );
};

export default AllClassDetails;