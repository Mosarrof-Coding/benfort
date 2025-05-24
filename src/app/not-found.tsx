import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="place-items-center grid pb-12 w-full min-h-[90dvh]">
      <div className="text-center">
        <h3 className="font-bold text-red-400 text-2xl"> Page-Not-Found! ☹</h3>
        <Link
          href={"/"}
          className="inline-block opacity-50 hover:opacity-100 mt-4 text-foreground text-lg transition"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
