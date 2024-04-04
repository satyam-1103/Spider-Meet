"use client";
import MeetingTypeList from "@/components/MeetingTypeList";
import React, { useState, useEffect } from "react";

const Home = () => {
  const getCurrentTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const [time, setTime] = useState<string>(getCurrentTime());

  // Use effect to update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const now = new Date();

  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[15px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 md:p-4">
          <h2 className="glassmorphism max-w-[270px] text-center rounded py-2 text-base font-normal">
            Upcoming meet at: 02:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-light text-gray-300">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
