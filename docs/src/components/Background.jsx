import React from "react";

const Background = () => {
  return (
    <>
      <div className="w-full h-screen fixed z-[2]">
        <div className="w-full py-10 flex justify-center text-zinc-500 text-xl absolute top-[5%] font-semibold">
          Documents.
        </div>
        <h1 className="absolute text-[13vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
