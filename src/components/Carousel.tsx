const Carousel = () => {
    return (
        <div className="flex justify-center gap-5 pt-6">
            <div className="relative flex-1 max-w-[370px] bg-[linear-gradient(135deg,_#BFF816_-100%,_#2B2B2B_50%,_#6C3DB8_200%)] rounded-lg flex flex-col items-center justify-center px-5 py-3">
                <p className="text-white font-medium w-[50%] text-center">2024 ELECTIONS FORECAST</p>
                <button className="text-white bg-[rgba(217,217,217,0.1)] rounded-full px-2 py-1 mt-4">View</button>
                <img src="/assets/img/carousel_1.png" alt="" className="absolute left-0 bottom-0"></img>
                <img src="/assets/img/carousel_2.png" alt="" className="absolute right-0 bottom-0"></img>
            </div>

            <div className="relative flex-1 max-w-[370px] bg-[linear-gradient(135deg,_#6C3DB8_-100%,_#2B2B2B_50%,_#BFF816_200%)] rounded-lg flex flex-col items-center justify-center px-5 py-3">
                <p className="text-white font-medium w-[50%] text-center">2024 PRESIDENTIAL ELECTION</p>
                <button className="text-white bg-[rgba(217,217,217,0.1)] rounded-full px-2 py-1 mt-4">Bet Now</button>
                <img src="/assets/img/carousel_3.png" alt="" className="absolute left-0 bottom-0"></img>
                <img src="/assets/img/carousel_4.png" alt="" className="absolute right-0 bottom-0"></img>
            </div>

            <div className="flex-1 max-w-[370px] bg-[linear-gradient(135deg,_#BFF816_-100%,_#2B2B2B_50%,_#6C3DB8_200%)] flex justify-center items-center px-5 py-3 rounded-lg">
                <div>
                    <p className="text-white font-medium mb-0" style={{ lineHeight: "16px" }}>TRADE ELECTIONS</p>
                    <p className="text-white text-xs mb-0 mt-1">Add funds to start trading today</p>
                    <button className="text-white bg-[rgba(217,217,217,0.1)] rounded-full px-2 py-1 mt-3">Sign up</button>
                </div>
                <img src="/assets/img/trade election.png" alt="" />
            </div>
            
            <div className="flex-1 max-w-[370px] bg-[linear-gradient(135deg,_#6C3DB8_-50%,_#4E4E4E_100%)] rounded-lg flex justify-center items-center gap-3 px-5 py-3">
                <div className="h-full pt-7">
                    <p className="text-white font-medium mb-0" style={{ lineHeight: "16px" }}>U.S.RECESSION IN 2024</p>
                    <button className="text-white bg-[rgba(217,217,217,0.1)] rounded-full px-2 py-1 mt-5">Bet Now</button>
                </div>
                <img src="/assets/img/recession.png" alt="" />
            </div>
        </div>
    )
}

export default Carousel;