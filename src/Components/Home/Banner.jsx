const Banner = () => {

    return (
        <>
            <div className="carousel w-full h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://cdn.firstcry.com/education/2022/04/24114827/1026630514.jpg" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle hover:bg-orange-500">❮</a>
                        <p className="text-3xl font-bold text-white">Enjoy Your Summar With Sports!!! <br /> Winning isn’t everything, but wanting it is</p>
                        <a href="#slide2" className="btn btn-circle hover:bg-orange-500">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.unesco.org/sites/default/files/shutterstock_599738306.jpg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle hover:bg-orange-500">❮</a>
                        <p className="text-3xl font-bold text-white">Enjoy Your Summar With Sports!!! <br /> Winning isn’t everything, but wanting it is</p>
                        <a href="#slide3" className="btn btn-circle hover:bg-orange-500">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://live-production.wcms.abc-cdn.net.au/7236af9487a73ebb646bac7269457feb?impolicy=wcms_crop_resize&cropH=1080&cropW=1918&xPos=1&yPos=0&width=862&height=485" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle hover:bg-orange-500">❮</a>
                        <p className="text-3xl font-bold text-white">Enjoy Your Summar With Sports!!! <br /> Winning isn’t everything, but wanting it is</p>
                        <a href="#slide4" className="btn btn-circle hover:bg-orange-500">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://www.brampton.ca/EN/residents/Recreation/PublishingImages/AnnouncementImages/1903_SportsDayImage.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle hover:bg-orange-500">❮</a>
                        <p className="text-3xl font-bold text-white">Enjoy Your Summar With Sports!!! <br /> Winning isn’t everything, but wanting it is</p>
                        <a href="#slide1" className="btn btn-circle hover:bg-orange-500">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;