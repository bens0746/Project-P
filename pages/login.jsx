/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";


export default function Login() {
    return (
        <>
        
            <div className="flex my-36 justify-center">
            <div className="block box1 px-10 py-5 rounded-lg shadow-lg bg-green-200/10 max-w-md font-fontTh">
                <img src="/images/logo.png" alt="" className=" mx-auto w-1/2"/>
                <h5 className="text-lime-400 text-3xl text-center leading-tight font-medium mb-2">Pig Jungle</h5>
                    <div className="mt-5">
                        <input type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                my-2
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                            id="username"
                            placeholder="Username"
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
                        />
                    </div>
                    
                    <button type="button" className="w-full my-2 inline-block px-6 py-2.5 bg-lime-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">เข้าสู่ระบบ</button>
                    
                    <div className="flex items-center justify-between">
                        <div className="w-full h-[1px] bg-gray-300"></div>
                        <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
                        <div className="w-full h-[1px] bg-gray-300"></div>
                    </div>

                    <a href="../signup">
                        <button type="button" className="w-full my-2 inline-block px-6 py-2.5 bg-red-600 text-white font-medium 
                            text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 
                            focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 
                            ease-in-out" >
                                ยังไม่มีบัญชี  
                        </button></a>  <br />

               
            </div>
            </div>
        
        </>
    );
}