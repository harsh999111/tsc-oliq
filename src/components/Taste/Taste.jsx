import React from "react";
import Image from "next/image";
import { tasteItems } from "../../utils/Taste"; // Importing the tasteItems array

const Taste = () => {
  return (
    <section className="bg-green-50 p-2 py-10 space-y-6 h-full w-full">
      <div className="grid grid-cols-2  space-x-2 md:grid-cols-4">
        {tasteItems.map((item, index) => (
          <div key={index}>
            <div>
              <Image src={item.image} alt={`Taste${index + 1}`} className="h-32 w-32" />
            </div>
            <div>
              <h1 className="text-lg">{item.title}</h1>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Taste;
