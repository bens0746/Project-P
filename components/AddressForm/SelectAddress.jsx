import useAxios from "axios-hooks";
import React from "react";

export default function SelectAddress({ allCart, dispatch, AddressInput }) {
  const [
    { data: addressData, loading: addressLoading, error: addressError },
    getAddressData,
  ] = useAxios();
  return (
    <>
      <div className="flex">
        <div className="flex-grow px-2 my-2">
          <select
            name="district"
            className="flex items-center w-full px-4 py-2.5 h-full transition duration-500 rounded-lg bg-gray-50 border border-gray-300  focus:border-secondary focus:bg-gray-100 focus:outline-none focus:shadow-outline ring-offset-current ring-offset-2 ring-secondary"
            required
            value={allCart.province}
            onChange={(event) => {
              event.preventDefault();
              dispatch(AddressInput({ province: event.target.value }));
            }}
          >
            <option value="">เลือกจังหวัด</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="flex-grow px-2 my-2">
          <select
            name="district"
            className="flex items-center w-full px-4 py-2.5 h-full transition duration-500 rounded-lg bg-gray-50 border border-gray-300  focus:border-secondary focus:bg-gray-100 focus:outline-none focus:shadow-outline ring-offset-current ring-offset-2 ring-secondary"
            required
            value={allCart.district}
            onChange={(event) => {
              event.preventDefault();
              dispatch(AddressInput({ district: event.target.value }));
            }}
          >
            <option value="">เลือกอำเภอ</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="flex-grow px-2 my-2">
          <select
            name="subDistrict"
            className="flex items-center w-full px-4 py-2.5 h-full transition duration-500 rounded-lg bg-gray-50 border border-gray-300  focus:border-secondary focus:bg-gray-100 focus:outline-none focus:shadow-outline ring-offset-current ring-offset-2 ring-secondary"
            required
            value={allCart.subDistrict}
            onChange={(event) => {
              event.preventDefault();
              dispatch(AddressInput({ subDistrict: event.target.value }));
            }}
          >
            <option value="">เลือกตำบล</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
    </>
  );
}
