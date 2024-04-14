import React, { useEffect, useState } from 'react'
import "./Header.scss"
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from "react-redux"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import LoginComponent from '../LoginComponent/LoginComponent'
import SignUpComponent from '../SignuUpComponent/SignUpComponent';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

function Header() {

    const dispatch = useDispatch()
    const todoList = useSelector((state) => state.todoSlice)
    const [scrollDirection, setScrollDirection] = useState('down');

    const navigate = useNavigate();
    const location = useLocation();

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

    const searchParams = new URLSearchParams(location.search);
    const loginParam = searchParams.get('login');
    const signupParam = searchParams.get('signup');

    const handleClick = () => {
        const params = new URLSearchParams();
        params.append('login', 'true');
        const newUrl = `${location.pathname}?${params.toString()}`;
        navigate(newUrl);
    };
    const closeModal = () => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.delete('login');
        searchParams.delete('signup');

        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    };

    const onClose = () => {

    }
    const onOpen = () => {

    }

    return (
        <div className={`header-screen relative isolate overflow-hidden ${scrollDirection}`}>
            <NavLink to="/home"><img src="https://www.pngkey.com/images/logo.png" alt="" /></NavLink>
            <button onClick={handleClick}>Set URL Params</button>
            <div className='actions'>
                <Avatar size='sm' bg='red.500' name='Sharanu Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
                {/* <div class="h-screen flex justify-center items-center"> */}
                <NavLink to="/checkout">

                    <div class="relative py-2">
                        <div class="t-0 absolute left-3">
                            {todoList?.length &&
                                <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{todoList?.length}</p>
                            }
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                </NavLink>
                {/* </div> */}
                {/* <span style={{ position: "absolute", marginTop: "-35px", marginLeft: "10px", backgroundColor: "white", color: 'black', borderRadius: '10px', fontSize: '12px', padding: '0px 6px', border: '1px solid gray' }}>{todoList.length}</span> */}
            </div>

            <Modal isOpen={loginParam || signupParam} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <div className="login-and-create-modal">
                        <div className='close-icon' onClick={closeModal}><CloseIcon boxSize={4} /></div>
                        {loginParam ? <LoginComponent /> : <SignUpComponent />}
                    </div>

                </ModalContent>
            </Modal>

        </div>
    )
}

export default Header