import React from "react";
import Image from "next/image";
const Guide = () => {
  return (
    <section className=" gap-10   md:max-w-[90rem]  overflow-hidden relative justify-center items-center    py-10 mb-6 md:mb-0  ">
      <div className="flex flex-col py-1 justify-center items-center gap-20">
        <div className="px-5 pb-3 md:gap-36 gap-6 flex flex-col md:flex-row justify-between items-center">
          {/* first div */}
          {/* 2 */}
          <div className="flex flex-col md:px-20  flex-1 space-y-4">
            
            <Image
              src={"/camp.svg"}
              height={34}
              width={34}
              alt="guide image"
            />
            <p className="uppercase w-full text-green-900">we are here to guide you</p>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl w-full md:max-w-full">
              Guide You to Easy Path
            </h1>
          </div>
         {/* 1 */}
          <div className="flex-1 ">  <p className=" w-full md:max-w-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            nulla pariatur modi. Nemo quam quibusdam voluptates quos, rerum
            obcaecati consectetur excepturi officia fuga aliquid, odio tenetur
            accusamus, reiciendis doloremque commodi.
          </p></div>
        </div>
      
       
      </div>
        {/* image */}
        <div className="flex w-[100vw] md:min-w-full justify-center items-center pt-8 relative">
  <div className="flex justify-center items-center w-full">
    <Image
      src={"/boat.png"}
      height={700} // Adjust height if needed
      width={700} // Adjust width proportionally if necessary
      className="w-full h-[150px] md:h-[400px] md:w-[86vw] md:rounded-2xl object-cover"
      alt="boat image"
    />
    <div
      className="absolute flex -bottom-1 md:bottom-48 top-2   md:top-16 left-20 md:left-32 px-3 py-2 rounded-xl bg-white shadow-2xl"
    >
      <div className="h-28 w-1 border border-green-500 rounded-2xl flex flex-col justify-between items-center mr-7 gap-10">
        <span className="h-4 w-4 bg-white rounded-full absolute border-2 border-green-600"></span>
        <span className="h-3 w-3 bg-black rounded-full absolute border-2 border-green-600 mt-4"></span>
        <span className="h-3 w-3 bg-black rounded-full absolute border-2 border-green-600 mt-8"></span>
        <span className="h-3 w-3 bg-black rounded-full absolute border-2 border-green-600 mt-12"></span>
        <span className="h-4 w-4 bg-black rounded-full absolute border-2 border-green-600 mt-16"></span>
      </div>
      <div className="flex-col gap-14">
        <div className="flex space-x-10 justify-between">
          <p className="text-gray-400">Destination</p>
          <p className="text-green-700 font-bold">48Km</p>
        </div>
        <div className="mb-4">Aguas Calientes</div>
        <div>
          <p className="text-gray-400">Start Track</p>
          <h3>Wonoroujo Pasurwan</h3>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default Guide;
