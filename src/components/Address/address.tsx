import React from "react";
import DaumPostcode from "react-daum-postcode";
import { FaTimes } from "react-icons/fa";

const AddressForm = (props: any) => {
  const complete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);

    props.setcompany({
      ...props.company,
      address: fullAddress,
    });

    props.onClose(); // Close the popup after address selection
  };
  const handleClose = () => {
    props.onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-25">
      <div className="bg-white p-4 rounded-lg w-2/3">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">우편번호 검색</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            <FaTimes />
          </button>
        </div>
        <DaumPostcode autoClose onComplete={complete} />
      </div>
    </div>
  );
};

export default AddressForm;
