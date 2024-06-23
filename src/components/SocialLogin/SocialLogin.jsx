import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import React from "react";
import { FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
  const handleSocialLogin = async () => {
    const res = await signIn("google");
    console.log(res);
  };
  return (
    <div>
      <Button
        onClick={() => handleSocialLogin()}
        color="warning"
        variant="faded"
        aria-label="Take a photo"
        fullWidth
        className="text-2xl"
      >
        <FaGoogle />
      </Button>
    </div>
  );
};

export default SocialLogin;
