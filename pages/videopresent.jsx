/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import useAxios from "axios-hooks";

export default function VideopresentPages() {

  const [{data: linkVideoData, loading, error}, getLinkVideo] = useAxios ({url: '/api/linkVideo'})

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!!</p>

  return (
    <>
      <div id="Video"></div>
      <div className=" lg:pt-32 sm:pt-14">
      <h2 className="elementor font-fontEn text-primary  mx-14 leading-tight text-center text-[26px] lg:text-[40px] sm:text-[30px] ">
          {" "}
          Video Presentation
          {/* <hr className="w-auto border-[2px] border-primary" /> */}

        </h2>
        {linkVideoData?.map((linkVideo, index) =>(
        <iframe
          key={index}
          className=" mx-auto lg:py-5 w-[350px] lg:w-3/4 rounded aspect-video relative"
          src={linkVideo.link}
        ></iframe> 
      ))}
      </div>

    

      <br />
      <br />
      <br />
      <br />
      <br />
    
    </>
  );
}
