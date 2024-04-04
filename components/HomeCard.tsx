import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
  className: string;
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
}

const HomeCard = ({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "rounded-lg px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt={title} width={24} height={24} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold ">{title}</h1>
        <p className="font-light text-lg">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
