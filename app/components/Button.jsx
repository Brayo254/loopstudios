import React from "react";
import Link from "next/link";

function Button() {
  return (
    <>
      <button className="p-2 border-2 border-black hover:bg-black hover:text-white hover:border-grey200">
        <Link href="#">SEE ALL</Link>
      </button>
    </>
  );
}

export default Button;
