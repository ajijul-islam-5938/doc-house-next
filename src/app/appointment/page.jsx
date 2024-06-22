"use client";
import PageCover from "@/components/PageCover/PageCover";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const page = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <PageCover />
      <div
        style={{ background: "url('/assets/images/landing-bg.png')" }}
        className="bg-cover bg-bottom py-32 container mx-auto md:px-32 grid md:grid-cols-2 my-16 gap-5"
      >
        <div className="">
          <Calendar
            className="w-full h-full"
            onChange={onChange}
            value={value}
          />
        </div>
        <div className="">
          <Image
            src="/assets/images/chair.png"
            height={200}
            width={450}
            alt="tablet"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="container mx-auto md:px-32">
        <div className="my-16">
          <p className="text-center text-xs text-warning-500">
            Available Services on April 30, 2022
          </p>
          <h2 className="text-2xl font-semibold text-center">
            Please select a service.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="grid grid-cols-4 items-start gap-5 shadow p-1 rounded-md">
            <div
              style={{ background: "url('/assets/images/service-bg.png')" }}
              className="col-span-1 p-4 bg-no-repeat bg-cover bg-center"
            >
              <Image
                src="/assets/images/service1.png"
                height={200}
                width={200}
                alt="tablet"
              />
            </div>
            <div className="col-span-3">
              <p className="text-lg w-1/2">Teeth Orthodontics</p>
            </div>
          </div>
          <div className="grid grid-cols-4 items-start gap-5 shadow p-1 rounded-md">
            <div
              style={{ background: "url('/assets/images/service-bg.png')" }}
              className="col-span-1 p-4 bg-no-repeat bg-cover bg-center"
            >
              <Image
                src="/assets/images/service1.png"
                height={200}
                width={200}
                alt="tablet"
              />
            </div>
            <div className="col-span-3">
              <p className="text-lg w-1/2">Teeth Orthodontics</p>
            </div>
          </div>
          <div className="grid grid-cols-4 items-start gap-5 shadow p-1 rounded-md">
            <div
              style={{ background: "url('/assets/images/service-bg.png')" }}
              className="col-span-1 p-4 bg-no-repeat bg-cover bg-center"
            >
              <Image
                src="/assets/images/service1.png"
                height={200}
                width={200}
                alt="tablet"
              />
            </div>
            <div className="col-span-3">
              <p className="text-lg w-1/2">Teeth Orthodontics</p>
            </div>
          </div>
          <div className="grid grid-cols-4 items-start gap-5 shadow p-1 rounded-md">
            <div
              style={{ background: "url('/assets/images/service-bg.png')" }}
              className="col-span-1 p-4 bg-no-repeat bg-cover bg-center"
            >
              <Image
                src="/assets/images/service1.png"
                height={200}
                width={200}
                alt="tablet"
              />
            </div>
            <div className="col-span-3">
              <p className="text-lg w-1/2">Teeth Orthodontics</p>
            </div>
          </div>
          <div className="grid grid-cols-4 items-start gap-5 shadow p-1 rounded-md">
            <div
              style={{ background: "url('/assets/images/service-bg.png')" }}
              className="col-span-1 p-4 bg-no-repeat bg-cover bg-center"
            >
              <Image
                src="/assets/images/service1.png"
                height={200}
                width={200}
                alt="tablet"
              />
            </div>
            <div className="col-span-3">
              <p className="text-lg w-1/2">Teeth Orthodontics</p>
            </div>
          </div>
          <div className="grid grid-cols-4 items-start gap-5 shadow p-1 rounded-md">
            <div
              style={{ background: "url('/assets/images/service-bg.png')" }}
              className="col-span-1 p-4 bg-no-repeat bg-cover bg-center"
            >
              <Image
                src="/assets/images/service1.png"
                height={200}
                width={200}
                alt="tablet"
              />
            </div>
            <div className="col-span-3">
              <p className="text-lg w-1/2">Teeth Orthodontics</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto md:px-32 my-16">
        <div className="my-16">
          <h2 className="text-2xl font-semibold text-center">
            Available slots for Teeth Orthodontics.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center justify-evenly py-8 gap-5 border">
            <div
              className=" p-5 rounded-full flex items-center justify-center bg-[rgba(255,0,0,0.1)]"
            >
              <Image
                src="/assets/images/slot.png"
                height={50}
                width={50}
                alt="tablet"
              />
            </div>
            <p className="text-xl font-semibold">Teeth Orthodontics</p>
            <p className="text-xs">8:00 AM - 9:00 AM</p>
            <Button variant="solid" color="warning" radius="none">Book Appointment</Button>
          </div>
          <div className="flex flex-col items-center justify-evenly py-8 gap-5 border">
            <div
              className=" p-5 rounded-full flex items-center justify-center bg-[rgba(255,0,0,0.1)]"
            >
              <Image
                src="/assets/images/slot.png"
                height={50}
                width={50}
                alt="tablet"
              />
            </div>
            <p className="text-xl font-semibold">Teeth Orthodontics</p>
            <p className="text-xs">8:00 AM - 9:00 AM</p>
            <Button variant="solid" color="warning" radius="none">Book Appointment</Button>
          </div>
          <div className="flex flex-col items-center justify-evenly py-8 gap-5 border">
            <div
              className=" p-5 rounded-full flex items-center justify-center bg-[rgba(255,0,0,0.1)]"
            >
              <Image
                src="/assets/images/slot.png"
                height={50}
                width={50}
                alt="tablet"
              />
            </div>
            <p className="text-xl font-semibold">Teeth Orthodontics</p>
            <p className="text-xs">8:00 AM - 9:00 AM</p>
            <Button variant="solid" color="warning" radius="none">Book Appointment</Button>
          </div>
          <div className="flex flex-col items-center justify-evenly py-8 gap-5 border">
            <div
              className=" p-5 rounded-full flex items-center justify-center bg-[rgba(255,0,0,0.1)]"
            >
              <Image
                src="/assets/images/slot.png"
                height={50}
                width={50}
                alt="tablet"
              />
            </div>
            <p className="text-xl font-semibold">Teeth Orthodontics</p>
            <p className="text-xs">8:00 AM - 9:00 AM</p>
            <Button variant="solid" color="warning" radius="none">Book Appointment</Button>
          </div>
          <div className="flex flex-col items-center justify-evenly py-8 gap-5 border">
            <div
              className=" p-5 rounded-full flex items-center justify-center bg-[rgba(255,0,0,0.1)]"
            >
              <Image
                src="/assets/images/slot.png"
                height={50}
                width={50}
                alt="tablet"
              />
            </div>
            <p className="text-xl font-semibold">Teeth Orthodontics</p>
            <p className="text-xs">8:00 AM - 9:00 AM</p>
            <Button variant="solid" color="warning" radius="none">Book Appointment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
