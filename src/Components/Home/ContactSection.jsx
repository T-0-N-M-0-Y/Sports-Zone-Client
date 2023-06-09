import { FaArrowsAltH, FaFacebook, FaInstagram, FaLocationArrow, FaStopwatch, FaTwitter, } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactSection = () => {

    return (
        <div>
            <div className="hero h-full bg-orange-500 text-white py-10 my-20">
                <div className="hero-content">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold">Contact Us</h1>
                        <p className="py-6">Sports Zone prides itself on being one of the best venues at which to host a event.</p>
                        <div className="flex items-center justify-between">
                            <div>
                                <FaLocationArrow></FaLocationArrow>
                                <h1>Location</h1>
                                <p>
                                    House No. 123, <br /> Road No. 45
                                    Gulshan-2, <br /> Dhaka-1212
                                    Bangladesh
                                </p>
                            </div>
                            <div>
                                <FaStopwatch></FaStopwatch>
                                <h1>Hours</h1>
                                <p>Mon-Wed: 8am–10pm <br />
                                    Thursday: 8am–9pm <br />
                                    Sunday: 8am–5pm</p>
                            </div>
                            <div>
                                <FaArrowsAltH></FaArrowsAltH>
                                <h1>Social</h1>
                                <p>
                                    <Link className="flex items-center"><FaFacebook className="mr-2"></FaFacebook> Facebook</Link> <br />
                                    <Link className="flex items-center"><FaTwitter className="mr-2"></FaTwitter> Twitter</Link><br />
                                    <Link className="flex items-center"><FaInstagram className="mr-2"></FaInstagram> Instagram</Link>
                                </p>
                            </div>
                        </div>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;