import Image from "next/image";
import Button from "./Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoClose } from "react-icons/io5";
const Hero = () => {
  return (
    <main className="flex  justify-center items-center px-5 py-3 gap-10 pt-10   md:max-w-[90rem] mx-auto  overflow-hidden md:h-[90vh]">
      <div className="relative  z-20 flex flex-col md:flex-row gap-20 justify-between max-w-7xl">
        {/* first */}
        <div className="flex-1 gap-10 flex-col ">
          <Image
            src={"/camp.svg"}
            height={34}
            width={34}
            alt="camp image"
          ></Image>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl">
            Putuk Truno Camp Area
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nulla
            maiores distinctio tenetur deserunt optio exercitationem iste ipsa
            dignissimos corrupti! Pariatur fugit iusto facere dolore consectetur
            quis harum, placeat non.
          </p>
          <div className="flex py-6 space-x-1">
            {" "}
            ⭐⭐⭐⭐ <p className="font-bold">198k</p>Ecellent Reviews{" "}
          </div>
          <div className="flex flex-col space-y-5 py-2 space-x-2 md:flex-row">
            <Button
              title="Download App"
              style="bg-green-500 text-white px-10 py-3 sm:w-full md:w-[250px]"
            />
            <Button
              title="How We Work? "
              style="bg-gray-200 text-gray-500 px-4 py-3 "
            />
          </div>
        </div>

        {/* second */}
        <div className=" relative  flex-1  flex justify-center items-center flex-col py-10">
          <Card className=" bg-gray-800 min-w-[360px]  md:min-w-[400px]  text-white z-50">
            <CardHeader>
              <CardDescription className="flex justify-between ">
                Location <IoClose className="text-xl" />
              </CardDescription>
              <CardTitle>
                <h3>Aguas Calientes </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="flex justify-between ">
                Distance <p>Elevation</p>
              </CardDescription>
              <CardTitle className=" flex  justify-between py-1 font-bold">
                173.28 mi <p>2.05 Km</p>
              </CardTitle>
            </CardContent>
          </Card>
        </div>
      </div>
      <Image
        src={"/map.jpg"}
        height={600}
        width={600}
        alt="map image "
        className="h-full w-full absolute top-4 bottom-0  md:top-5 md:right-7 opacity-20   md:opacity-20  overflow-hidden"
      ></Image>
    </main>
  );
};

export default Hero;
