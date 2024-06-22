import { Button, Input } from "@nextui-org/react";
import React from "react";
import { SlEvent } from "react-icons/sl";

const Contact = () => {
  return (
    <div className="p-10 bg-[#07332F] rounded-md grid md:grid-cols-5 gap-8">
      <div className="md:col-span-2 text-white">
        <div className="flex flex-col justify-between items-start gap-5">
          <h1 className="text-2xl font-semibold">Contact With Us</h1>
          <p className="">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </p>
          <div className="flex items-center gap-3">
          <div>
            <SlEvent />
          </div>
          <div>Available On Mon, 22 December</div>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <SlEvent />
          </div>
          <div>Available On Mon, 22 December</div>
        </div>
        </div>
      </div>
      <form className="md:col-span-3 grid md:grid-cols-2 gap-5">
      <Input color="success" type="text" label="Name" fullWidth/>
      <Input color="success" type="email" label="Email" fullWidth/>
      <Input color="success" type="number" label="Mobile Number" fullWidth/>
      <Input color="success" type="text" label="Doctor Name" fullWidth/>
      <Input color="success" type="date" label="Date" fullWidth/>
      <Input color="success" type="time" label="Time" fullWidth/>
      <div className="md:col-span-2">
        <Button type="submit" variant="solid" color="warning" fullWidth>Book Now</Button>
      </div>
      </form>
    </div>
  );
};

export default Contact;
