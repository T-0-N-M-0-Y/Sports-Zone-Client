import usePaymentInfo from "../../Hooks/usePaymentInfo";


const PaymentHistory = () => {

    const [payments] = usePaymentInfo()
    console.log(payments);

    return (
        <div className="w-full">
            <h1 className="text-center text-4xl font-bold mt-10 mb-20">Payment History</h1>
            <div>
                <div>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Classes</th>
                                <th>Email</th>
                                <th>Amount</th>
                                <th>transactionId</th>
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
    );
};

export default PaymentHistory;