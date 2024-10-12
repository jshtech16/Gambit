"use client";

import Link from 'next/link';

const NavbarTabMenu = () => {

    const tabs = [
        {
            title: 'All',
            link: ''
        },
        {
            title: 'New',
            link: ''
        },
        {
            title: 'Sports',
            link: ''
        },
        {
            title: 'Politics',
            link: '/markets/politics'
        },
        {
            title: 'Crypto',
            link: ''
        },
        {
            title: 'Pop Culture',
            link: ''
        },
        {
            title: 'Business',
            link: ''
        },
        {
            title: 'Science',
            link: ''
        }
    ];

    return (
        <div className="pt-5 flex gap-5 overflow-x-scroll hide-scroll whitespace-nowrap">
            <Link href="/live">
                <p className="text-red text-base font-medium mb-0 flex items-center gap-1 leading-4">
                    Live
                    <span className="live-anim"></span>
                </p>
            </Link>
            {
                tabs.map((ele, idx) => (
                    <Link href={ele.link} key={idx}>
                        <p className="text-white text-base font-medium mb-0 cursor-pointer leading-4">{ele.title}</p>
                    </Link>
                ))
            }
        </div>
    );
};

export default NavbarTabMenu;