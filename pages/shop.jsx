import useAxios from "axios-hooks";
import React, { useState } from "react";
import ProductType from "./products_page/ProductType";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);

  const [
    {
      data: productTypeData,
      loading: productTypeLoading,
      error: productTypeError,
    },
    getProductType,
  ] = useAxios({
    url: "/api/productType",
  });
  return (
    <>
      <div id="Shop"></div>
      <h1 className=" font-fontEn  text-primary mt-14 lg:py-10 mx-14 leading-tight text-center text-[25px] lg:text-[45px] sm:text-[18px] ">
        {" "}
        SHOP
      </h1>

      <div className="flex flex-wrap font-fontTh elementor">
        <div className="w-full mt-4">
          <ul
            className="flex mb-0 list-none flex-wrap  flex-row text-white"
            role="tablist"
          >
            {productTypeData?.map((type, index) => (
              <li
                key={index}
                className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              >
                <a
                  className={
                    "lg:text-2xl text-xl font-bold uppercase px-5 py-3 block leading-normal " +
                    (openTab === index + 1
                      ? "text-primary underline bg-" + color + "-600"
                      : "text-" + color + "-600 ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(index + 1);
                  }}
                  data-toggle="tab"
                  href="#cannabis"
                  role="tablist"
                >
                  <i className="mr-1"></i>
                  {type?.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-4 ">
            <div className="px-2 lg:py-5 flex-auto">
              <div className="tab-content tab-space">
                {productTypeData?.map((type, index) => (
                  <div
                    key={index}
                    className={openTab === index + 1 ? "block" : "hidden"}
                  >
                    <ProductType productTypeId={type.id} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function ShopPages() {
  return (
    <>
      <div className="lg:px-36 justify-center py-10 text-sm mx-auto">
        <Tabs />;
      </div>
    </>
  );
}
