/* eslint-disable @next/next/no-img-element */
import useAxios from "axios-hooks";
import Head from "next/head";

export default function Popup() {
  const [{ data }] = useAxios({ url: "/api/popup" });

  return (
    <>
      <div id="Popup"></div>

      {/* <div className="Modal">
        <h2 className="Modal-InText">Do you want to continue ?</h2>

        <button className="Modal-InBtn Btn-Right">Yup </button>
        <button className="Modal-InBtn Btn-Left">Nope</button>
      </div> */}
      <div className="">
        {data?.map((popup, index) => (
          <div key={index}>
            <div className="flex items-center justify-center min-h-screen ">
              <div className="pointer-events-auto">
                <div className="flex items-center px-3 py-2">
                  {/* <strong className="mr-auto">Tailwind</strong> */}
                  <img
                    className="rounded-lg max-h-screen z-50 relative "
                    src={popup.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
