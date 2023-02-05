import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import { FiAlignJustify, FiArrowUp } from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";
import { useSelector } from "react-redux";
export default function Navbar() {
  const { cart } = useSelector((state) => state.allCart);

  const [closeNav, setCloseNav] = useState(false);
  const [goBack, setGoBack] = useState("fixed hidden  z-50 right-0 bottom-16");
  const listenScrollEvent = () => {
    window.scrollY > 20
      ? setGoBack("fixed z-50 right-0 bottom-16")
      : setGoBack(goBack);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const [{ data: homeFrontData }] = useAxios({
    url: "/api/homeFront",
  });

  return (
    <>
      <header className="sticky z-40 top-0">
        <div className="relative z-20 border-b border-primary bg-[#15210F]">
          <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
            <div className="flex items-center justify-between">
              <div className="relative z-20">
                <Link href="/">
                  {homeFrontData?.map((companyData, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        src={companyData.image}
                        alt="logo-pigjungle"
                        className="transition-all w-12 lg:w-16 mr-3 "
                      />
                      <div className="font-fontEn text-primary font-extrabold text-[20px] lg:text-[30px] md:text-[18px]">
                        {companyData.name}
                      </div>
                    </div>
                  ))}
                </Link>
              </div>

              <div className="flex items-center justify-end">
                <div className="z-20 py-4 px-6 md:px-12 lg:hidden md:py-16 lg:py-0 lg:pr-0 lg:pl-6">
                  <Link
                    href="/checkout"
                    className="text-center text-white relative"
                    onClick={() => setCloseNav(false)}
                  >
                    <div className="text-3xl flex justify-center lg:text-4xl">
                      <FaShoppingBasket />
                    </div>
                    <div className="absolute -right-2 top-3.5 w-5 h-5 rounded-full flex items-center justify-center bg-primary border-2 border-secondary text-secondary hover:bg-white text-md lg:w-6 lg:h-6 lg:-right-2">
                      {cart?.length}
                    </div>
                  </Link>
                </div>
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer"
                  checked={closeNav}
                  onClick={() => setCloseNav(!closeNav)}
                  hidden
                />
                <label
                  for="hamburger"
                  className="peer-checked:hamburger relative z-20 -mr-6 block cursor-pointer p-6 lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-primary transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-primary transition duration-300"
                  ></div>
                </label>

                <div className="fixed inset-0 w-full translate-x-[-100%] bg-[#15210F] shadow-xl transition duration-300 peer-checked:translate-x-0 lg:static lg:w-auto lg:translate-x-0 lg:border-r-0 lg:shadow-none">
                  <div className="flex h-full flex-col justify-between lg:flex-row lg:items-center">
                    <ul className="space-y-8 px-6 pt-32 text-white font-extrabold text-lg md:px-12 lg:flex lg:space-y-0 lg:space-x-12 lg:pt-0">
                      <li>
                        <LinkScroll
                          to="Home"
                          spy={true}
                          smooth={true}
                          offset={-10}
                          duration={700}
                          className="group relative cursor-pointer before:absolute before:inset-x-0 before:-bottom-2 before:h-2 before:origin-right before:scale-x-0 before:bg-primary before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                          onClick={() => setCloseNav(!closeNav)}
                        >
                          <span className="relative group-hover:text-primary">
                            หน้าหลัก
                          </span>
                        </LinkScroll>
                      </li>
                      <li>
                        <LinkScroll
                          to="Shop"
                          spy={true}
                          smooth={true}
                          offset={-10}
                          duration={700}
                          className="group relative cursor-pointer before:absolute before:inset-x-0 before:-bottom-2 before:h-2 before:origin-right before:scale-x-0 before:bg-primary before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                          onClick={() => setCloseNav(!closeNav)}
                        >
                          <span className="relative group-hover:text-primary">
                            สินค้าและอุปกรณ์
                          </span>
                        </LinkScroll>
                      </li>
                      <li>
                        <LinkScroll
                          to="TimeLineProductPages"
                          spy={true}
                          smooth={true}
                          offset={-10}
                          duration={700}
                          className="group relative cursor-pointer before:absolute before:inset-x-0 before:-bottom-2 before:h-2 before:origin-right before:scale-x-0 before:bg-primary before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                          onClick={() => setCloseNav(!closeNav)}
                        >
                          <span className="relative group-hover:text-primary">
                            วิธีการสั่งซื้อ
                          </span>
                        </LinkScroll>
                      </li>
                      <li>
                        <LinkScroll
                          to="Contact"
                          spy={true}
                          smooth={true}
                          offset={-10}
                          duration={700}
                          className="group relative cursor-pointer before:absolute before:inset-x-0 before:-bottom-2 before:h-2 before:origin-right before:scale-x-0 before:bg-primary before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                          onClick={() => setCloseNav(!closeNav)}
                        >
                          <span className="relative group-hover:text-primary">
                            ติดต่อ
                          </span>
                        </LinkScroll>
                      </li>
                    </ul>

                    <div className="py-8 px-6 md:px-12 hidden md:flex lg:flex md:py-16 lg:py-0 lg:pr-0 lg:pl-6">
                      <Link
                        href="/checkout"
                        className="text-center text-white relative"
                      >
                        <div className="text-2xl flex justify-center lg:text-4xl">
                          <FaShoppingBasket />
                        </div>
                        <div className="absolute -right-2 top-3.5 w-4 h-4 rounded-full flex items-center justify-center bg-primary border-2 border-secondary text-secondary hover:bg-white text-md lg:w-6 lg:h-6 lg:-right-2">
                          {cart?.length}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={goBack}>
        <LinkScroll
          to="Home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
        >
          <span className="absolute cursor-pointer bg-[#15210F] bg-opacity-80 rounded-3xl right-2 items-center p-2 mr-5 text-lg md:text-2xl text-primary border-2 border-primary ">
            <FiArrowUp />
          </span>
        </LinkScroll>
      </div>
    </>
  );
}
