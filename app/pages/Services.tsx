import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="bg-indigo-700/100   flex items-center justify-center">
      <div className="grid sm:grid-cols-3   xl:grid-cols-4 sm:gap-2 gap-y-2 xl:gap-6 mt-6 ">
        <a href='' className=" uppercase">
          <Image
            src="/PUBGMOBILE.png"
            className=" hover:scale-110 transition-all rounded-t-xl w-[350px] xl:w-[300px] xl:h-[250px] "
            width={250}
            height={150}
            alt="cards"
          />
          <p

            
            className=" flex text-center items-center justify-center text-[20px]   py-2"
          >
            PUBG MOBILE
          </p>
        </a>{" "}
        <a href=''>
          <Image
            src="/ARENA.png"
            className=" hover:scale-110 transition-all rounded-t-xl w-[350px] xl:w-[300px] xl:h-[250px] "
            width={250}
            height={150}
            alt="cards"
          />
          <p
            
            className="  flex text-center items-center justify-center text-[20px]   py-2"
          >
            ARENA BREAKOUT
          </p>
        </a>{" "}
        <a href=''>
          <Image
            src="/TOWER.png"
            className=" hover:scale-110 transition-all rounded-t-xl w-[350px] xl:w-[300px] xl:h-[250px] "
            width={250}
            height={150}
            alt="cards"
          />
          <p
            
            className="  flex text-center items-center justify-center text-[20px]  py-2"
          >
            Tower of Fantasy
          </p>
        </a>{" "}
        <a href=''>
          <Image
            src="/NBA.png"
            className=" hover:scale-110 transition-all rounded-t-xl w-[350px] xl:w-[300px] xl:h-[250px] "
            width={250}
            height={150}
            alt="cards"
          />
          <p
            
            className=" uppercase flex text-center items-center justify-center text-[20px]  py-2"
          >
            NBA infinite
          </p>
        </a>{" "}
        <a href=''>
          <Image
            src="/Ageof.png"
            className=" hover:scale-110 transition-all rounded-t-xl w-[350px] xl:w-[300px] xl:h-[250px] "
            width={250}
            height={150}
            alt="cards"
          />
          <p
            className=" uppercase flex text-center items-center justify-center text-[20px] py-2"
          >
            Age of empires
          </p>
        </a>{" "}
        <a href=''>
          <Image
            src="/HOK.png"
            className=" hover:scale-110 transition-all rounded-t-xl w-[350px] xl:w-[300px] xl:h-[250px] "
            width={250}
            height={150}
            alt="cards"
          />
          <p
            
            className="uppercase flex text-center items-center justify-center text-[20px] py-2"
          >
            Honor of kings
          </p>
        </a>
      </div>
    </div>
  );
};

export default Services;
