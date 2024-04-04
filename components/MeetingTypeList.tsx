"use client";
import React, { useState } from "react";
import HomeCard from "@/components/HomeCard";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduledMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
        className="bg-orange-1"
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via meeting link"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-purple-1"
      />
      <HomeCard
        img="icons/schedule.svg"
        title="Schedule Meeting"
        description="Schedule an meeting for later"
        handleClick={() => setMeetingState("isScheduledMeeting")}
        className="bg-green-1"
      />
      <HomeCard
        img="icons/recordings.svg"
        title="Recordings"
        description="View previous recordings"
        handleClick={() => router.push("/recordings")}
        className="bg-blue-1"
      />
    </section>
  );
};

export default MeetingTypeList;
