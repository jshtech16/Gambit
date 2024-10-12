const LeaderBoard = () => {
    return (
        <div className="bg-white dark:bg-black px-[20px] py-[60px] flex items-center flex-col ">
            <div className="w-full max-w-[1100px] flex flex-col items-center">
                <p className="text-4xl text-white font-integralcf">LEADERBOARD</p>
                <div className="pt-[40px] flex gap-[10px]">
                    <button className="text-base font-medium text-white px-3 py-[6px] border border-[#545454] rounded-lg hover:bg-white hover:text-black">Day</button>
                    <button className="text-base font-medium text-white px-3 py-[6px] border border-[#545454] rounded-lg hover:bg-white hover:text-black">Week</button>
                    <button className="text-base font-medium text-white px-3 py-[6px] border border-[#545454] rounded-lg hover:bg-white hover:text-black">Month</button>
                    <button className="text-base font-medium text-white px-3 py-[6px] border border-[#545454] rounded-lg hover:bg-white hover:text-black">All</button>
                </div>
                <div className="pt-[30px] flex gap-[10px]">
                    <img src="/assets/img/icons/clock.svg" alt="" />
                    <p className="text-base font-medium text-[#545454]">Resets in 5h 27m 33s</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-5 w-full pt-[30px] lg:pt-[48px]">
                    <div className="bg-none lg:bg-[linear-gradient(100.7deg,_rgba(0,0,0,0)_37.9%,_rgba(96,4,213,0.5)_203.22%),linear-gradient(248.12deg,_rgba(24,20,32,0)_35.67%,_#292929_101.76%)] px-0 lg:px-[50px] py-0 lg:py-[46px] flex-1 border-t-none lg:border-t border-[#505050]">
                        <div className="flex items-center justify-center lg:justify-start gap-[10px] xl:gap-[18px]">
                            <img src="/assets/img/icons/chart.svg" alt="" className="h-[16px] xl:h-[28px]" />
                            <p className="text-base xl:text-4xl font-integralcf text-white">VOLUME</p>
                        </div>
                        <div className="flex flex-col gap-[20px] pt-[25px]">
                            {
                                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((ele, idx) => (
                                    <div className="flex justify-between items-center gap-[10px]" key={idx}>
                                        <div className="flex items-center gap-[10px]">
                                            <div className="relative">
                                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="w-[43px] xl:w-[50px] h-[43px] xl:h-[50px] rounded-full" />
                                            <div className="absolute top-0 right-[0px] bg-[#202020] w-[14px] h-[14px] text-white text-[10px] font-medium flex justify-center items-center rounded-full leading-[10px]">{idx + 1}</div>
                                            </div>
                                            <p className="text-base xl:text-xl text-white font-medium break-words w-[calc(100%-53px)] xl:w-[calc(100%-60px)]">ImplausibleOutcome</p>
                                        </div>
                                        <p className="text-sm xl:text-base text-[#545454]">$7,633,011</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="bg-none lg:bg-[linear-gradient(280.7deg,_rgba(0,0,0,0)_37.9%,_rgba(96,4,213,0.5)_203.22%),linear-gradient(68.12deg,_rgba(24,20,32,0)_35.67%,_#292929_101.76%)] px-0 lg:px-[50px] py-0 lg:py-[46px] flex-1 border-t-none lg:border-t border-[#505050]">
                        <div className="flex items-center justify-center lg:justify-start gap-[10px] xl:gap-[18px]">
                            <img src="/assets/img/icons/profit.svg" alt="" className="h-[16px] xl:h-[28px]" />
                            <p className="text-base xl:text-4xl font-integralcf text-white">PROFIT</p>
                        </div>
                        <div className="flex flex-col gap-[20px] pt-[25px]">
                            {
                                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((ele, idx) => (
                                    <div className="flex justify-between items-center gap-[10px]" key={idx}>
                                        <div className="flex items-center gap-[10px]">
                                            <div className="relative">
                                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="w-[43px] xl:w-[50px] h-[43px] xl:h-[50px] rounded-full" />
                                            <div className="absolute top-0 right-[0px] bg-[#202020] w-[14px] h-[14px] text-white text-[10px] font-medium flex justify-center items-center rounded-full leading-[10px]">{idx + 1}</div>
                                            </div>
                                            <p className="text-base xl:text-xl text-white font-medium break-words w-[calc(100%-53px)] xl:w-[calc(100%-60px)]">ImplausibleOutcome</p>
                                        </div>
                                        <p className="text-sm xl:text-base text-[#545454]">$7,633,011</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderBoard;