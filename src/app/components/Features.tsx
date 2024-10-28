import Image from "next/image";
import React from "react";
import { features } from "@/app/components/constants/constant";

type Props = {
  title: string;
  icon: string;
  description: string;
};

const FeaturesComp = ({ title, icon, description }: Props) => {
  return (
    <div className="   flex justify-center flex-col w-full px-1  space-x-0 md:space-x-2 py-3    ">
      <div className="h-20 w-20 rounded-full bg-green-500 text-white flex justify-center items-center">
        {" "}
        <Image
          src={icon}
          height={50}
          width={50}
          alt="features imges"
          className="colored-icon"
        />
      </div>
      <h2 className="font-bold text-lg w-full">{title}</h2>
      <p className="text-gray-500 w-full bg-gray-100/20">{description}</p>
    </div>
  );
};
const Features = () => {
  return (
    <section className=" pt-16 md:max-w-[90rem] md:px-8   overflow-hidden mx-auto pb-40 md:py-28 px-0  gap-5      md:mb-0">
      <div className= " flex flex-col relative  px-5 w-full    md:max-w-[500px] mx-auto  ">
        <Image
          src={"/camp.svg"}
          height={30}
          width={30}
          alt="featurs image "
          className="-mb-4 absolute md:-top-8 md:left-3 left-6 -top-14"
        ></Image>
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl md:w-full">
          Our Features
        </h2>
      </div>

      {/* main */}
      <div className="flex  justify-center items-center   md:justify-around ">
        {/* image */}
        <div className="hidden md:block">
          <Image
            src={"/phone.png"}
            height={700}
            width={300}
            alt="moile phone image"
            className=" h-full rounded-2xl rotate-[20deg]"
          />
        </div>
        {/* features */}
        <div className="md:max-w-[60%]  px-5 grid grid-cols-1 md:grid-cols-2 w-full bg-none">
          {features.map((elem) => (
            <FeaturesComp key={elem.title}
              title={elem.title}
              icon={elem.icon}
              description={elem.description}
            />
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default Features;
