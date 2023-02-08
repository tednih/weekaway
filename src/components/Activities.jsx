import React from "react";
import Resorts1 from "../../src/img/resorts1.jpg";
import Resorts2 from "../../src/img/resorts2.jpg";
import Resorts3 from "../../src/img/resorts3.jpg";

function Activities() {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          className="w-full m-full object-cover relative border-4 border-white shadow-lg"
          src={Resorts1}
          alt="resorts 1"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          className="w-full m-full object-cover relative border-4 border-white shadow-lg"
          src={Resorts2}
          alt="Resorts 2"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          className="w-full m-full object-cover relative border-4 border-white shadow-lg"
          src={Resorts3}
          alt="Resorts 3"
        />
      </div>
    </div>
  );
}

export default Activities;
