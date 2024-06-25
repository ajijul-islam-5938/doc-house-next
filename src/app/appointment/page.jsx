"use client";
import PageCover from "@/components/PageCover/PageCover";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

const Appointment = () => {
  const [value, onChange] = useState(new Date());
  const [services, setServices] = useState([]);

  const [slots, setSlots] = useState([]);

  const session = useSession();
  console.log("session", session);

  useEffect(() => {
    const getServices = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/services`
      );
      setServices(res.data.res);
    };
    getServices();
  }, []);

  const hadleSlots = async (id, name, image, slot) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/slots/${id}`
    );
    setSlots({ slots: [...res.data.res.slots], name, image });
  };

  console.log(slots);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const handleOpen = () => {
    setBackdrop("opaque");
    onOpen();
  };

  const hadleBooking = e => {
    e.preventDefault();
  };
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
          {services?.map(service => (
            <div
              onClick={() =>
                hadleSlots(
                  service._id,
                  service.name,
                  service.slot_thumbnail,
                  service.slot
                )
              }
              key={service._id}
              className="grid grid-cols-4 items-start gap-5 shadow p-1 rounded-md"
            >
              <div
                style={{ background: "url('/assets/images/service-bg.png')" }}
                className="col-span-1 p-4 bg-no-repeat bg-cover bg-center"
              >
                <Image
                  src={service.slot_thumbnail}
                  height={200}
                  width={200}
                  alt="tablet"
                />
              </div>
              <div className="col-span-3">
                <p className="text-lg w-1/2">{service.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {slots.name && (
        <div className="container mx-auto md:px-32 my-16">
          <div className="my-16">
            <h2 className="text-2xl font-semibold text-center">
              Available slots for {slots.name}.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {slots?.slots?.map((slot, i) => (
              <>
                <div
                  key={i}
                  className="flex flex-col items-center justify-evenly py-8 gap-5 border"
                >
                  <div className=" p-5 rounded-full flex items-center justify-center bg-[rgba(255,0,0,0.1)]">
                    <Image
                      src={slots.image}
                      height={50}
                      width={50}
                      alt="tablet"
                    />
                  </div>
                  <p className="text-xl font-semibold">{slots.name}</p>
                  <p className="text-xs">{slot}</p>
                  <Button
                    onPress={() => handleOpen(slot)}
                    variant="solid"
                    color="warning"
                    radius="none"
                  >
                    Book Appointment
                  </Button>
                </div>
                <Modal
                  backdrop={backdrop}
                  isOpen={isOpen}
                  onClose={onClose}
                  placement={"bottom"}
                >
                  <ModalContent>
                    {onClose => (
                      <form onSubmit={hadleBooking}>
                        <ModalHeader className="flex flex-col gap-1">
                          {slots.name}
                        </ModalHeader>
                        <ModalBody>
                          <Input
                            size="sm"
                            type="text"
                            label="date"
                            value={`${value.getDate()}/${value.getMonth()}/${value.getFullYear()}`}
                          />
                          <Input
                            size="sm"
                            type="text"
                            label="Slot"
                            defaultValue={slot}
                            readOnly
                          />
                          <Input
                            size="sm"
                            type="text"
                            label="Full Name"
                            defaultValue={session.data.user.name}
                            readOnly
                          />
                          <Input
                            size="sm"
                            type="Email"
                            label="Email"
                            defaultValue={session.data.user.email}
                            readOnly
                          />
                          <Select label="Select Doctor">
                            <SelectItem>
                              xxx
                            </SelectItem>
                          </Select>
                          <Input size="sm" type="number" label="Phone Numbr" />

                          <Button
                            type="submit"
                            variant="shadow"
                            color="success"
                            fullWidth
                          >
                            Submit
                          </Button>
                        </ModalBody>
                      </form>
                    )}
                  </ModalContent>
                </Modal>
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
