const SlickTabs = () => {

    const topics = ['New', 'Breaking News', 'US Elections', 'VIP Debate', 'Hezbullah', 'Mention Markets', 'Middle East', 'Swing States', 'Kamala', 'Senate Races', 'House Races', 'Eric Adams', 'Trump Trials', 'Hunter Biden', 'Ukraine',]

    return (
        <div className="flex gap-3 w-full mt-5 overflow-x-scroll hide-scroll">
            <button className="text-white bg-[#6C3DB8] rounded-xl px-[24px] py-2 flex justify-center items-center gap-2 text-xs xl:text-xl font-medium">
                <img src="/assets/img/icons/top.svg" alt="" />Top
            </button>
            <button className="text-white bg-[rgba(217,217,217,0.1)] rounded-xl px-[24px] py-2 flex justify-center items-center gap-2 whitespace-nowrap text-xs xl:text-xl font-medium">
                <img src="/assets/img/icons/stars.svg" alt="" />For You
            </button>
            {
                topics.map((ele, idx) => (
                    <button className="text-white bg-[rgba(217,217,217,0.1)] rounded-xl px-[14px] py-1 whitespace-nowrap text-xs xl:text-xl font-medium" key={idx}>{ele}</button>
                ))
            }
        </div>
    )
}

export default SlickTabs;