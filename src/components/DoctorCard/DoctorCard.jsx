import { Button } from "@nextui-org/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBadgeDollar, CiLocationOn } from "react-icons/ci";
import { SlEvent } from "react-icons/sl";

const DoctorCard = () => {
  return (
    <div className="border-2 rounded-md  p-4 space-y-3">
      <div className="">
        <Image
          className="w-full"
          src="/assets/images/doctor1.png"
          height={300}
          width={300}
          alt="tablet"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold">Karyen Anderson</h2>
        <p>BTP - Senior Physiotherapist</p>
      </div>
      <div>
        <Rating style={{ maxWidth: 120 }} readOnly value={4} />
      </div>
      <div className="">
        <div className="flex items-center gap-3">
          <div>
            <CiLocationOn />
          </div>
          <div>Dhanmondi, Dhaka, Bangladesh</div>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <SlEvent />
          </div>
          <div>Available On Mon, 22 December</div>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <CiBadgeDollar />
          </div>
          <div>$15</div>
        </div>
      </div>
      <Button
        className="hover:bg-warning-500 hover:text-white border-1"
        variant="bordered"
        radius="sm"
        color="warning"
        fullWidth
        as={Link}
        href="/doctors/id/profile"
      >
        View Profile
      </Button>
    </div>
  );
};

export default DoctorCard;
