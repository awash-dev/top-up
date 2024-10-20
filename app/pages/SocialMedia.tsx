import React from "react";
import Image from "next/image";
const SocialMedia = () => {
  return (
    <div className="bg-indigo-700/100   flex items-center justify-center">
      <div className="grid sm:grid-cols-2   xl:grid-cols-3 sm:gap-2 gap-y-2 xl:gap-6 mt-6 ">
        <a href="/" className="w-full">
          <Image
            src="/telegram.webp"
            className="rounded-xl w-[350px] h-[150px] sm:w-[450px] xl:w-[400px] xl:h-[200px] "
            width={250}
            height={150}
            alt="cards"
          />
        </a>
        <a href="/" className="w-full">
          <Image
            src="/instagram.jfif"
            className="rounded-xl w-[350px] h-[150px] sm:w-[450px] xl:w-[400px] xl:h-[200px] "
            width={250}
            height={150}
            alt="cards"
          />
        </a>{" "}
        <a href="/" className="w-full mb-6">
          <Image
            src="/youtube.jpg"
            className="rounded-xl w-[350px] h-[150px] sm:w-[450px] xl:w-[400px] xl:h-[200px] "
            width={250}
            height={150}
            alt="cards"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
