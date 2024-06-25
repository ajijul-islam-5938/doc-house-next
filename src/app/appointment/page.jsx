"use client";
import PageCover from "@/components/PageCover/PageCover";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-notifications/lib/notifications.css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { NotificationContainer, NotificationManager } from "react-notifications";

const Appointment = () => {
  const [value, onChange] = useState(new Date());
  const [services, setServices] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const [slots, setSlots] = useState([]);

  const session = useSession();

  const [currentSlot, setCurrentSlot] = useState("");

  useEffect(() => {
    const getServices = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/services`
      );
      setServices(res.data.res);
    };
    getServices();
  }, []);

  useEffect(() => {
    const getDoctors = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/doctors`
      );
      setDoctors(res.data.res);
    };
    getDoctors();
  }, []);

  const hadleSlots = async (id, name, image, slot) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/slots/${id}`
    );
    setSlots({ slots: [...res.data.res.slots], name, image });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const handleOpen = slot => {
    setBackdrop("blur");
    onOpen();
    setCurrentSlot(slot);
  };

  const [selectedDoctor, setSelectedDoctor] = useState({});

  const handleSelectChange = value => {
    setSelectedDoctor(value);
  };

  const hadleBooking = async e => {
    e.preventDefault();

    const docId = selectedDoctor.target?.value;

    const currentDoc = doctors.find(doc => doc._id === docId);

    const info = {
      name: e.target.name.value,
      email: e.target.email.value,
      date: e.target.date.value,

      doctor: currentDoc,
      slot: e.target.slot.value,
      phone: e.target.phone.value,
    };

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings`,
      info
    );

    console.log(res.data.res);
  
    if(res.data.res.acknowledged === true){
      NotificationManager.success("Booking succed", "Booked");
      
    }else{
      NotificationManager.error("Something went wrong", "failed");

    }
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
              </>
            ))}
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
                      name="date"
                      size="sm"
                      type="text"
                      label="date"
                      value={`${value.getDate()}/${value.getMonth()}/${value.getFullYear()}`}
                      required
                      readOnly
                    />
                    <Input
                      name="slot"
                      size="sm"
                      type="text"
                      label="Slot"
                      defaultValue={currentSlot}
                      readOnly
                      required
                    />
                    <Input
                      name="name"
                      size="sm"
                      type="text"
                      label="Full Name"
                      defaultValue={session.data.user.name}
                      readOnly
                      required
                    />
                    <Input
                      name="email"
                      size="sm"
                      type="Email"
                      label="Email"
                      defaultValue={session.data.user.email}
                      readOnly
                      required
                    />
                    <Select
                      label="Select Doctor"
                      onChange={handleSelectChange}
                      required
                    >
                      {doctors.map((doctor, i) => (
                        <SelectItem key={doctor._id} name="doctor">
                          {doctor.name}
                        </SelectItem>
                      ))}
                    </Select>
                    <Input
                      size="sm"
                      type="number"
                      label="Phone Numbr"
                      name="phone"
                      required
                    />

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
        </div>
      )}
      <NotificationContainer />

    </div>
  );
};

export default Appointment;
