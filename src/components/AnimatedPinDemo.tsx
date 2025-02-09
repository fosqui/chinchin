"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";


export default function AnimatedPinDemo() {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Chin Chin"
        href="https://www.google.com/maps/place/C.+59+1015,+B1900+BTO,+Provincia+de+Buenos+Aires/@-34.9279318,-57.9593419,15.25z/data=!4m6!3m5!1s0x95a2e6286954e283:0x56eee923b7d59307!8m2!3d-34.9277264!4d-57.9514255!16s%2Fg%2F11jpgn0c21?entry=ttu"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[35rem] h-[22rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Visitanos
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Nuestra oficina central
            </span>
          </div>
          <Image
            src="/mapa.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </div>
      </PinContainer>
    </div>
  );
}
