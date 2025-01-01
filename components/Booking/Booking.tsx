import React from "react";
import { AutoCompleteAddress } from "./AutoCompleteAddress";

export const Booking = () => {
  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div className="border p-5 rounded-md mt-3">
        <AutoCompleteAddress />
      </div>
    </div>
  );
};
