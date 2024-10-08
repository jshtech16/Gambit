const Footer = () => {
    return (
        <div className="bg-black">
            <div className="bg-[linear-gradient(107.7deg,_rgba(0,0,0,0.5)_37.9%,_rgba(96,4,213,0.1)_113.22%),_linear-gradient(248.12deg,_rgba(24,20,32,0)_35.67%,_#292929_101.76%)] flex px-[42px] border-t border-[#505050] pt-[48px] pb-[80px]">
                <div className="flex-1">
                    <img src="/assets/img/logo_footer.png" alt="" className="cursor-pointer" />
                    <p className="text-2xl text-white font-bold mt-[32px]">Legal Disclaimer</p>
                    <p className="text-lg text-[#909090] w-50 mt-4">Gambit is a decentralized betting platform.</p>
                    <p className="text-lg text-[#909090] w-[60%]">Betting involves risk, and users should only wager what they can afford to lose. Ensure you comply with your local laws and regulations regarding online gambling.</p>
                </div>
                <div className="flex flex-1">
                    <div className="flex flex-1">
                        <div className="flex flex-col gap-3 flex-1">
                            <p className="text-2xl text-white font-bold">Markets</p>
                            <p className="text-lg text-white cursor-pointer mt-1">Politics</p>
                            <p className="text-lg text-white cursor-pointer">Crypto</p>
                            <p className="text-lg text-white cursor-pointer">Sports</p>
                            <p className="text-lg text-white cursor-pointer">Middle East</p>
                            <p className="text-lg text-white cursor-pointer">Pop Culture</p>
                            <p className="text-lg text-white cursor-pointer">Business</p>
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            <p className="text-2xl text-white font-bold">Resources</p>
                            <p className="text-lg text-white cursor-pointer mt-1">Contact</p>
                            <p className="text-lg text-white cursor-pointer">Learn</p>
                            <p className="text-lg text-white cursor-pointer">Developers</p>
                            <p className="text-lg text-white cursor-pointer">Blog</p>
                            <p className="text-lg text-white cursor-pointer">Elections</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                        <p className="text-2xl text-white font-bold">Join the community</p>
                        <div className="flex gap-[10px] mt-4">
                            <img src="/assets/img/icons/twitter.png" alt="" className="cursor-pointer" />
                            <img src="/assets/img/icons/instagram.png" alt="" className="cursor-pointer" />
                            <img src="/assets/img/icons/facebook.png" alt="" className="cursor-pointer" />
                            <img src="/assets/img/icons/tiktok.png" alt="" className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[52px] h-[80px] flex items-center justify-between">
                <p className="text-sm text-white">© 2024 Gambit. All rights reserved.</p>
                <div className="flex gap-[25px]">
                    <p className="text-sm text-white">Terms</p>
                    <p className="text-sm text-white">Privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;