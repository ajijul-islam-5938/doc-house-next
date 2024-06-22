"use client"
import { Button, Input, } from "@nextui-org/react";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {signIn} from"next-auth/react"

const page =() => {
  const handleSignIn =  event =>{
    event.preventDefault();
    const email = event.target.name.value;
    const password = event.target.password.value;
    
    const res = signIn("credentials",{
      email,
      password,
     
    })
    console.log(res);
  }
  return (
    <div>
      <div className="grid md:grid-cols-2">
        <div
          className="h-screen relative"
          style={{ background: "url('/assets/images/login-bg.png" }}
        >
          <Image
            className="absolute top-0 right-0"
            src="/assets/images/login-bg-frame1.png"
            height={200}
            width={400}
            alt="tablet"
          />
          <Image
            className="absolute top-0 left-0 right-0 bottom-0 m-auto"
            src="/assets/images/login-bg-frame2.png"
            height={200}
            width={350}
            alt="tablet"
          />
        </div>
        <div className="h-screen flex items-center justify-center">
          <form onSubmit={handleSignIn} className="border p-3 w-[95%] md:p-10 md:w-[60%] mx-auto ">
            <h1 className="text-xl font-semibold text-center">Sign in to Doc House</h1>
           
            <Input type="email" name="email" label="Email" labelPlacement="outside" />
           
            <Input type="password" name="password" label="Password" labelPlacement="outside" />
            <Button type="submit" className="my-3" variant="solid" color="warning" fullWidth radius="md">Sign In</Button>
            <p>Already Registered ? <Link href="/signup">Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
