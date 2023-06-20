import formatDate from "../../DateFormat/formatDate";
import usePayments from "../../Hooks/usePayments";

const PaymentHistory = () => {

    const [payments] = usePayments()

    return (
        <div className="w-full">
            <h1 className="text-center text-4xl font-bold mt-10 mb-20">Payment History</h1>
            <div>
                <div>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Classes</th>
                                <th>Amount</th>
                                <th>transactionId</th>
                                <th>date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                payments.map((payment) =>
                                    <tr key={payment._id}>
                                        <td>
                                            <div>{payment.className.map((classsName, index) =>
                                                <div key={index}>
                                                    {classsName}
                                                </div>
                                            )}</div>
                                        </td>
                                        <td>
                                            <div>$ {payment.price}</div>
                                        </td>
                                        <td>
                                            {payment.transactionId}
                                        </td>
                                        <td>
                                            {formatDate(payment.date)}
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

export default PaymentHistory;