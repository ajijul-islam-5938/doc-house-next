"use client"
import React, { useState } from 'react';
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import { FaQuoteLeft } from 'react-icons/fa6';

const ReviewCard = () => {
    const [isFollowed, setIsFollowed] = useState(false);

    return (
        <Card className='shadow-md border p-3 overflow-hidden'>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
       <div className="text-4xl text-warning-500"> <FaQuoteLeft /></div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
        </p>

      </CardBody>
    </Card>
    );
};

export default ReviewCard;