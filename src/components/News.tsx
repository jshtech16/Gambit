import localFont from "next/font/local";

const integralCF = localFont({
    src: '../app/fonts/Integral-CF/Demo_Fonts/Fontspring-DEMO-integralcf-regular.otf',
    weight: '400, 700',
})

const News = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-[40px] xl:gap-[50px] py-[40px] xl:py-[50px] px-0 xl:px-3">
            <div className="flex-1">
                <div className="flex justify-between">
                    <p className={`text-base xl:text-2xl text-white ${integralCF.className}`}>RECENT ACTIVITY</p>
                    <div>
                        <p className="text-[8px] xl:text-base text-white border rounded-lg px-2 py-1 cursor-pointer">See All</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px] pt-[40px]">
                    {
                        [0, 0, 0, 0, 0].map((ele, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <img src="/assets/img/bet.png" alt="" className="w-[30px] xl:w-[50px] h-[30px] xl:h-[50px]" />
                                            <div>
                                                <p className="text-[10px] xl:text-base text-[#A9A7B9]">Will Kamala Harris win the 2024 US Presidential Election?</p>
                                                <div className="hidden xl:flex gap-2">
                                                    <img src="/assets/img/bet.png" alt="" className="w-[20px] h-[20px]" />
                                                    <p className="text-[10px] xl:text-base text-[#545454]">0x798a98e91184CD... bought Yes at 50¢ ($4,207)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm xl:text-base text-[#535353] min-w-[60px] xl:min-w-[70px]">52s ago</p>
                                </div>
                                <div className="flex xl:hidden gap-2 pt-1 ps-2">
                                    <img src="/assets/img/bet.png" alt="" className="w-[14px] h-[14px]" />
                                    <p className="text-[10px] xl:text-base text-[#545454]">0x798a98e91184CD... bought Yes at 50¢ ($4,207)</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex-1">
                <div className="flex justify-between">
                    <p className={`text-base xl:text-2xl text-white ${integralCF.className}`}>TOP VOLUME THIS WEEK</p>
                    <div>
                        <p className="text-[8px] xl:text-base text-white border rounded-lg px-2 py-1 cursor-pointer">See All</p>
                    </div>
                </div>
                <div className="flex gap-1 pt-[40px]">
                    {
                        [0, 0].map((ele, idx) => (
                            <div className="flex flex-col gap-[30px] flex-1 w-[50%]" key={idx}>
                                {
                                    [0, 0, 0, 0, 0].map((element, jdx) => (
                                        <div className="flex items-center gap-2 relative">
                                            <img src="/assets/img/bet.png" alt="" className="w-[30px] xl:w-[50px] h-[30px] xl:h-[50px] " />
                                            <div className="w-[calc(100% - 38px)]" style={{width: 'calc(100% - 38px)'}}>
                                                <p className="text-sm xl:text-base text-white break-words w-100">ImplausibleOutcome</p>
                                                <p className="text-xs xl:text-base text-[#545454]">$7,633,011</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default News;