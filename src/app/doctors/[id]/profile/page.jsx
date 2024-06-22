"use client";
import PageCover from "@/components/PageCover/PageCover";
import Image from "next/image";
import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { CiLocationOn } from "react-icons/ci";
import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";

const page = () => {
  return (
    <div className="bg-gray-50 w-full h-full pb-20">
      <PageCover />
      <div className="container mx-auto md:px-32">
        <div className="grid md:grid-cols-5 bg-white my-20 p-5 rounded-md gap-10">
          <div className="md:col-span-2">
            <Image
              className=""
              src="/assets/images/doctor2.png"
              height={200}
              width={400}
              alt="tablet"
            />
          </div>
          <div className="md:col-span-3 flex flex-col justify-between gap-2">
            <h1 className="text-2xl font-semibold">Karyen Anderson</h1>
            <p>MBBS, MD - General Medicine</p>
            <div className="flex items-center">
              <Rating style={{ maxWidth: 120 }} readOnly value={4} />{" "}
              <span>(32)</span>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <CiLocationOn />
              </div>
              <div>Dhanmondi, Dhaka, Bangladesh - Get Directions</div>
            </div>
            <div className="">
              <div className="md:w-1/2 grid grid-cols-3 md:grid-cols-6 gap-1 my-10`">
                <div className="h-12 rounded-lg bg-gray-100"></div>
                <div className="h-12 rounded-lg bg-gray-100"></div>
                <div className="h-12 rounded-lg bg-gray-100"></div>
                <div className="h-12 rounded-lg bg-gray-100"></div>
                <div className="h-12 rounded-lg bg-gray-100"></div>
                <div className="h-12 rounded-lg bg-gray-100"></div>
              </div>
            </div>
            <div className="space-x-3 my-5 flex justify-center items-center md:justify-start">
              <Button
                variant="bordered"
                color="warning"
                size="sm"
                className="border-1"
              >
                Dental Filling
              </Button>
              <Button
                variant="bordered"
                color="warning"
                size="sm"
                className="border-1"
              >
                Teeth Whitneing
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-md">
          <Tabs
            color="warning"
            variant="solid"
            radius="none"
            size="lg"
            aria-label="Dynamic tabs"
            items={tabs}
            className="w-full mx-auto grid grid-cols-1"
          >
            {item => (
              <Tab key={item.id} title={item.label}>
                <div>{item.content}</div>
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default page;

let tabs = [
  {
    id: "overviews",
    label: "Overviews",
    content: (
      <div className="">
        <h2 className="text-2xl font-semibold">About me</h2>
        <p className="my-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="space-y-5 pt-5">
              <h2 className="text-xl font-semibold">Education</h2>
              <ul className="ml-6">
                <li className="list-disc">
                  <h2 className="">American Dental Medical University</h2>
                  <ul>
                    <li className="text-xs">BDS</li>
                    <li className="text-xs"> 1998 - 2003</li>
                  </ul>
                </li>{" "}
                <li className="list-disc">
                  <h2 className="">American Dental Medical University</h2>
                  <ul>
                    <li className="text-xs">BDS</li>
                    <li className="text-xs"> 1998 - 2003</li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
            <div className="space-y-5 pt-5">
              <h2 className="text-xl font-semibold">Work & Experience</h2>
              <ul className="ml-6">
                <li className="list-disc">
                  <h2 className="">Glowing Smiles Family Dental Clinic</h2>
                  <ul>
                    <li className="text-xs"> 2010 - Present (5 years)</li>
                  </ul>
                </li>{" "}
                <li className="list-disc">
                  <h2 className="">Dream Smile Dental Practice</h2>
                  <ul>
                    <li className="text-xs"> 2005 - 2007 (2 years)</li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
            <div className="space-y-5 pt-5">
              <h2 className="text-xl font-semibold">Services</h2>
              <ul className="ml-6">
                <li className="list-disc">Tooth cleaning</li>{" "}
                <li className="list-disc">Implants</li>
                <li className="list-disc">Composite Bonding</li>
                <li className="list-disc">Fissure Sealants</li>
                <li className="list-disc">Surgical Extractions</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-2 space-y-5 pt-5">
            <div className="">
              <h2 className="text-xl font-semibold">Awards</h2>
              <ul className="ml-6 space-y-2">
                <p className="text-sm my-1"> July 2019</p>
                <li className="list-disc">
                  <h2 className="text">Humanitarian Award</h2>
                  <ul className="space-y-2">
                    <li className="text-xs">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus.{" "}
                    </li>
                    <li className="text-xs">
                      {" "}
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus.
                    </li>
                  </ul>
                </li>{" "}
                <p className="text-sm my-1"> July 2019</p>
                <li className="list-disc">
                  <h2 className="">
                    Certificate for International Volunteer Service
                  </h2>
                  <ul className="space-y-2">
                    <li className="text-xs">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus.{" "}
                    </li>
                    <li className="text-xs">
                      {" "}
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus.
                    </li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-sm my-1 ml-6"> July 2019</p>

              <ul className="ml-6 list-disc">
                <li>The Dental Professional of The Year Award</li>
                <ul className="space-y-2 list-disc ml-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  a ipsum tellus. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus.
                </ul>
                <li className="list-disc">
                  <h2 className=" my-2 text-xl font-semibold">
                    Specializations
                  </h2>
                  <ul className="space-y-2 list-disc ml-5">
                    <li className="text-xs"> Children Care</li>
                    <li className="text-xs">Dental Care</li>
                    <li className="text-xs">Oral and Maxillofacial Surgery</li>
                    <li className="text-xs">Orthodontist</li>
                    <li className="text-xs">Periodontist</li>
                    <li className="text-xs">Prosthodontics</li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "location",
    label: "Location",
    content: (
      <div className="">
        <h2 className="text-2xl font-semibold">Locations</h2>
        <p className="my-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="space-y-5 pt-5">
              <h2 className="text-xl font-semibold">Education</h2>
              <ul className="ml-6">
                <li className="list-disc">
                  <h2 className="">American Dental Medical University</h2>
                  <ul>
                    <li className="text-xs">BDS</li>
                    <li className="text-xs"> 1998 - 2003</li>
                  </ul>
                </li>{" "}
                <li className="list-disc">
                  <h2 className="">American Dental Medical University</h2>
                  <ul>
                    <li className="text-xs">BDS</li>
                    <li className="text-xs"> 1998 - 2003</li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
            <div className="space-y-5 pt-5">
              <h2 className="text-xl font-semibold">Work & Experience</h2>
              <ul className="ml-6">
                <li className="list-disc">
                  <h2 className="">Glowing Smiles Family Dental Clinic</h2>
                  <ul>
                    <li className="text-xs"> 2010 - Present (5 years)</li>
                  </ul>
                </li>{" "}
                <li className="list-disc">
                  <h2 className="">Dream Smile Dental Practice</h2>
                  <ul>
                    <li className="text-xs"> 2005 - 2007 (2 years)</li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
            <div className="space-y-5 pt-5">
              <h2 className="text-xl font-semibold">Services</h2>
              <ul className="ml-6">
                <li className="list-disc">Tooth cleaning</li>{" "}
                <li className="list-disc">Implants</li>
                <li className="list-disc">Composite Bonding</li>
                <li className="list-disc">Fissure Sealants</li>
                <li className="list-disc">Surgical Extractions</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-2 space-y-5 pt-5">
            <div className="">
              <h2 className="text-xl font-semibold">Awards</h2>
              <ul className="ml-6 space-y-2">
                <p className="text-sm my-1"> July 2019</p>
                <li className="list-disc">
                  <h2 className="text">Humanitarian Award</h2>
                  <ul className="space-y-2">
                    <li className="text-xs">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus.{" "}
                    </li>
                    <li className="text-xs">
                      {" "}
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus.
                    </li>
                  </ul>
                </li>{" "}
                <p className="text-sm my-1"> July 2019</p>
                <li className="list-disc">
                  <h2 className="">
                    Certificate for International Volunteer Service
                  </h2>
                  <ul className="space-y-2">
                    <li className="text-xs">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus.{" "}
                    </li>
                    <li className="text-xs">
                      {" "}
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus.
                    </li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-sm my-1 ml-6"> July 2019</p>

              <ul className="ml-6 list-disc">
                <li>The Dental Professional of The Year Award</li>
                <ul className="space-y-2 list-disc ml-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  a ipsum tellus. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus.
                </ul>
                <li className="list-disc">
                  <h2 className=" my-2 text-xl font-semibold">
                    Specializations
                  </h2>
                  <ul className="space-y-2 list-disc ml-5">
                    <li className="text-xs"> Children Care</li>
                    <li className="text-xs">Dental Care</li>
                    <li className="text-xs">Oral and Maxillofacial Surgery</li>
                    <li className="text-xs">Orthodontist</li>
                    <li className="text-xs">Periodontist</li>
                    <li className="text-xs">Prosthodontics</li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "reviews",
    label: "Reviews",
    content: (
      <div className="">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        <p className="my-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="space-y-5 pt-5">
              <h2 className="text-xl font-semibold">Education</h2>
              <ul className="ml-6">
                <li className="list-disc">
                  <h2 className="">American Dental Medical University</h2>
                  <ul>
                    <li className="text-xs">BDS</li>
                    <li className="text-xs"> 1998 - 2003</li>
                  </ul>
                </li>{" "}
                <li className="list-disc">
                  <h2 className="">American Dental Medical University</h2>
                  <ul>
                    <li className="text-xs">BDS</li>
                    <li className="text-xs"> 1998 - 2003</li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
            <div className="space-y-5 pt-5">
              <h2 className="text-xl font-semibold">Work & Experience</h2>
              <ul className="ml-6">
                <li className="list-disc">
                  <h2 className="">Glowing Smiles Family Dental Clinic</h2>
                  <ul>
                    <li className="text-xs"> 2010 - Present (5 years)</li>
                  </ul>
                </li>{" "}
                <li className="list-disc">
                  <h2 className="">Dream Smile Dental Practice</h2>
                  <ul>
                    <li className="text-xs"> 2005 - 2007 (2 years)</li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
            <div className="space-y-5 pt-5">
              <h2 className="text-xl font-semibold">Services</h2>
              <ul className="ml-6">
                <li className="list-disc">Tooth cleaning</li>{" "}
                <li className="list-disc">Implants</li>
                <li className="list-disc">Composite Bonding</li>
                <li className="list-disc">Fissure Sealants</li>
                <li className="list-disc">Surgical Extractions</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-2 space-y-5 pt-5">
            <div className="">
              <h2 className="text-xl font-semibold">Awards</h2>
              <ul className="ml-6 space-y-2">
                <p className="text-sm my-1"> July 2019</p>
                <li className="list-disc">
                  <h2 className="text">Humanitarian Award</h2>
                  <ul className="space-y-2">
                    <li className="text-xs">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus.{" "}
                    </li>
                    <li className="text-xs">
                      {" "}
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus.
                    </li>
                  </ul>
                </li>{" "}
                <p className="text-sm my-1"> July 2019</p>
                <li className="list-disc">
                  <h2 className="">
                    Certificate for International Volunteer Service
                  </h2>
                  <ul className="space-y-2">
                    <li className="text-xs">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus.{" "}
                    </li>
                    <li className="text-xs">
                      {" "}
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus.
                    </li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-sm my-1 ml-6"> July 2019</p>

              <ul className="ml-6 list-disc">
                <li>The Dental Professional of The Year Award</li>
                <ul className="space-y-2 list-disc ml-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  a ipsum tellus. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus.
                </ul>
                <li className="list-disc">
                  <h2 className=" my-2 text-xl font-semibold">
                    Specializations
                  </h2>
                  <ul className="space-y-2 list-disc ml-5">
                    <li className="text-xs"> Children Care</li>
                    <li className="text-xs">Dental Care</li>
                    <li className="text-xs">Oral and Maxillofacial Surgery</li>
                    <li className="text-xs">Orthodontist</li>
                    <li className="text-xs">Periodontist</li>
                    <li className="text-xs">Prosthodontics</li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "business",
    label: "Business Hours",
    content: (
      <div className="">
        <h2 className="text-2xl font-semibold">Business Hours</h2>
        <p className="my-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="space-y-5 pt-5">
              <h2 className="text-xl font-semibold">Education</h2>
              <ul className="ml-6">
                <li className="list-disc">
                  <h2 className="">American Dental Medical University</h2>
                  <ul>
                    <li className="text-xs">BDS</li>
                    <li className="text-xs"> 1998 - 2003</li>
                  </ul>
                </li>{" "}
                <li className="list-disc">
                  <h2 className="">American Dental Medical University</h2>
                  <ul>
                    <li className="text-xs">BDS</li>
                    <li className="text-xs"> 1998 - 2003</li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
            <div className="space-y-5 pt-5">
              <h2 className="text-xl font-semibold">Work & Experience</h2>
              <ul className="ml-6">
                <li className="list-disc">
                  <h2 className="">Glowing Smiles Family Dental Clinic</h2>
                  <ul>
                    <li className="text-xs"> 2010 - Present (5 years)</li>
                  </ul>
                </li>{" "}
                <li className="list-disc">
                  <h2 className="">Dream Smile Dental Practice</h2>
                  <ul>
                    <li className="text-xs"> 2005 - 2007 (2 years)</li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
            <div className="space-y-5 pt-5">
              <h2 className="text-xl font-semibold">Services</h2>
              <ul className="ml-6">
                <li className="list-disc">Tooth cleaning</li>{" "}
                <li className="list-disc">Implants</li>
                <li className="list-disc">Composite Bonding</li>
                <li className="list-disc">Fissure Sealants</li>
                <li className="list-disc">Surgical Extractions</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-2 space-y-5 pt-5">
            <div className="">
              <h2 className="text-xl font-semibold">Awards</h2>
              <ul className="ml-6 space-y-2">
                <p className="text-sm my-1"> July 2019</p>
                <li className="list-disc">
                  <h2 className="text">Humanitarian Award</h2>
                  <ul className="space-y-2">
                    <li className="text-xs">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus.{" "}
                    </li>
                    <li className="text-xs">
                      {" "}
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus.
                    </li>
                  </ul>
                </li>{" "}
                <p className="text-sm my-1"> July 2019</p>
                <li className="list-disc">
                  <h2 className="">
                    Certificate for International Volunteer Service
                  </h2>
                  <ul className="space-y-2">
                    <li className="text-xs">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus.{" "}
                    </li>
                    <li className="text-xs">
                      {" "}
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus.
                    </li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-sm my-1 ml-6"> July 2019</p>

              <ul className="ml-6 list-disc">
                <li>The Dental Professional of The Year Award</li>
                <ul className="space-y-2 list-disc ml-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  a ipsum tellus. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus.
                </ul>
                <li className="list-disc">
                  <h2 className=" my-2 text-xl font-semibold">
                    Specializations
                  </h2>
                  <ul className="space-y-2 list-disc ml-5">
                    <li className="text-xs"> Children Care</li>
                    <li className="text-xs">Dental Care</li>
                    <li className="text-xs">Oral and Maxillofacial Surgery</li>
                    <li className="text-xs">Orthodontist</li>
                    <li className="text-xs">Periodontist</li>
                    <li className="text-xs">Prosthodontics</li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
