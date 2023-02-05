/* eslint-disable @next/next/no-img-element */
import React from "react"

export default function ProductDetails(){
    return (
        <>
        <div className=" font-fontTh">
            <div className="flex justify-center p-4">
                <div className="p-2 flex flex-col md:flex-row md:max-w-44 rounded-lg bg-white shadow-lg">
                    <img className=" w-full h-60 md:h-auto object-contain md:w-48" src="/images/product/marijuana_05.png" alt="" />
                    <div className="p-6 flex flex-col lg:w-[450px]">
                        <h5 className="text-gray-900 text-2xl font-medium mb-8">ชื่อ</h5>
                        <p className="text-gray-700 text-[16px] mb-4 indent-6">
                            รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด
                        </p>
                        <p className="text-lime-600 text-3xl mt-16">500 บาท</p>
               
                    <div className="flex mb-5 mr-5  items-center space-x-3 mt-2">
                        <span>จำนวน</span>
                        <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            {/* <span className="sr-only">Quantity button</span> */}
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                        </div>
                        <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            {/* <span className="sr-only">Quantity button</span> */}
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                        </button>
                       
                        
                    </div>
                        <div className="flex  align-bottom">
                            <button className="bg-lime-300 opacity-75 hover:opacity-100 text-lime-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                                <i className="mdi mdi-cart -ml-2 mr-2"></i>เพิ่ม</button>
                        </div>
                    
                </div>
            </div>
        </div>
        
        
        </div>
        </>
    )
}