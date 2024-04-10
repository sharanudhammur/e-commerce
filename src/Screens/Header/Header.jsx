import React, { useEffect, useState } from 'react'
import "./Header.scss"
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from "react-redux"

function Header() {

    const dispatch = useDispatch()
    const selector = useSelector((state) => state)

    console.log("rerender", selector.todo.length)

    const [scrollDirection, setScrollDirection] = useState('down');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > 0) {
                if (currentScrollPos > lastScrollPos.current) {
                    setScrollDirection('up');
                } else {
                    setScrollDirection('down');
                }
            }

            lastScrollPos.current = currentScrollPos;
        };

        let lastScrollPos = { current: window.pageYOffset };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`header-screen relative isolate overflow-hidden bg-gray-900 ${scrollDirection}`}>
            <div><img src="https://www.pngkey.com/images/logo.png" alt="" /></div>
            <div>
                <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0  group-hover:text-gray-500"
                    aria-hidden="true"
                />
                <span style={{ position: "absolute", marginTop: "-35px", marginLeft: "10px", backgroundColor: "white", color: 'black', borderRadius: '10px', fontSize: '12px', padding: '0px 6px', border: '1px solid gray' }}>{selector.todo.length}</span>
            </div>

            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    )
}

export default Header