import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxios from "../../Hooks/useAxios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

const Payment = ({ selectedclasses, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [AXIOS] = useAxios();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (price > 0) {
            AXIOS.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                });
        }
    }, [price, AXIOS])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true);
        const { paymentIntent, error: cofirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'Anonymous User',
                        name: user?.displayName || 'Anonymous User',
                    },
                },
            },
        );
        if (cofirmError) {
            console.log(cofirmError);
        }
        console.log(paymentIntent);
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentMethod.id)
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: selectedclasses.length,
                status: 'Payment Confirmed! Service Pending....',
                class: selectedclasses.map(selectedClass => selectedClass._id),
                classId: selectedclasses.map(selectedClass => selectedClass.classId),
                className: selectedclasses.map(selectedClass => selectedClass.name),
                classImage: selectedclasses.map(selectedClass => selectedClass.image)
            }

            AXIOS.post('/payment', payment)
                .then(res => {
                    if (res.data.result.insertedId) {
                        Swal.fire({
                            title: 'Payment Successfull',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                    }
                    navigate('/dashboard/enrolledclass')
                })
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <motion.div className="box"
                        whileHover={{ scale: .9 }}
                        whileTap={{ scale: .9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                        <button className="btn bg-orange-500 w-14 h-10 hover:bg-orange-800 text-white border-none flex mt-10" type="submit" disabled={!stripe || !clientSecret || processing}>
                            Pay
                        </button>
                    </motion.div>
                    {
                        transactionId && <p className="text-green-600">Transaction Completed!! TransactionId: {transactionId}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default Payment;