import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-16 bg-gray-100">
      <div className="container mx-auto md:px-32 p-16 grid md:grid-cols-5 items-start gap-5">
        <div className="md:col-span-2 space-y-3 text-center md:text-left">
          <div className="flex items-center gap-3 text-xl">
            <Image
              className=""
              src="/assets/images/logo-icon.png"
              height={70}
              width={70}
              alt="tablet"
            />
            <span className="text-danger-500">Doc</span>
            <span className="text-black">House</span>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industrys standard dummy text ever since the 1500s.
          </p>
          <Button variant="bordered" color="warning" radius="none" className="border-1">
            Appointment
          </Button>
        </div>
        <div className="md:col-span-1 md:text-left text-center">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/doctors">Our Doctors</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1 md:text-left text-center">
          <h2 className="text-xl font-semibold">Services</h2>
          <ul>
            <li>
              <Link href="/general-medicine">General Medicine</Link>
            </li>
            <li>
              <Link href="/pediatrics">Pediatrics</Link>
            </li>
            <li>
              <Link href="/dental">Dental Care</Link>
            </li>
            <li>
              <Link href="/cardiology">Cardiology</Link>
            </li>
            <li>
              <Link href="/dermatology">Dermatology</Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1 md:text-left text-center">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <ul>
            <li>
              <Link href="/contact">Contact Form</Link>
            </li>
            <li>
              <p>Email: info@dochouse.com</p>
            </li>
            <li>
              <p>Phone: (123) 456-7890</p>
            </li>
            <li>
              <p>Address: 123 Medical St, Health City</p>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-full my-5" />
      <div className="text-center py-2">
        <p>Copyright © 2022 - All rights reserved by Doc House Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
