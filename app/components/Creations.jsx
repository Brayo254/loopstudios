import React from "react";
import Button from "./Button";
import { contentData } from "../data";
import Image from "next/image";

const Creations = () => {
  return (
    <>
      <section className="">
        <div className="md:w-full md:h-25 md:flex md:flex-row md:justify-between md:items-center md:p-8 bg-amber-700">
          <div>
            <h2 className="text-4xl">OUR CREATIONS</h2>
          </div>
          <div>
            <Button />
          </div>
        </div>

        <div className="md:grid md:grid-cols-4 md:p-10 md:gap-2">
          {contentData.map((item) => (
            <div key={item.id} className="md:item1">
              <div className="md:flex md:justify-center md:items-center md:gap-x-3">
                <Image src={item.image} width={150} height={300} alt="image" />
              </div>
              <div className="md:flex md:justify-center md:items-center">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Creations;
