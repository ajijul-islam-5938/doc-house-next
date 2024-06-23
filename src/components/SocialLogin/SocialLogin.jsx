import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import React from "react";
import { FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
  const handleSocialLogin = async () => {
    const res = await signIn("google");

  };
  return (
    <div>
      <Button startContent={<FaGoogle/>}
        onClick={() => handleSocialLogin()}
        color="warning"
        variant="flat"
        aria-label="Take a photo"
        fullWidth
        className="text-md"
      >
        Sign In With Google
      </Button>
    </div>
  );
};

export default SocialLogin;
