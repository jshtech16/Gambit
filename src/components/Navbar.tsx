"use client";

import { useEffect, useState } from "react";

const Navbar = () => {

    const [isopen, setIsopen] = useState(false);
    const [isMarketOpen, setIsMarketOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.add(storedTheme);
        } else {
            // Check system preference
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme = systemPrefersDark ? 'dark' : 'light';
            setTheme(initialTheme);
            document.documentElement.classList.add(initialTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <nav className="bg-black p-[30px] border-b">
            <div className="mx-auto">
                <div className="relative flex h-[40px] items-center justify-between">
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto" src="/assets/img/logo.png" alt="" />
                        </div>
                    </div>
                    <form className="flex-1 mx-auto px-5 h-full">
                        <div className="relative h-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-[#424242] dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="navbar-search" className="block w-full h-full ps-10 text-sm border border-[#424242] rounded-lg bg-black placeholder:text-[#424242] dark:placeholder:text-[#FFFFFF]" placeholder="Search Markets" required />
                        </div>
                    </form>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative py-2" onMouseLeave={() => setIsMarketOpen(false)}>
                            <div className="flex items-center flex-col gap-1 px-2 rounded-lg cursor-pointer hover:bg-[#252525] p-1"
                                onClick={() => setIsMarketOpen(!isMarketOpen)}
                                onMouseEnter={() => setIsMarketOpen(true)}
                            >
                                <img className="" src="/assets/img/icons/markets.svg" alt="" />
                                <p className="text-[#535353] font-medium mb-0" style={{ lineHeight: "16px" }}>Markets</p>
                            </div>
                            {
                                isMarketOpen && (
                                    <div className="absolute right-[-190px] z-10 bg-gradient-to-b from-[#0B0B0B] to-[#2A2A2A] rounded-lg w-[466px] mt-2 p-[20px] flex gap-[20px] flex-col" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" onMouseEnter={() => setIsMarketOpen(true)} onMouseLeave={() => setIsMarketOpen(false)}>
                                        <div className="flex justify-between items-end">
                                            <p className="text-white text-2xl cursor-pointer">Browse</p>
                                            <p className="text-success text-xl cursor-pointer">View all</p>
                                        </div>
                                        <div className="flex gap-[20px]">
                                            <div className="border border-white px-4 py-2 flex-1 rounded-lg flex items-center gap-4">
                                                <img src="/assets/img/icons/market-new.svg" alt="" />
                                                <p className="text-white font-medium cursor-pointer">New</p>
                                            </div>
                                            <div className="border border-white px-4 py-2 flex-1 rounded-lg flex items-center gap-4">
                                                <img src="/assets/img/icons/market-trending.svg" alt="" />
                                                <p className="text-white font-medium cursor-pointer">Trending</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-[20px]">
                                            <div className="border border-white px-4 py-2 flex-1 rounded-lg flex items-center gap-4">
                                                <img src="/assets/img/icons/market-liquid.svg" alt="" />
                                                <p className="text-white font-medium cursor-pointer">Liquid</p>
                                            </div>
                                            <div className="border border-white px-4 py-2 flex-1 rounded-lg flex items-center gap-4">
                                                <img src="/assets/img/icons/market-ending.svg" alt="" />
                                                <p className="text-white font-medium cursor-pointer">Ending Soon</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <p className="text-white text-2xl cursor-pointer">Topics</p>
                                        </div>
                                        <div className="flex gap-[20px]">
                                            <div className="border border-white px-4 py-2 flex-1 rounded-lg flex items-center gap-4">
                                                <img src="/assets/img/icons/middle-east.png" alt="" />
                                                <p className="text-white font-medium cursor-pointer">Middle East</p>
                                            </div>
                                            <div className="border border-white px-4 py-2 flex-1 rounded-lg flex items-center gap-4">
                                                <img src="/assets/img/icons/politics.png" alt="" />
                                                <p className="text-white font-medium cursor-pointer">Politics</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-[20px]">
                                            <div className="border border-white px-4 py-2 flex-1 rounded-lg flex items-center gap-4">
                                                <img src="/assets/img/icons/crypto.png" alt="" />
                                                <p className="text-white font-medium cursor-pointer">Crypto</p>
                                            </div>
                                            <div className="border border-white px-4 py-2 flex-1 rounded-lg flex items-center gap-4">
                                                <img src="/assets/img/icons/sports.png" alt="" />
                                                <p className="text-white font-medium cursor-pointer">Sports</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-[20px]">
                                            <div className="border border-white px-4 py-2 flex-1 rounded-lg flex items-center gap-4">
                                                <img src="/assets/img/icons/pop culture.png" alt="" />
                                                <p className="text-white font-medium cursor-pointer">Pop Culture</p>
                                            </div>
                                            <div className="border border-white px-4 py-2 flex-1 rounded-lg flex items-center gap-4">
                                                <img src="/assets/img/icons/science.png" alt="" />
                                                <p className="text-white font-medium cursor-pointer">Science</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="flex items-center flex-col gap-1 px-2 rounded-lg cursor-pointer hover:bg-[#252525] p-1">
                            <img className="" src="/assets/img/icons/elections.svg" alt="" />
                            <p className="text-[#535353] font-medium mb-0" style={{ lineHeight: "16px" }}>Elections</p>
                        </div>
                        <div className="flex items-center flex-col gap-1 px-2 rounded-lg cursor-pointer hover:bg-[#252525] p-1">
                            <img className="" src="/assets/img/icons/activity.svg" alt="" />
                            <p className="text-[#535353] font-medium mb-0" style={{ lineHeight: "16px" }}>Activity</p>
                        </div>
                        <div className="flex items-center flex-col gap-1 px-2 rounded-lg cursor-pointer hover:bg-[#252525] p-1">
                            <img className="" src="/assets/img/icons/ranks.svg" alt="" />
                            <p className="text-[#535353] font-medium mb-0" style={{ lineHeight: "16px" }}>Ranks</p>
                        </div>

                        {
                            isLogin ?
                                (
                                    <div className="flex items-center">
                                        <div className="flex items-center flex-col gap-1 px-2 rounded-lg cursor-pointer hover:bg-[#252525] p-1">
                                            <p className="text-yellow text-lg" style={{ lineHeight: '19px' }}>$0.00</p>
                                            <p className="text-[#535353] font-medium mb-0" style={{ lineHeight: "16px" }}>Portfolio</p>
                                        </div>
                                        <div className="flex items-center flex-col gap-1 px-2 rounded-lg cursor-pointer hover:bg-[#252525] p-1">
                                            <p className="text-yellow text-lg" style={{ lineHeight: '19px' }}>$0.00</p>
                                            <p className="text-[#535353] font-medium mb-0" style={{ lineHeight: "16px" }}>Cash</p>
                                        </div>
                                        <div className="px-2">
                                            <button type="button" className="px-2 py-1 text-black rounded-lg bg-gradient-to-br from-yellow to-[#101500] font-semibold">
                                                Deposit
                                            </button>
                                        </div>
                                        <div className="p-2 hover:bg-[#252525] cursor-pointer rounded-lg">
                                            <img src="/assets/img/icons/notification.svg" alt="" />
                                        </div>
                                        <div className="mx-2 h-[36px]">
                                            <hr className="border h-full border-[#535353]" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex">
                                        <div className="ps-2 pe-1">
                                            <button type="button" className="px-2 py-1 text-[#B3B3B3] border gradiant-btn rounded-lg font-semibold" onClick={() => setIsLogin(true)}>
                                                Log In
                                            </button>
                                        </div>
                                        <div className="ps-1 pe-2">
                                            <button type="button" className="px-2 py-1 text-black rounded-lg bg-gradient-to-br from-yellow to-[#101500] font-semibold">
                                                Sign Up
                                            </button>
                                        </div>
                                    </div>
                                )
                        }

                        <div className={`${isLogin ? 'py-2' : 'py-5'}`} onMouseLeave={() => setIsopen(false)}>
                            <div className="relative inline-block text-left">
                                {
                                    isLogin ? (
                                        <button type="button" className="flex items-center gap-2 hover:bg-[#252525] p-3 py-2 rounded-full" id="menu-button"
                                            onClick={() => setIsopen(!isopen)}
                                            onMouseEnter={() => setIsopen(true)}
                                        >
                                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="w-[30px] rounded-full" />
                                            <img src="/assets/img/icons/arrow-down.svg" alt="" />
                                        </button>
                                    ) : (
                                        <div className="px-2" onClick={() => setIsopen(!isopen)} onMouseEnter={() => setIsopen(true)}>
                                            <img src="/assets/img/icons/hamburger.svg" alt="" className="cursor-pointer" />
                                        </div>
                                    )
                                }

                                {
                                    isopen && (
                                        <div className={`absolute right-0 z-10 bg-gradient-to-b from-[#0B0B0B] to-[#2A2A2A] rounded-lg w-[227px] ${isLogin ? 'mt-2' : 'mt-5'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" onMouseEnter={() => setIsopen(true)} onMouseLeave={() => setIsopen(false)}>
                                            {
                                                isLogin ? (
                                                    <div className="flex gap-2 items-center border-b border-[#535353] p-[20px]">
                                                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="w-[40px] h-[40px] rounded-full" />
                                                        <div>
                                                            <p className="text-white font-medium cursor-pointer" style={{ lineHeight: '16px' }}>Edison</p>
                                                            <div className="flex gap-1">
                                                                <p className="text-white text-sm mb-0">0xD850...343d</p>
                                                                <img src="/assets/img/icons/copy.svg" alt="" className="cursor-pointer" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="border-b border-[#535353] px-[20px] py-[10px]">
                                                        <p className="text-white font-medium py-2 cursor-pointer">Sign Up</p>
                                                        <p className="text-white font-medium py-2 cursor-pointer">Log In</p>
                                                    </div>
                                                )
                                            }

                                            <div className="px-[20px] py-[10px]">
                                                {
                                                    isLogin &&
                                                    <div>
                                                        <p className="text-white font-medium py-2 cursor-pointer">Profile</p>
                                                        <p className="text-white font-medium py-2 cursor-pointer">Settings</p>
                                                        <p className="text-white font-medium py-2 cursor-pointer">Watchlist</p>
                                                    </div>
                                                }

                                                <p className="text-white font-medium py-2 cursor-pointer">Elections</p>
                                                <p className="text-white font-medium py-2 cursor-pointer">Reward</p>
                                                <p className="text-white font-medium py-2 cursor-pointer">Learn</p>
                                                <p className="text-white font-medium py-2 cursor-pointer">Documentation</p>
                                                <p className="text-white font-medium py-2 cursor-pointer">Terms of Use</p>
                                                <div className="flex items-center justify-between">
                                                    <p className="text-white font-medium py-2 cursor-pointer">Dark mode</p>
                                                    <div
                                                        className={`relative w-[40px] h-[20px] flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${theme === 'dark' ? 'bg-yellow' : ''
                                                            }`}
                                                        onClick={() => toggleTheme()}
                                                    >
                                                        <div
                                                            className={`bg-black w-[14px] h-[14px] rounded-full shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-[18px]' : 'translate-x-0'
                                                                }`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                isLogin &&
                                                <div className="flex gap-2 items-center border-t border-[#535353] p-[20px]">
                                                    <p className="text-white font-medium cursor-pointer" onClick={() => setIsLogin(false)}>Logout</p>
                                                </div>
                                            }
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5 flex gap-5">
                <p className="text-red font-medium mb-0 cursor-pointer" style={{ lineHeight: "16px" }}>Live •</p>
                <p className="text-white font-medium mb-0 cursor-pointer" style={{ lineHeight: "16px" }}>All</p>
                <p className="text-white font-medium mb-0 cursor-pointer" style={{ lineHeight: "16px" }}>New</p>
                <p className="text-white font-medium mb-0 cursor-pointer" style={{ lineHeight: "16px" }}>Sports</p>
                <p className="text-white font-medium mb-0 cursor-pointer" style={{ lineHeight: "16px" }}>Politics</p>
                <p className="text-white font-medium mb-0 cursor-pointer" style={{ lineHeight: "16px" }}>Crypto</p>
                <p className="text-white font-medium mb-0 cursor-pointer" style={{ lineHeight: "16px" }}>Pop Culture</p>
                <p className="text-white font-medium mb-0 cursor-pointer" style={{ lineHeight: "16px" }}>Business</p>
                <p className="text-white font-medium mb-0 cursor-pointer" style={{ lineHeight: "16px" }}>Science</p>
            </div>
        </nav>
    );
};

export default Navbar;