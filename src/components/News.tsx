import localFont from "next/font/local";

const integralCF = localFont({
    src: '../app/fonts/Integral-CF/Demo_Fonts/Fontspring-DEMO-integralcf-regular.otf',
    weight: '400, 700',
})

const News = () => {
    return (
        <div className="flex gap-[50px] py-[50px] px-3">
            <div className="flex-1">
                <div className="flex justify-between">
                    <p className={`text-2xl text-white ${integralCF.className}`}>RECENT ACTIVITY</p>
                    <div>
                        <p className="text-base text-white border rounded-lg px-2 py-1 cursor-pointer">See All</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px] pt-[40px]">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/bet.png" alt="" />
                            <div>
                                <p className="text-base text-[#A9A7B9]">Will Kamala Harris win the 2024 US Presidential Election?</p>
                                <div className="flex gap-2">
                                    <img src="/assets/img/bet.png" alt="" className="w-[20px] h-[20px]" />
                                    <p className="text-base text-[#545454]">0x798a98e91184CD... bought Yes at 50¢ ($4,207)</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-base text-[#535353]">52s ago</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/bet.png" alt="" />
                            <div>
                                <p className="text-base text-[#A9A7B9]">Will Kamala Harris win the 2024 US Presidential Election?</p>
                                <div className="flex gap-2">
                                    <img src="/assets/img/bet.png" alt="" className="w-[20px] h-[20px]" />
                                    <p className="text-base text-[#545454]">0x798a98e91184CD... bought Yes at 50¢ ($4,207)</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-base text-[#535353]">52s ago</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/bet.png" alt="" />
                            <div>
                                <p className="text-base text-[#A9A7B9]">Will Kamala Harris win the 2024 US Presidential Election?</p>
                                <div className="flex gap-2">
                                    <img src="/assets/img/bet.png" alt="" className="w-[20px] h-[20px]" />
                                    <p className="text-base text-[#545454]">0x798a98e91184CD... bought Yes at 50¢ ($4,207)</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-base text-[#535353]">52s ago</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/bet.png" alt="" />
                            <div>
                                <p className="text-base text-[#A9A7B9]">Will Kamala Harris win the 2024 US Presidential Election?</p>
                                <div className="flex gap-2">
                                    <img src="/assets/img/bet.png" alt="" className="w-[20px] h-[20px]" />
                                    <p className="text-base text-[#545454]">0x798a98e91184CD... bought Yes at 50¢ ($4,207)</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-base text-[#535353]">52s ago</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/bet.png" alt="" />
                            <div>
                                <p className="text-base text-[#A9A7B9]">Will Kamala Harris win the 2024 US Presidential Election?</p>
                                <div className="flex gap-2">
                                    <img src="/assets/img/bet.png" alt="" className="w-[20px] h-[20px]" />
                                    <p className="text-base text-[#545454]">0x798a98e91184CD... bought Yes at 50¢ ($4,207)</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-base text-[#535353]">52s ago</p>
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <div className="flex justify-between">
                    <p className={`text-2xl text-white ${integralCF.className}`}>TOP VOLUME THIS WEEK</p>
                    <div>
                        <p className="text-base text-white border rounded-lg px-2 py-1 cursor-pointer">See All</p>
                    </div>
                </div>
                <div className="flex gap-1 pt-[40px]">
                    <div className="flex flex-col gap-[30px] flex-1">
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/bet.png" alt="" />
                            <div>
                                <p className="text-base text-white">ImplausibleOutcome</p>
                                <p className="text-base text-[#545454]">$7,633,011</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/bet.png" alt="" />
                            <div>
                                <p className="text-base text-white">ImplausibleOutcome</p>
                                <p className="text-base text-[#545454]">$7,633,011</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/bet.png" alt="" />
                            <div>
                                <p className="text-base text-white">ImplausibleOutcome</p>
                                <p className="text-base text-[#545454]">$7,633,011</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/bet.png" alt="" />
                            <div>
                                <p className="text-base text-white">ImplausibleOutcome</p>
                                <p className="text-base text-[#545454]">$7,633,011</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/bet.png" alt="" />
                            <div>
                                <p className="text-base text-white">ImplausibleOutcome</p>
                                <p className="text-base text-[#545454]">$7,633,011</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[30px] flex-1">
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/bet.png" alt="" />
                            <div>
                                <p className="text-base text-white">ImplausibleOutcome</p>
                                <p className="text-base text-[#545454]">$7,633,011</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/bet.png" alt="" />
                            <div>
                                <p className="text-base text-white">ImplausibleOutcome</p>
                                <p className="text-base text-[#545454]">$7,633,011</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/bet.png" alt="" />
                            <div>
                                <p className="text-base text-white">ImplausibleOutcome</p>
                                <p className="text-base text-[#545454]">$7,633,011</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/bet.png" alt="" />
                            <div>
                                <p className="text-base text-white">ImplausibleOutcome</p>
                                <p className="text-base text-[#545454]">$7,633,011</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/bet.png" alt="" />
                            <div>
                                <p className="text-base text-white">ImplausibleOutcome</p>
                                <p className="text-base text-[#545454]">$7,633,011</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;