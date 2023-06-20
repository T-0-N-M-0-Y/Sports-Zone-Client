import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const Banner = () => {

    return (
        <>
            <div className="carousel md:w-full h-96 md:h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://cdn.firstcry.com/education/2022/04/24114827/1026630514.jpg" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❮</a>
                        <p className="md:text-5xl text-xs md:font-bold text-white bg-black p-2 md:p-5 bg-opacity-40">Enjoy Your Summer With Sports!!! <br /> Winning isn’t everything, but wanting is!!! <br />

                            <motion.div className="box"
                                whileHover={{ scale: .9 }}
                                whileTap={{ scale: .9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 40 }} >
                                <Link to={'/classes'}><button className="bg-gradient-to-r from-slate-800 to-orange-800 text-white border-none mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32">Enroll Now</button></Link>
                            </motion.div>

                        </p>
                        <a href="#slide2" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.unesco.org/sites/default/files/shutterstock_599738306.jpg" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❮</a>
                        <p className="md:text-5xl text-xs md:font-bold text-white bg-black p-2 md:p-5 bg-opacity-40">Heading to the top!!! <br /> Pain is temporary. Victory is forever.!!! <br />
                            <motion.div className="box"
                                whileHover={{ scale: .9 }}
                                whileTap={{ scale: .9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 40 }} >
                                <Link to={'/classes'}><button className="bg-gradient-to-r from-slate-800 to-orange-800 text-white border-none mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32">Enroll Now</button></Link>
                            </motion.div>
                        </p>
                        <a href="#slide3" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://live-production.wcms.abc-cdn.net.au/7236af9487a73ebb646bac7269457feb?impolicy=wcms_crop_resize&cropH=1080&cropW=1918&xPos=1&yPos=0&width=862&height=485" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❮</a>
                        <p className="md:text-5xl text-xs md:font-bold text-white bg-black p-2 md:p-5 bg-opacity-40">You develop your skills as you beat hours and hours of practice.!!! <br /> Taking your game to the next level!!! <br />
                            <motion.div className="box"
                                whileHover={{ scale: .9 }}
                                whileTap={{ scale: .9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 40 }} >
                                <Link to={'/classes'}><button className="bg-gradient-to-r from-slate-800 to-orange-800 text-white border-none mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32">Enroll Now</button></Link>
                            </motion.div>
                        </p>
                        <a href="#slide4" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://www.brampton.ca/EN/residents/Recreation/PublishingImages/AnnouncementImages/1903_SportsDayImage.jpg" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❮</a>
                        <p className="md:text-5xl text-xs md:font-bold text-white bg-black p-2 md:p-5 bg-opacity-40">Unleash the best athlete in you!!! <br /> Never doubt yourself!!! <br />
                            <motion.div className="box"
                                whileHover={{ scale: .9 }}
                                whileTap={{ scale: .9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 40 }} >
                                <Link to={'/classes'}><button className="bg-gradient-to-r from-slate-800 to-orange-800 text-white border-none mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32">Enroll Now</button></Link>
                            </motion.div>
                        </p>
                        <a href="#slide1" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;