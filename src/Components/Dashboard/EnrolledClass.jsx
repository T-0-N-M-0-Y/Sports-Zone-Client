import { Helmet } from "react-helmet-async";
import usePaymentInfo from "../../Hooks/usePaymentInfo";
import formatDate from "../../DateFormat/formatDate";

const EnrolledClass = () => {

    const [paymentInfo] = usePaymentInfo()
    console.log(paymentInfo);

    return (
        <div className="w-full">
            <Helmet>
                <title>Sports Zone | Enrolled Class</title>
            </Helmet>

            {
                paymentInfo.map((item) => (
                    <div key={item._id} className=' grid grid-cols-2 mx-24 mb-4'>
                        {item.className.map((className, index) => (
                            <div key={index} className="card w-96 bg-base-200 shadow-xl">
                                <figure className='relative h-52'>
                                    <div className="badge badge-secondary absolute top-4 right-2 bg-gradient-to-r from-orange-200 to-orange-700 text-lg">Enrolled</div>
                                    <img className='bg-cover border-l-8 border-t-8 border-orange-300 rounded-lg' src={item.classImage[index]} alt="Class" />
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

            {/* {
                paymentInfo.map(payment =>
                    <div key={payment._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={payment.classImage[0]} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {payment.className[0]}
                            </h2>
                            <p>Enrolled Date: {formatDate(payment.date)}</p>
                        </div>
                    </div>
                )
            } */}
        </div>
    );
};

export default EnrolledClass;