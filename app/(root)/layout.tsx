import { StreamVideoProdiver } from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProdiver>{children}</StreamVideoProdiver>
    </main>
  );
};

export default RootLayout;
