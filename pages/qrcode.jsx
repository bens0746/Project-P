import React from "react";
import Head from "next/head";
import useAxios from "axios-hooks";

export default function QrcodePages() {
  const [{ data }] = useAxios({ url: "/api/contact" });
  return (
    <>
      {data?.map((contact, index) => (
        <div key={index}>
          <div className="sticky z-20 inset-x-0 top-34 py-5 lg:top-44 lg:py-5 ">
            <img
              className="w-20 lg:w-32 lg:h-32 lg:ml-2 -mt-20 absolute rounded-md -hue-rotate-60"
              src={contact.linkQrLine}
            />
            <a href="https://line.me/R/ti/p/@204fquvu?fbclid=IwAR3koiEIMlsgRbkrnY5OA4CMq1m3a6R-r7vQoz3pQH5MdzrENfpRSmBHraA">
              <h2 className=" -mt-0 ml-1 lg:mt-14 text-primary absolute">
                {" "}
                IDLine: @pigjungle{" "}
              </h2>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
