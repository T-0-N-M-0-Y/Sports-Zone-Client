import { Helmet } from "react-helmet-async";
import usePaymentInfo from "../../Hooks/usePaymentInfo";

const EnrolledClass = () => {

    const [payments] = usePaymentInfo()
    console.log(payments);

    return (
        <div>
            <Helmet>
                <title>Sports Zone | Enrolled Class</title>
            </Helmet>

            <div className="w-full">
                <h1 className="text-center text-4xl font-bold mt-10 mb-20">Payment History</h1>
                <div>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full mx-10">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Classes</th>
                                    <th>Email</th>
                                    <th>Amount</th>
                                    <th>transactionId</th>
                                    <th>Status</th>
                                    <th>date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    payments.map((payment, index) =>
                                        <tr key={payment._id}>
                                            <th>
                                                {index + 1}
                                            </th>
                                            <td>
                                                <div>{payment.className[0]}</div>
                                                <div>{payment.className[1]}</div>
                                                <div>{payment.className[2]}</div>
                                                <div>{payment.className[3]}</div>
                                            </td>
                                            <td>
                                                <div>{payment.email}</div>
                                            </td>
                                            <td>
                                                <div>$ {payment.price}</div>
                                            </td>
                                            <td>
                                                $ {payment.transactionId}
                                            </td>
                                            <td>
                                                $ {payment.status}
                                            </td>
                                            <td>
                                                $ {payment.date}
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClass;