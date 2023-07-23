"use client";
import Image from "next/image";
import logo from "@/public/logo.svg";
import LinkComponent from "@/components/atoms/LinkComponent";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
const routes = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Events",
    url: "/events",
  },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleIsOpen = () => {
    setOpen(!open);
  };
  return (
    <header className="bg-white w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-3">
          <div>
            <Image src={logo} alt="TCA Logo" />
          </div>
          <nav className=" absolute bg-white p-4 border w-full h-full top-4">
            <ul className="flex items-center flex-col h-full justify-center text-gray-500  overflow-hidden">
              {routes.map((route) => (
                <li key={route.name} className="md:ml-6 mt-6 text-sm ">
                  <Link href={route.url}>{route.name}</Link>
                </li>
              ))}
              <li className="md:ml-6 mt-6">
                <LinkComponent
                  url="/host-event"
                  label="Host an event"
                  style="primary"
                />
              </li>
            </ul>
          </nav>
          <button onClick={toggleIsOpen} className="md:hidden z-50">
            <div
              className={clsx(
                "h-0.5 bg-black my-1 w-6 transition duration-300 ease-in-out",
                open && "w-6 rotate-45 -translate-x-2 translate-y-1 ",
              )}
            />
            <div
              className={clsx("h-0.5 bg-black my-1 w-8", open && "hidden")}
            />
            <div
              className={clsx(
                "h-0.5 bg-black my-1 w-6 transition duration-300 ease-in-out",
                open && "w-6 -rotate-45 -translate-x-2 -translate-y-0.5",
              )}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
