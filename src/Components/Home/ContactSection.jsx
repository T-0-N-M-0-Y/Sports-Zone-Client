import { FaArrowsAltH, FaFacebook, FaInstagram, FaLocationArrow, FaStopwatch, FaTwitter, } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactSection = () => {

    return (
        <div>
            <div className="hero w-full h-full bg-gradient-to-r from-slate-800 to-orange-800 text-white py-10 md:my-20">
                <div className="hero-content">
                    <div className="max-w-2xl">
                        <h1 className="md:text-5xl text-2xl font-bold">Contact Us</h1>
                        <p className="py-6">Sports Zone prides itself on being one of the best venues at which to host a event.</p>
                        <div className="md:flex items-center justify-between">
                            <div>
                                <FaLocationArrow className="mt-5"></FaLocationArrow>
                                <h1 className="font-bold text-lg my-2">Location</h1>
                                <p>
                                    House No. 123, <br /> Road No. 45
                                    Gulshan-2, <br /> Dhaka-1212
                                    Bangladesh
                                </p>
                            </div>
                            <div>
                                <FaStopwatch className="mt-5"></FaStopwatch>
                                <h1 className="font-bold text-lg my-2">Hours</h1>
                                <p>Mon-Wed: 8am–10pm <br />
                                    Thursday: 8am–9pm <br />
                                    Sunday: 8am–5pm</p>
                            </div>
                            <div>
                                <FaArrowsAltH className="mt-5"></FaArrowsAltH>
                                <h1 className="font-bold text-lg my-2">Social</h1>
                                <p>
                                    <Link className="flex items-center"><FaFacebook className="mr-2"></FaFacebook> Facebook</Link> 
                                    <Link className="flex items-center"><FaTwitter className="mr-2"></FaTwitter> Twitter</Link>
                                    <Link className="flex items-center"><FaInstagram className="mr-2"></FaInstagram> Instagram</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;