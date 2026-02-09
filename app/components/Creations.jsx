import React from "react";
import Button from "./Button";
import { contentData } from "../data";
import CreationCard from "./CreationCard";

const Creations = () => {
  return (
    <>
      <section className="px-6 py-6 md:px-20 md:py-20">
        <div className="md:w-full md:h-25 md:flex md:flex-row md:justify-between md:items-center md:p-8">
          <div>
            <h2 className="text-4xl">OUR CREATIONS</h2>
          </div>
          <div>
            <Button />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-8">
          {contentData.map((item) => (
            <CreationCard item={item} key={item.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Creations;
