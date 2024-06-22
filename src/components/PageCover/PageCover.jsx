import Image from "next/image";
import Link from "next/link";
import React from "react";

const PageCover = () => {
  return (
    <div
      style={{ background: "url('/assets/images/bannr-bg.png')" }}
      className="w-full mx-auto h-[50vh] md:h-[60vh] p-5 relative flex flex-col justify-center"
    >
      <Image
        className="absolute bottom-0 left-32 rotate-180"
        src="/assets/images/tablet-half.png"
        height={200}
        width={200}
        alt="tablet"
      />
      <Image
        className="absolute top-1/2  right-32"
        src="/assets/images/tablet.png"
        height={200}
        width={200}
        alt="tablet"
      />
      <div className="container md:px-32 mx-auto text-white space-y-1 text-center md:text-left">
            <p className="text-xs"><Link href="/">Home </Link>/<Link href="/doctors/id/profile"> Doctor Profile</Link></p>
            <h2 className="text-3xl font-semibold">Doctor Profile</h2>
      </div>
    </div>
  );
};

export default PageCover;
