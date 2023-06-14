import { Helmet } from "react-helmet-async";
import usePaymentInfo from "../../Hooks/usePaymentInfo";

const EnrolledClass = () => {

    const [payments] = usePaymentInfo()
    console.log(payments);

    return (
        <div className="w-full">
            <Helmet>
                <title>Sports Zone | Enrolled Class</title>
            </Helmet>

            <div className="w-full">
                <h1 className="text-center text-4xl font-bold mt-10 mb-20">Enrolled Classes</h1>
                <div>
                    <div>
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Classes</th>
                                    <th>Status</th>
                                    <th>date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    payments.map((payment) =>
                                        <tr key={payment._id}>
                                            <td>
                                                <div>{payment.className[0]}</div>
                                                <div>{payment.className[1]}</div>
                                                <div>{payment.className[2]}</div>
                                                <div>{payment.className[3]}</div>
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