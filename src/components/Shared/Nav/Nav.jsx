"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Avatar,
  User,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const path = usePathname();
  const session = useSession();
  console.log(session);

  return (
    <Navbar
      className="fixed top-0 left-0 right-0 mx-0 bg-transparent md:px-32 py-3"
      isBlurred
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="text-white">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src="/assets/images/logo.png"
            height={140}
            width={140}
            alt="logo"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Button
            variant="flat"
            radius="md"
            size="sm"
            color="primary"
            as={Link}
              className={`w-full ${
                path === item.path ? "text-primary" : "text-white"
              } text-sm`}
              href={item.path}
              color={path === item.path ? "success" : "danger"}
              
            >
              {item.label}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {session.status === "authenticated" && (
          <NavbarItem className="hidden lg:flex">
            <Dropdown
              showArrow
              radius="sm"
              classNames={{
                base: "before:bg-default-200", // change arrow background
                content: "p-0 border-small border-divider bg-background",
              }}
              backdrop="blur"
            >
              <DropdownTrigger>
              <Avatar src={session?.data.user.image} />

              </DropdownTrigger>
              <DropdownMenu
                aria-label="Custom item styles"
                disabledKeys={["profile"]}
                className="p-3"
                itemClasses={{
                  base: [
                    "rounded-md",
                    "text-default-500",
                    "transition-opacity",
                    "data-[hover=true]:text-foreground",
                    "data-[hover=true]:bg-default-100",
                    "dark:data-[hover=true]:bg-default-50",
                    "data-[selectable=true]:focus:bg-default-50",
                    "data-[pressed=true]:opacity-70",
                    "data-[focus-visible=true]:ring-default-500",
                  ],
                }}
              >
                <DropdownSection aria-label="Profile & Actions" showDivider>
                  <DropdownItem
                    isReadOnly
                    key="profile"
                    className="h-14 gap-2 opacity-100 my-10"
                  >
                    <div className="flex flex-col gap-5 justify-center items-center text-black font-semibold">
                      <Avatar src={session?.data.user.image} />
                      <div>
                        <h1 className="text-lg text-center ">
                          {session?.data?.user?.name}
                        </h1>
                        <p>{session?.data?.user?.email}</p>
                      </div>
                    </div>
                    <Divider orientation="vertical" className="my-5"/>
                  </DropdownItem>
                  <DropdownItem key="dashboard">Dashboard</DropdownItem>
                </DropdownSection>

                <DropdownSection aria-label="Help & Feedback">
                  <DropdownItem onClick={() => signOut()} key="logout">
                    Log Out
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        )}
        {session.status === "unauthenticated" && (
          <NavbarItem>
            <Button
              as={Link}
              color="warning"
              href="/signin"
              variant="solid"
              radius="none"
            >
              Sign In
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#" size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

const menuItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Appointment",
    path: "/appointment",
  },
];

export default Nav;

const PlusIcon = props => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M6 12h12" />
      <path d="M12 18V6" />
    </g>
  </svg>
);
