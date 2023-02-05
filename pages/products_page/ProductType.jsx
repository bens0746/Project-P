/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import useAxios from "axios-hooks";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/shopingCart/cartSlice";
import App from "../Alert";

export default function ProductType({ productTypeId }) {
  const notify = () => {
    toast.success("เพิ่มสินค้าสำเร็จ", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const [
    { data: productsData, loading: productloading, error: productError },
    getProducts,
  ] = useAxios({
    url: `/api/products/productTypeSelect?productTypeId=${productTypeId}`,
  });

  const dispatch = useDispatch();

  if (productloading) return <p>Loading...</p>;
  if (productError) return <p>Error!!</p>;
  return (
    <>
      <div className="justify-center py-10 mx-auto">
        <div className="text-center grid grid-cols-2 md:grid-cols-4">
          {productsData?.map((product, index) => (
            <div key={index} className=" px-2 font-fontTh  mx-6">
              <img
                src={product.image}
                alt=""
                width={"50%"}
                height={"50%"}
                className="m-2 mx-auto object-contain object-center min-h-[200px] md:min-h-[250px] 
                      max-h-[200px] md:max-h-[250px] w-full h-full border2"
              />
              <h2 className="my-3 text-white font-fontTh text-2xl">
                {product.name}
              </h2>
              <span className=" text-primary text-[18px] ">
                {product.price}
              </span>
              <br />
              <div className="flex items-center justify-center py-3">
                <button
                  className="bg-primary hover:bg-lime-400 font-bold py-2 px-4 rounded-3xl text-black button"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        type: product.productType.name,
                        sumQty: 1,
                        sumPrice: product.price,
                      })
                    )
                  }
                >
                  สั่งซื้อ
                </button>
              </div>
            </div>
          ))}

          <App />
        </div>
      </div>
    </>
  );
}
