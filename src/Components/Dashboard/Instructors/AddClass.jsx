import { Helmet } from "react-helmet-async";
import useAxios from "../../../Hooks/useAxios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const image_API_key = import.meta.env.VITE_IMAGE_API_KEY;

const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const [AXIOS] = useAxios()
    const { user } = useContext(AuthContext);


    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        const image_BB_url = `https://api.imgbb.com/1/upload?key=${image_API_key}`

        fetch(image_BB_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {
                const imgURL = image.data.display_url;
                const { name, price, availableSeats, instructor, email, numStudents } = data;
                const newCLass = { name, price: parseFloat(price), availableSeats, instructor, email, numStudents, image: imgURL }
                console.log(newCLass);

                AXIOS.post('/classes', newCLass)
                    .then(data => {
                        if (data.data.insertedId) {
                            reset();
                            Swal.fire({
                                title: 'New Class Added',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                        }
                    })
            })
        console.log(data)
    };

    return (
        <div className="w-9/12 mx-auto">
            <Helmet>
                <title>Sports Zone | Add Class</title>
            </Helmet>

            <h1 className="text-center text-3xl font-bold mb-10">Add a Class</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="ml-10">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} readOnly  {...register("instructor", { required: true, maxLength: 100 })} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} readOnly {...register("email", { required: true, maxLength: 100 })} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text"  {...register("name", { required: true, maxLength: 100 })} placeholder="Class Name" className="input input-bordered w-full" />
                </div>

                <div className="mt-2 grid grid-cols-2 gap-3">
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats</span>
                        </label>
                        <input type="number" {...register("availableSeats", { required: true, maxLength: 100 })} placeholder="Available Seats" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Price</span>
                            </label>
                            <input type="text" {...register("price", { required: true, maxLength: 100 })} placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>
                <div className="form-control my-3 grid grid-cols-2 gap-5">
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Number of Students</span>
                        </label>
                        <input type="number" defaultValue={0} {...register("numStudents", { required: true, maxLength: 100 })} placeholder="Number of Students" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Upload Image</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className=" file-input file-input-bordered w-full" />
                    </div>
                </div>

                <input className="h-10 w-full rounded-lg bg-orange-500 hover:bg-orange-800 text-white mx-auto" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddClass;