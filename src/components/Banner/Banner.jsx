import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="md:h-screen w-full relative pt-32 pb-10 bg-[url('/assets/images/bannr-bg.png')] md:pb-0 md:pt-0 bg-cover bg-center">
        <Image
          className="absolute top-0 left-0"
          src="/assets/images/tablet-half.png"
          height={200}
          width={200}
          alt="tablet"
        />
        <Image
          className="absolute right-1/2 top-1/3"
          src="/assets/images/tablet.png"
          height={200}
          width={200}
          alt="tablet"
        />
        <Image
          className="absolute bottom-6 left-1/2"
          src="/assets/images/group-6.png"
          height={60}
          width={60}
          alt="tablet"
        />
        <div className="container mx-auto md:px-32 w-full h-full grid items-center md:grid-cols-2 px-4 ">
          <div className="text-white text-center md:text-left h-full flex flex-col justify-center gap-5">
            <h1 className="text-5xl font-bold ">
              Your Best Medical Help Center
            </h1>
            <p className="text-sm font-normal">
              Lorem Ipsum is simply dummy text they are printing typesetting has
              been the industrys stardard.
            </p>
            <div>
              <Button variant="solid" color="warning">
                All services
              </Button>
            </div>
          </div>
          <div className="">
            <Image
              className=""
              src="/assets/images/docs.png"
              height={500}
              width={500}
              alt="tablet"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
