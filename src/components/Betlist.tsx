"use client"

import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const BetList = () => {

    const datas = [true, true, false, false, true, true, false, false, true, true, false, false];
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div>
            <div className="flex gap-5 flex-wrap justify-between mt-[32px]">
                {datas.map((data, index) => (
                    data ? (
                        <div className="flex-1 bg-[linear-gradient(107.7deg,rgba(0,0,0,0)_37.9%,rgba(96,4,213,0.2)_113.22%),linear-gradient(248.12deg,rgba(24,20,32,0)_35.67%,#292929_101.76%)] rounded-lg pt-5 min-w-[350px]" key={index}>
                            <div className="flex items-center gap-3 px-5">
                                <img src="/assets/img/bet.png" alt="" />
                                <p className="text-sm text-[#FFFFFF]">Presidential Election Winner 2024</p>
                            </div>
                            <div className="flex flex-col gap-1 mt-4 h-[75px] overflow-y-scroll hide-scroll px-5">
                                <div className="flex justify-between">
                                    <p className="text-sm text-white font-medium">Kamala Haris</p>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-sm text-white font-medium">50%</p>
                                        <button className="text-[#BFF816] text-xs font-medium bg-[rgba(54,178,8,0.2)] rounded-md px-2 py-1">Yes</button>
                                        <button className="text-red text-xs font-medium bg-[rgba(255,0,0,0.1)] rounded-lg px-2 py-1">No</button>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-sm text-white font-medium">Kamala Haris</p>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-sm text-white font-medium">50%</p>
                                        <button className="text-[#BFF816] text-xs font-medium bg-[rgba(54,178,8,0.2)] rounded-md px-2 py-1">Yes</button>
                                        <button className="text-red text-xs font-medium bg-[rgba(255,0,0,0.1)] rounded-lg px-2 py-1">No</button>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-sm text-white font-medium">Kamala Haris</p>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-sm text-white font-medium">50%</p>
                                        <button className="text-[#BFF816] text-xs font-medium bg-[rgba(54,178,8,0.2)] rounded-md px-2 py-1">Yes</button>
                                        <button className="text-red text-xs font-medium bg-[rgba(255,0,0,0.1)] rounded-lg px-2 py-1">No</button>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-sm text-white font-medium">Kamala Haris</p>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-sm text-white font-medium">50%</p>
                                        <button className="text-[#BFF816] text-xs font-medium bg-[rgba(54,178,8,0.2)] rounded-md px-2 py-1">Yes</button>
                                        <button className="text-red text-xs font-medium bg-[rgba(255,0,0,0.1)] rounded-lg px-2 py-1">No</button>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-sm text-white font-medium">Kamala Haris</p>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-sm text-white font-medium">50%</p>
                                        <button className="text-[#BFF816] text-xs font-medium bg-[rgba(54,178,8,0.2)] rounded-md px-2 py-1">Yes</button>
                                        <button className="text-red text-xs font-medium bg-[rgba(255,0,0,0.1)] rounded-lg px-2 py-1">No</button>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-sm text-white font-medium">Kamala Haris</p>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-sm text-white font-medium">50%</p>
                                        <button className="text-[#BFF816] text-xs font-medium bg-[rgba(54,178,8,0.2)] rounded-md px-2 py-1">Yes</button>
                                        <button className="text-red text-xs font-medium bg-[rgba(255,0,0,0.1)] rounded-lg px-2 py-1">No</button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between px-5 py-2 bg-[linear-gradient(0deg,rgba(35,34,36,0.8),rgba(35,34,36,0.8)),linear-gradient(248.12deg,rgba(24,20,32,0)_35.67%,#292929_101.76%),linear-gradient(106.24deg,rgba(0,0,0,0)_38.72%,rgba(96,4,213,0.5)_104.16%)] rounded-b-lg">
                                <div className="flex gap-2">
                                    <img src="/assets/img/icons/pin.svg" alt="" />
                                    <p className="text-sm text-white">$1.1b Vol.</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="/assets/img/icons/present.svg" alt="" />
                                    <img src="/assets/img/icons/msg.svg" alt="" />
                                    <p className="text-sm text-white">103,204</p>
                                    <img src="/assets/img/icons/star-blank.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 bg-[linear-gradient(107.7deg,rgba(0,0,0,0)_37.9%,rgba(96,4,213,0.2)_113.22%),linear-gradient(248.12deg,rgba(24,20,32,0)_35.67%,#292929_101.76%)] rounded-lg pt-5 min-w-[350px]" key={index}>
                            <div className="flex items-start gap-3 px-5">
                                <img src="/assets/img/bet.png" alt="" />
                                <p className="text-sm text-[#FFFFFF]">Will Israel invade Lebanon before November?</p>
                                <ProgressBar val={100} />
                            </div>
                            <div className="flex items-end gap-1 mt-4 h-[50px] overflow-y-scroll hide-scroll px-5 py-1">
                                <button className="flex justify-center items-center gap-1 bg-[rgba(54,178,8,0.2)] rounded-lg px-2 py-2 flex-1">
                                    <p className="text-[#BFF816] text-sm font-medium">Bet Yes</p>
                                    <img src="/assets/img/icons/arrow-double-top.svg" alt="" />
                                </button>
                                <button className="flex justify-center items-center gap-1 bg-[rgba(255,0,0,0.1)] rounded-lg px-2 py-2 flex-1">
                                    <p className="text-red text-sm font-medium">Bet No</p>
                                    <img src="/assets/img/icons/arrow-double-down.svg" alt="" />
                                </button>
                            </div>
                            <div className="flex justify-between px-5 py-2 bg-[linear-gradient(0deg,rgba(35,34,36,0.8),rgba(35,34,36,0.8)),linear-gradient(248.12deg,rgba(24,20,32,0)_35.67%,#292929_101.76%),linear-gradient(106.24deg,rgba(0,0,0,0)_38.72%,rgba(96,4,213,0.5)_104.16%)] rounded-b-lg">
                                <div className="flex gap-2">
                                    <img src="/assets/img/icons/pin.svg" alt="" />
                                    <p className="text-sm text-white">$1.1b Vol.</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="/assets/img/icons/present.svg" alt="" />
                                    <img src="/assets/img/icons/msg.svg" alt="" />
                                    <p className="text-sm text-white">103,204</p>
                                    <img src="/assets/img/icons/star-blank.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>

            <div className="pt-[30px] text-center">
                <button type="button" className="px-[24px] py-[12px] text-xl text-[#B3B3B3] border gradiant-btn rounded-lg font-semibold">
                    View All
                </button>
            </div>
        </div>
    )
}

export default BetList;