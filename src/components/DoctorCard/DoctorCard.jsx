import { Button } from "@nextui-org/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBadgeDollar, CiLocationOn } from "react-icons/ci";
import { SlEvent } from "react-icons/sl";

const DoctorCard = ({doctor}) => {
  return (
    <div className="border-2 rounded-md  p-4 space-y-3">
      <div className="">
        <Image
          className="w-full"
          src={doctor.profile_image}
          height={300}
          width={300}
          alt="tablet"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold">{doctor.name}</h2>
        <p>{doctor.qualifications}</p>
      </div>
      <div>
        <Rating style={{ maxWidth: 120 }} readOnly value={doctor.rating} />
      </div>
      <div className="">
        <div className="flex items-center gap-3">
          <div>
            <CiLocationOn />
          </div>
          <div>{doctor.location.address}</div>
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
        href={`/doctors/${doctor._id}/profile`}
      >
        View Profile
      </Button>
    </div>
  );
};

export default DoctorCard;
