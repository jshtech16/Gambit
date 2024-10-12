const Activity = () => {
    return (
        <div className="bg-white dark:bg-black px-[20px] py-[60px] flex justify-center">
            <div className="w-full max-w-[1100px]">
                <div className="flex justify-between">
                    <p className="text-base xl:text-2xl text-white font-integralcf">RECENT ACTIVITY</p>
                    <div>
                        <p className="text-[8px] xl:text-base text-white border rounded-lg px-2 py-1 cursor-pointer">Min Amount</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px] pt-[40px]">
                    {
                        [0, 0, 0, 0, 0,0,0,0,0,0].map((ele, idx) => (
                            <div key={idx} className="pb-[30px] border-b border-[rgba(256,256,256,0.3)]">
                                <div className="flex justify-between items-center gap-[30px]">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <img src="/assets/img/bet.png" alt="" className="w-[30px] xl:w-[50px] h-[30px] xl:h-[50px]" />
                                            <div>
                                                <p className="text-[10px] xl:text-base text-[#A9A7B9]">Will Trump mention $MAGA before Election?</p>
                                                <div className="flex gap-2">
                                                    <img src="/assets/img/bet.png" alt="" className="w-[20px] h-[20px]" />
                                                    <p className="text-[10px] xl:text-base text-[#545454]">0x798a98e91184CD... bought Yes at 50¢ ($4,207)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm xl:text-base text-[#535353] min-w-[60px] xl:min-w-[70px]">52s ago</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full text-center">
                    <button className="mt-[40px] px-[30px] py-[14px] rounded-lg bg-[linear-gradient(122deg,#404040_-4.93%,#101500_96.35%)] text-white">See More</button>
                </div>
            </div>
        </div>
    )
}

export default Activity;