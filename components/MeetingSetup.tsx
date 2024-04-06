"use client";
import React, { useEffect, useState } from "react";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";
const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isCamMicToggle, setIsCamMicToggle] = useState(false);
  const call = useCall();

  if (!call) {
    throw new Error("useStreamCall must be used within a StreamCall component");
  }

  useEffect(() => {
    if (isCamMicToggle) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isCamMicToggle, call?.camera, call?.microphone]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl">Setup</h1>
      <VideoPreview />
      <div className="flex items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isCamMicToggle}
            onChange={(e) => setIsCamMicToggle(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2"
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
