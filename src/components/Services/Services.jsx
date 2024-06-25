"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Image from "next/image";
import { Tabs, Tab, Button } from "@nextui-org/react";
import { IoIosTimer } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { LuPhoneMissed } from "react-icons/lu";
import Slider from "../Slider/Slider";
import axios from "axios";
import Link from "next/link";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/latests`
      );
      setServices(res.data.res);
    };
    getDoctors();
  }, []);

  console.log(services);
  return (
    <div className="container mx-auto md:px-32 my-20">
      <div className="grid md:grid-cols-2 gap-y-5 space-y-5">
        <div>
          <Image
            className=""
            src="/assets/images/service-doctor.png"
            height={500}
            width={500}
            alt="tablet"
          />
        </div>
        <div className="flex flex-col items-start justify-between p-3 gap-y-5">
          <h1 className="text-2xl font-semibold">Our Services</h1>
          <p className="my-3">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div>
            <div>
              <Tabs
                size="md"
                variant="solid"
                color="warning"
                className="w-full mx-auto grid grid-cols-1"
                items={services}
                radius="none"
              >
                {item => (
                  <Tab key={item._id} title={item.name}>
                    <div className="grid">
                      <div className="flex flex-col">
                        <Image
                          className="mt-2 h-[300px] rounded-md"
                          src={item.image}
                          height={400}
                          width={700}
                          alt="tablet"
                        />
                        <div className="space-y-5">
                          <h1 className="text-2xl font-semibold my-3">
                            {item.name}
                          </h1>
                          <p className="">
                            {
                              item.description.length > 300 ? item.description.slice(0,300) : item.description
                            }
                          </p>
                          <p className="">
                          {
                              item.description.length > 200 ? item.description.slice(0,200) : item.description
                            }
                          </p>
                          <Button
                          as={Link}
                          href="/appointment"
                            className="mt-3"
                            variant="bordered"
                            color="warning"
                          >
                            More Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Tab>
                )}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid md:grid-cols-3 my-32 gap-5 mx-3 md:x-0 ">
        <div className=" bg-[#07332F] h-52 rounded-md grid grid-cols-4">
          <div className="col-span-1  text-5xl flex items-center justify-center text-white">
            <IoIosTimer />
          </div>
          <div className="col-span-3  flex flex-col items-start justify-center text-white">
            <h2 className="text-2xl ">Opening Hours</h2>
            <p className="">Open 9.00 am to 5.00pm Everyday</p>
            <p className=""></p>
          </div>
        </div>
        <div className="bg-[#F7A582] h-52 rounded-md grid grid-cols-4">
          <div className="col-span-1  text-5xl flex items-center justify-center text-white">
            <CiLocationOn />
          </div>
          <div className="col-span-3  flex flex-col items-start justify-center text-white">
            <h2 className="text-2xl ">Our Locations</h2>
            <p className="">Dhanmondi 17, Dhaka -1200, Bangladesh</p>
            <p className=""></p>
          </div>
        </div>
        <div className="bg-[#07332F] h-52 rounded-md grid grid-cols-4">
          <div className="col-span-1  text-5xl flex items-center justify-center text-white">
            <LuPhoneMissed />
          </div>
          <div className="col-span-3  flex flex-col items-start justify-center text-white">
            <h2 className="text-2xl ">Contact Us</h2>
            <p className="">+88 01750 00 00 00</p>
            <p className="">+88 01750 00 00 00</p>
            <p className=""></p>
          </div>
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default Services;
