import React from "react";
import Oliq from "../../../public/Image/Taste/oliqshop.webp";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import Button from "../Button/Button";

const Bundle = () => {
  return (
    <section className="bg-gray-200 py-10">
      <div className="px-3 lg:px-12">
        <div>
          <div className="pb-8">
            <h1 className="text-2xl text-center">Bundle Up and Save</h1>
          </div>
          <div className="sm:grid sm:grid-cols-2 sm:gap-x-3 h-full w-full">

          <div className="aspect-[4/3] w-full sm:h-full">
            <Image src={Oliq} alt="Oliq" className="object-cover sm:h-[450px]" />
          </div>
          <div className="sm:py-0 py-2 lg:gap-x-3">

          <div>
            <h2 className="text-lg lg:text-2xl">The Perfect Trio</h2>
          </div>
          <div className="lg:flex lg:justify-between">

          <div>
            <span className="text-sm">$ 115.00 USD </span>
          </div>
          <div className="flex cursor-pointer hover:text-yellow-800">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </div>
          </div>
          <div>
            <div className="py-4  ">
              <ol className="list-disc text-lg space-y-2 ">
                For The oliq oil lovers
                <li className="mx-2 text-base ">
                  Experience superior flavor of authentic Italian oil{" "}
                </li>
                <li className="mx-2 text-base ">
                  Support tradition and environment with OLIQs oils, crafted
                  sustainably in Italy
                </li>
                <li className="mx-2 text-base  ">
                  Elevate your dishes for your loved ones with high-quality,
                  100% natural oils
                </li>
              </ol>
            </div>
          </div>
          <div>
            <div>Quantity : </div>
          </div>
          <div className="py-2">
            <Button  name="Add To Cart" color="#E1FF00" />
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bundle;
