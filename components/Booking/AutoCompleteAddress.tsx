import React from "react";

export const AutoCompleteAddress = () => {
  return (
    <div className="">
      <div>
        <label className="text-gray-400" htmlFor="">
          Where From?
        </label>
        <input type="text" className="bg-white  border w-full rounded-md outline-none px-2 py-1 focus:border-yellow-300" />
      </div>
      <div className="mt-3">
        <label className="text-gray-400" htmlFor="">
          Where To?
        </label>
        <input type="text" className="bg-white  border w-full rounded-md outline-none px-2 py-1 focus:border-yellow-300" />
      </div>
    </div>
  );
};
