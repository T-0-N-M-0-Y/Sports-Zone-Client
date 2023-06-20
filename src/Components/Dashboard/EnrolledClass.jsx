import { Helmet } from "react-helmet-async";
import usePaymentInfo from "../../Hooks/usePaymentInfo";
import formatDate from "../../DateFormat/formatDate";

const EnrolledClass = () => {

    const [paymentInfo] = usePaymentInfo()
    console.log(paymentInfo);

    return (
        <div className="w-full my-20">
            <Helmet>
                <title>Sports Zone | Enrolled Class</title>
            </Helmet>

            {
                paymentInfo.map((item) => (
                    <div key={item._id} className=' md:grid md:grid-cols-2 gap-5 mx-5 md:mx-44'>
                        {item.className.map((className, index) => (
                            <div key={index} className="card md:w-96 bg-base-200 shadow-xl mb-10">
                                <figure className='relative h-52'>
                                    <div className="badge badge-secondary absolute top-4 right-2 bg-gradient-to-r from-slate-800 to-orange-800 text-white text-lg">Enrolled</div>
                                    <img className='rounded-lg' src={item.classImage[index]} alt="Class" />
                                </figure>
                                <div className="card-body">
                                    <h2 className='text-2xl text-center pb-2 font-semibold'>{className}</h2>
                                    <p className='text-center pb-4'>Enrolled Date: {formatDate(item.date)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    );
};

export default EnrolledClass;