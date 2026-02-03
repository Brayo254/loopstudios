import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <>
      <section className="flex pl-3 pr-5 flex-col justify-center items-center md:flex md:justify-center md:items-center md:p-8">
        <div className="md:w-full md:flex md:flex-row md:justify-center md:items-center">
          {/* left     */}
          <div className="mt-2.5 mb-0 pl-4 pr-4">
            <Image
              src="/desktop/image-interactive.jpg"
              width={600}
              height={600}
              alt="image"
            />
          </div>

          {/* right */}
          <div className=" bg-white p-2.5 md:w-[400px] md:h-[400px]  md:ml-[-100px] md:mt-[200px] md:flex md:justify-center flex-col md:p-10">
            <div className="md:mt-3">
              <h2 className="md:text-2xl font-bold">
                LEADER IN INTERACTIVE VR
              </h2>
            </div>
            <div>
              <p className="text-grey200 md:text-lg font-normal">
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best companies from
                around the world. Our award winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
