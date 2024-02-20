import React from "react";
import Taste1 from "../../../public/Image/taste.png";
import Taste2 from "../../../public/Image/taste1.png";
import Taste3 from "../../../public/Image/taste2.png";
import Taste4 from "../../../public/Image/taste3.png";
import Image from "next/image";

const Taste = () => {
  return (
    <section className="bg-green-50 p-4 ">
      <div className="flex px-2 space-x-2 ">
        <div>
          <div>
            <Image src={Taste1} alt="Taste1"  className="h-32 w-32"/>
          </div>
          <div>
            <h1 className="text-xl">Premium Tatse</h1>
          </div>
          <div>
            <p>
              Experience the authentic taste of Italy with our premium,
              high-quality oil.
            </p>
          </div>
        </div>
        <div>
          <div>
            <Image src={Taste2} alt="Taste1"  className="h-32 w-32"/>
          </div>
          <div>
            <h1 className="text-xl">Premium Tatse</h1>
          </div>
          <div>
            <p>
              Experience the authentic taste of Italy with our premium,
              high-quality oil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Taste;
