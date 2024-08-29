"use client";
import React from "react";
import AutocompleteList from "../../components/AutocompleteList";
import SearchBox from "../../components/SearchBox";
import Image from "next/image";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function Home() {
  return (
    <div>
      <div className="flex justify-end text-sm text-gray-700">
        <div className="flex items-center">
          <Link href="#" className="block p-3">
            Gmail
          </Link>
          <Link href="#" className="block p-3">
            Images
          </Link>
          <Link href="#" className="block p-3">
            <TbGridDots className="text-3xl" />
          </Link>
          <Image
            className="rounded-full  py-3 px-4"
            src="https://www.shareicon.net/data/128x128/2016/09/15/829459_man_512x512.png" // Ensure the path is correct
            alt="Profile Photo"
            width={70}
            height={32}
          />
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <div>
          <div>
            <Image
              className=" ml-auto mr-auto mb-6 bg-transparent"
              src="https://t3.ftcdn.net/jpg/03/99/98/60/360_F_399986042_9iSLYUNyDv8npaKP31xsIpDVFjfqGLDF.jpg" // Ensure the path is correct
              alt="Google Logo"
              width={272}
              height={92}
            />
          </div>
          <div className="">
            <SearchBox />
            <AutocompleteList />
          </div>

          <div className="mt-8 text-center">
            <button className="mr-3 bg-gray-200 border-gray-300 py-2 px-4 rounded hover:bg-gray-400">
              Google Search
            </button>
            <button className="bg-gray-200 border-gray-300 py-2 px-4 rounded hover:bg-gray-400 hover:border-gray-600">
              I&apos;m Feeling Lucky
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 bg-gray-200 border-t w-full flex justify-between text-gray-600 text-xs">
        <div className="flex">
          <Link href="#" className="block p-3">
            India
          </Link>
        </div>
      </div>
      <div className="fixed bottom-0 bg-gray-200 border-t w-full flex justify-between text-gray-600 text-xs">
        <div className="flex">
          <Link href="#" className="block p-3">
            About
          </Link>
          <Link href="#" className="block p-3">
            Advertising
          </Link>
          <Link href="#" className="block p-3">
            Business
          </Link>
          <Link href="#" className="block p-3">
            How Search Works
          </Link>
        </div>
        <div className="flex">
          <Link href="#" className="block p-3">
            Privacy
          </Link>
          <Link href="#" className="block p-3">
            Terms
          </Link>
          <Link href="#" className="block p-3">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
