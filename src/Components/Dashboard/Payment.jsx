import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxios from "../../Hooks/useAxios";
import { useEffect, useState } from "react";

const Payment = ({ price }) => {
    console.log(price);
    const stripe = useStripe();
    const elements = useElements();
    const [AXIOS] = useAxios();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false)

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
                    <button className="btn bg-orange-500 w-14 h-10 hover:bg-orange-800 text-white border-none flex mt-10" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Payment;