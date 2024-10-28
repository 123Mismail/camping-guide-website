import React from "react";
import Image from "next/image";
interface Camps {
  title: string;
  bgImage: string;
  description: string;
  peopleJoin: string;
}
const people = ["/people1.avif","/people2.avif","/people3.avif","/people4.avif",];
const CamptSite = ({ title, bgImage, description, peopleJoin }: Camps) => {
  return (
    <div
      className={`h-[300px] flex flex-col gap-40   w-[590px]   md:h-[500] ${bgImage} bg-cover bg-no-repeat md:rounded-xl min-w-[100vw] md:min-w-[600px]  `}
    >
      <div className="flex  items-center space-x-1">
        <span className="h-10 w-10 flex justify-center m-4 bg-green-600 rounded-full  ">
          <Image src={"/title.svg"} height={50} width={20} alt="title image" />
        </span>
        <span>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-base text-white">{description}</p>
        </span>
      </div>
      <div className="text-white font-semibold pl-8 pb-5 flex items-center gap-4 ">
        {people.map((img,i) => (
          <span key={i} className="h-10 w-10 rounded-full flex  -ml-5 border border-white">
            <Image src={img}  height={70} width={70} alt="people imaeg" className="h-10 w-10 rounded-full object-cover" />
          </span>
        ))}
        {peopleJoin}
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="flex relative  justify-end flex-col mx-auto   md:max-w-[90rem]  overflow-hidden px-0 lg:px-20  lg:gap-0  gap-10  md:pb-16">
      <div className="hide-scrollbar flex relative justify-between gap-1 items-center overflow-hidden overflow-x-auto  ">
        {/* coamp1 */}
        <CamptSite
          title="Putuk Truno Camp"
          bgImage={"bgImage"}
          description="Prigen, Pasuruan"
          peopleJoin="50k+Joined"
        />
        {/* camp2 */}
        <CamptSite
          title="Mountain View Camp"
          bgImage={"bgImage1"}
          description="SomeWhere in the Wild"
          peopleJoin="50k+Joined"
        />

       
      </div>
      <div className="flex max-w-[340px]    lg:absolute lg:top-60   md:-mt-32   lg:left-[31rem] flex-col gap-5   justify-center mx-auto max-h-[220px] md:max-h-[250px] md:max-w-[430px] lg:max-w-[450px]  h-full pt-6  rounded-xl bg-green-500 text-white ">
            <h3 className=" p-2 text-2xl font"><strong className="text-2xl ">Feeling Lost</strong> And Not Knowing the Way?</h3>
            <p className="w-full p-2 pb-3 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, labore ipsum error cum eligendi eveniet veniam hic, consequuntur autem atque inventore? Nostrum suscipit accusantium nobis, molestiae est ullam pariatur deleniti.</p>
        </div>
    </section>
  );
};

export default Camp;
