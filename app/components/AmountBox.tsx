import React from "react";

const AmountBox = () => {
  return (
    <div className="flex flex-row items-start gap-2 border p-2 border-primary-color">
      <div className="flex items-start gap-4">
        <input className="mt-0.5" type="radio" />
      </div>
      <div className="flex flex-col items-start">
        <p className="text-sm text-primary-color">BDT 5000</p>
        <p className="text-sm">Cloths for 10 persons</p>
      </div>
    </div>
  );
};

export default AmountBox;
