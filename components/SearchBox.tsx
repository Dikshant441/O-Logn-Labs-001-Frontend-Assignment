"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { searchLocalitiesAsync } from "@/lib/store/weatherSlice";
import { AppDispatch } from "@/lib/store/store";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const SearchBox: React.FC = () => {
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (localSearchTerm) {
      dispatch(searchLocalitiesAsync(localSearchTerm));
    }
  }, [localSearchTerm, dispatch]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md">
      <div className="flex ">
        <div className="flex">
          <div className="text-2xl p-2 border rounded-l-full border-r-0 ">
            <CiSearch />
          </div>
          <div>
            <input
              type="search"
              value={localSearchTerm}
              onChange={(e) => setLocalSearchTerm(e.target.value)}
              className=" flex w-full px-4 py-2 border border-l-0 border-r-0 border-gray-300 focus:outline-none box-"
              placeholder="Search for a location..."
            />
          </div>

          <Image
            className="border border-l-0 rounded-r-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBBTajlQilPBmdFrP_53l2AnA4WsmHDcQFatAiGHq_meRq-Br3w6E4Q9ZfSAmKWktK3E&usqp=CAU"
            alt="Google Logo"
            width={40}
            height={92}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
