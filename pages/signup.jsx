/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";


export default function Signup() {
    const [{data:signupData, loading, error}, getSignup] = useAxios ({})
    const [{data:postData, loading: loadingMessage, error: errorMessage}, executeSignup] = useAxios({ url: '/api/signup', method: 'POST' }, { manual: true })

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');


    return (
        <>
            <div className=" my-36 flex justify-center">
            <div className="block box1 px-10 py-5 rounded-lg shadow-lg bg-green-200/10 max-w-md font-fontTh">
                <img src="/images/logo.png" alt="" className=" mx-auto w-1/2"/>
                <h5 className="text-lime-400 text-3xl text-center leading-tight font-medium mb-2">Sing Up</h5>
                    <div className="mt-5">
                        <input type="text"
                            className="form-control block w-full px-3 py-1.5 text-base text-gray-700 bg-gray-100 bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                my-2
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                            id="username"
                            placeholder="Username"
                            onChange={event => setUsername(event.target.value)}
                        />

                        <input type="text"
                            className="form-control block w-full px-3 py-1.5 text-base text-gray-700 bg-gray-100 bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                my-2
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                            id="email"
                            placeholder="Email"
                            onChange={event => setEmail(event.target.value)}
                        />
                    
                        <input type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                my-2
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                            id="phone number"
                            placeholder="Phone Number"
                            onChange={event => setPhone(event.target.value)}
                        />
                        <input type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                my-2
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                            id="password"
                            placeholder="Password"
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>

                      <button type="button" 
                            className="w-full my-2 inline-block px-6 py-2.5 bg-lime-600 text-white font-medium text-xs leading-tight 
                            uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg 
                            focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                                
                                variant="success" onClick={async event => {
                                
                                await executeSignup({
                                     data: {
                                        username: username,
                                        email: email,
                                        phone: phone,
                                        password: password,  
                                     } 
                                 }).then(() => {
                                     Promise.all([
                                         setUsername(''),
                                         setEmail(''),          
                                         setPhone(''),
                                         setPassword(''),
                                         getSignup()
                                     ]).then(() => {
                                         <link rel="stylesheet" href="../login" />
                                     })
                                 })
                             }}
                            > 
                            สมัคร
                    </button>  
                    
                    <div className="flex items-center justify-between">
                        <div className="w-full h-[1px] bg-gray-300"></div>
                        <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
                        <div className="w-full h-[1px] bg-gray-300"></div>
                    </div>

                     <a href="../login">
                        <button type="button" className="w-full my-2 inline-block px-6 py-2.5 bg-gray-600 text-white font-medium 
                            text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 
                            focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 
                            ease-in-out">
                        มีบัญชีแล้ว?  
                        </button> </a>  <br />
             
            </div>
            </div>
        
        </>
    );
}