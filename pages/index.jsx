import { Fragment, useState } from "react";
import useAxios from "axios-hooks";
import Head from "next/head";
import QrcodePages from "./qrcode";
import ShopPages from "./shop";
import SlidPages from "./slids";
import { Dialog, Transition } from "@headlessui/react";
import ContactPages from "./contact";
import TimelineproductPages from "./timelineproduct";
import VideopresentPages from "./videopresent";
// import {Link} from 'react-scroll';

export default function Home() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div id="Home"></div>
      <div className="py-32 elementor" id="box">
        <QrcodePages />

        {/* <span className=" font-fontTh  my-14  text-justify justify-items-center doubleText [20px] lg:text-[20px] grid lg:grid-cols-1 ">
          ยินดีต้อนรับสู่อวกาศ
        </span> */}
        <div>
          <SlidPages />
        </div>
        <div>
          <ShopPages />
        </div>

        <h2 className="elementor font-fontTh text-primary   mx-14 leading-tight text-center text-[26px] lg:text-[40px] sm:text-[30px] ">
          {" "}
          วิธีการสั่งซื้อสินค้า
        </h2>
        <TimelineproductPages />

        <div>
          <VideopresentPages />
        </div>
        <div>
          <ContactPages />
        </div>
      </div>

      {/* modal image */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          {/* <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto mx-10 mt-32">
            <div className="flex items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <img className="" src="/images/popup.jpg" alt="news" />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div> */}
          <div className="flex items-center	justify-center overflow-y-auto fixed inset-0 bg-black bg-opacity-75">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <img className="" src="/images/popup.jpg" alt="news" />
              </Dialog.Panel>
            </Transition.Child>

          </div>
        </Dialog>
      </Transition>
    </>
  );
}
