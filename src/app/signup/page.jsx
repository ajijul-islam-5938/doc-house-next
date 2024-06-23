"use client";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import { Button, Divider, Input, user } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";


const page = () => {
  const handleSignUp = async event => {
    event.preventDefault();

    // const imgRes = await axios.post(`https://api.imgbb.com/1/upload?key=8508f5a42bde668ec9a27ea94413b9cf`,{image : event.target.photo.value},{
    //   headers : {
    //     "Content-Type" : "multipart/form-data"
    //   }
    // })

    // console.log(imgRes);

    const userInfo = {
      name: event.target.name.value,
      email: event.target.email.value,
      userName: event.target.userName.value,
      photo: event.target.photo.value,
      password: event.target.password.value,
      role: "user",
    };


    // console.log(userInfo);
    axios.post("/signup/api",userInfo).then(res => {
      
      if (res.data.status === 200) {
        return NotificationManager.success("Succesfully Crated Your Account", "User Created");
      }
      if(res.data.status === 304){
        return NotificationManager.error("User already exist with this email", "User Exist")
      }
    });
  };
  return (
    <div>
      <div className="grid md:grid-cols-2">
        <div
          className=" relative "
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
        <div className="h-screen flex items-end justify-center">
          <form
            onSubmit={handleSignUp}
            className="border p-3 w-[95%] md:p-10 md:w-[60%] mx-auto my-16"
          >
            <h1 className="text-xl font-semibold text-center">
              Sign Up to Doc House
            </h1>
            <Input
              type="text"
              label="Name"
              labelPlacement="outside"
              name="name"
            />
            <Input
              type="email"
              label="Email"
              labelPlacement="outside"
              name="email"
            />
            <Input
              type="text"
              label="User Name"
              labelPlacement="outside"
              name="userName"
            />
            <Input
              type="password"
              label="Password"
              labelPlacement="outside"
              name="password"
            />
            <input className="my-5" type="file" name="photo" />

            <Button
              type="submit"
              className="my-3"
              variant="solid"
              color="warning"
              fullWidth
              radius="md"
            >
              Create Account
            </Button>
            <Divider className="my-3" orientation="horizontal"/>
            <SocialLogin/>
            <p>
              Already Registered ? <Link href="/api/auth/signin ">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default page;
