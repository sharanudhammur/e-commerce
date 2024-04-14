import React, { useState } from 'react'
import "./SignUpComponent.scss"
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import { CloseIcon } from '@chakra-ui/icons'

function SignUpComponent() {

    const location = useLocation();
    const navigate = useNavigate();

    const navigateTo = () => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('login', 'true');
        searchParams.delete('signup');

        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    console.log(errors)

    const onSubmit = (data) => {
        setApiErrorMessage("test error")
    }

    console.log(watch("example")) // watch input value by passing the name of it

    const [apiErrorMessage, setApiErrorMessage] = useState("")

    return (
        <div className='signUp_component'>
            <div className="bg-white shadow-md" style={{ border: "1px solid lightgray" }}>
                <div className="py-8 px-8 rounded-xl" >
                    <h1 className="font-medium text-2xl mt-2 text-center">Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        {apiErrorMessage &&
                            <div className='error-message'>
                                <div>{apiErrorMessage}</div>
                                <div onClick={() => setApiErrorMessage("")} className='message_close_icon'>
                                    <CloseIcon boxSize={2} />
                                </div>
                            </div>
                        }
                        <div className="my-5 text-sm">
                            <label htmlFor="username" className="block text-black">Username</label>
                            <input type="text" {...register("username", { required: "Username is required" })} id="username" className="rounded-sm px-4 py-2 mt-1 focus:outline-none bg-gray-100 w-full" placeholder="Username" autoFocus />
                            <div className='message'>{errors?.username?.message}</div>
                        </div>
                        <div className="my-5 text-sm">
                            <label htmlFor="password" className="block text-black">Password</label>
                            <input type="password" id="password" {...register("password", { required: "Password is required" })} className="rounded-sm px-4 py-2 mt-1 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                            <div className='message'>{errors?.username?.message}</div>
                            <div className="flex justify-end mt-1 text-sm text-gray-600">
                                <a href="#">Forget Password?</a>
                            </div>
                        </div>

                        <Button isLoading={apiErrorMessage} type="submit" className="action-button text-center duration-300 rounded-sm hover:bg-black w-full" colorScheme='teal' variant='solid'>
                            Login
                        </Button>
                    </form>

                    <div className="flex md:justify-between justify-center items-center mt-5">
                        <div className="bg-gray-300 md:block hidden w-4/12"></div>
                        <p className="md text-sm text-gray-600"> Sign Up With Social </p>
                        <div className="bg-gray-300 md:block hidden w-4/12"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2 mt-5">
                        <div>
                            <button className="text-center w-full text-white bg-blue-900 p-2 duration-300 rounded-sm hover:bg-blue-700">Facebook</button>
                        </div>
                        <div>
                            <button className="text-center w-full text-white bg-blue-400 p-2 duration-300 rounded-sm hover:bg-blue-500">Twitter</button>
                        </div>
                    </div>

                    <p className="mt-7 text-sm text-center text-gray-600"> Already have an account? <span onClick={() => navigateTo()} to="/home?login=true" className="text-black font-medium"> Login </span>  </p>

                </div>
            </div>
        </div>
    )
}

export default SignUpComponent