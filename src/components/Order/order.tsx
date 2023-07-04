import AddressForm from "@components/Address/address";
import React, { useState } from "react";

const OrderForm = (props: any) => {
  const [enroll_company, setEnroll_company] = useState({
    address: "",
  });

  const [popup, setPopup] = useState(false);

  const handleInput = (e: any) => {
    setEnroll_company({
      ...enroll_company,
      [e.target.name]: e.target.value,
    });
  };

  const handleComplete = () => {
    setPopup(true);
  };

  const handleClose = () => {
    setPopup(false);
  };

  return (
    <div className="address_search">
      <label htmlFor="address" className="block mb-2">
        주소<span className="text-blue-800">*</span>
      </label>
      <input
        id="address"
        className="user_enroll_text w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Address"
        type="text"
        required={true}
        name="address"
        onChange={handleInput}
        value={enroll_company.address}
      />
      <button
        onClick={handleComplete}
        className="mt-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        주소 검색
      </button>
      {popup && (
        <AddressForm
          company={enroll_company}
          setcompany={setEnroll_company}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default OrderForm;
