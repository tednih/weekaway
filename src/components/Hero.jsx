import React from "react";
import Ocean from "../../src/img/ocean.jpg";
const Hero = () => {
  return (
    <div id="hero" className="w-full h-[90vh]">
      <img
        src={Ocean}
        alt=""
        className="w-full h-full object-cover object-center"
      />
      <div className="max-w-[1140px] m-auto ">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="py-4 text-4xl italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            recusandae voluptatibus, porro illo ipsam veritatis reprehenderit
            impedit excepturi sed officia ex ipsum tenetur iusto accusantium.
            Vel numquam quia amet maiores!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
