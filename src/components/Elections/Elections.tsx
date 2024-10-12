import ElectionsForecast from "./ElectionsForecast";
import ElectionsMap from "./ElectionsMap";
import ElectionsPopularVS from "./ElectionsPopularVS";
import ElectionsSwingState from "./ElectionsSwingState";
import ElectionsTrending from "./ElectionsTreding";
import ElectionsVS from "./ElectionsVS";

const Elections = () => {
    return (
        <div className="bg-white dark:bg-black px-[20px] py-[30px] lg:py-[60px] flex items-center flex-col ">
            <div className="w-full max-w-[1100px]">
                <ElectionsForecast />
                <div className="pt-[20px] lg:pt-[30px] pb-[10px] lg:pb-[20px] w-full border-b border-white">
                    <div className="flex justify-between w-full">
                        <div className="flex gap-[20px]">
                            <p className="text-[10px] lg:text-xl text-white">Presidency</p>
                            <p className="text-[10px] lg:text-xl text-[#A9A7B9]">Senate</p>
                        </div>
                        <div className="flex items-center gap-[20px]">
                            <div className="flex gap-[10px] items-center">
                                <img src="/assets/img/icons/twitter.png" alt="" className="w-[8px] lg:w-[14px] h-[8px] lg:h-[14px]" />
                                <p className="text-[10px] lg:text-xl text-[#A9A7B9]">Share</p>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <img src="/assets/img/icons/arrow-left-right.svg" alt="" className="h-[8px] lg:h-[14px]" />
                                <p className="text-[10px] lg:text-xl text-[#A9A7B9]">Embed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ElectionsVS />
                <ElectionsMap />
                <ElectionsSwingState />
                <ElectionsPopularVS />
                <ElectionsTrending />
            </div>
        </div>
    )
}

export default Elections;