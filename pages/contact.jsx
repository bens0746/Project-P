import React from "react";
import { BsLine } from "react-icons/bs";
import useAxios from "axios-hooks";
import { Email, Facebook, Phone } from "@mui/icons-material";

export default function ContactPages() {
  const [{ data }] = useAxios({
    url: "/api/contact",
  });

  return (
    <>
      <div id="Contact"></div>

      <div className="mx-auto px-8 container elementor">
        {data?.map((contact, index) => (
          <div key={index}>
            <h4 className=" font-fontTh text-primary text-center lg:text-left py-2 lg:ml-40 lg:pt-24 lg:py-10 text-[20px] lg:text-[40px] ">
              {contact.title}
            </h4>
            <div className=" grid lg:grid-cols-3 gap-0 py-10">
              <div className=" font-fontTh text-left text-secondary text-sm lg:text-2xl ">
                <img
                  src={contact.image}
                  alt="..."
                  className="w-full h-80 lg:w-[500px] lg:h-[400px] md:w-[600px] md:h-[400px] sm:w-[450px] sm:h-[400px] "
                />
              </div>
              <div className=" mt-5 md:m-auto lg:col-span-2">
                <iframe
                  src={contact.linkmap}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="lg:mx-10  w-full h-80 lg:w-[800px] lg:h-[400px] md:w-[670px] md:h-[400px] sm:w-[450px] sm:h-[400px]  "
                ></iframe>
              </div>
            </div>

            <div className=" grid grid-cols-1 lg:grid lg:grid-cols-4">
              <div className=" font-fontTh text-left text-secondary lg:text-[20px] md:text-sm sm:text-sm">
                <div className=" md:m-auto lg:col-span-1">
                  <p className="py-2 mt-4 lg:mt-0 text-primary"> ที่ตั้ง </p>
                  <p className="lg:py-2 text-tertiary"> {contact.address}</p>
                </div>
              </div>
              <div className=" font-fontTh text-left text-secondary lg:text-[20px] md:text-sm sm:text-sm">
                <div className=" md:m-auto lg:col-span-1">
                  <p className="py-2 text-primary"> สำนักงานใหญ่ </p>
                  <p className="lg:py-2 text-tertiary"> {contact.opentime}</p>
                </div>
              </div>
              <div className=" font-fontTh text-left text-secondary lg:text-[20px] md:text-sm sm:text-sm">
                <div className=" md:m-auto lg:col-span-1">
                  <p className="py-2 text-primary"> ช่องทางติดต่อ </p>
                  <p className="lg:py-2 text-tertiary">
                    {" "}
                    <Phone /> {contact.tel}
                  </p>
                  <p className=" lg:py-2 text-tertiary">
                    {" "}
                    <Email /> {contact.email}
                  </p>
                </div>
              </div>
              <div className=" font-fontTh text-left text-secondary lg:text-[20px] md:text-sm sm:text-sm">
                <div className=" md:m-auto lg:col-span-1">
                  <p className="py-2 text-primary"> ติดตามข่าวสาร </p>
                  <a href="https://www.facebook.com/PigJungleShop" className=" flex lg:py-2 text-primary dark:text-tertiary  hover:underline"> <Facebook /> &nbsp; {contact.facebook}</a>
                  <a href="https://line.me/R/ti/p/@204fquvu?fbclid=IwAR3koiEIMlsgRbkrnY5OA4CMq1m3a6R-r7vQoz3pQH5MdzrENfpRSmBHraA" className=" flex lg:py-2  text-primary dark:text-tertiary hover:underline"> <BsLine /> &nbsp; {contact.line}</a>
                </div>
              </div>
            </div>
          </div>
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
