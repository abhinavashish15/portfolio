/** @format */

"use client";

import { CopilotKit } from "@copilotkit/react-core";
import { ReactNode } from "react";

interface CopilotKitProviderProps {
  children: ReactNode;
}

export default function CopilotKitProvider({
  children,
}: CopilotKitProviderProps) {
  // If no API key is provided, render children without CopilotKit
  // This allows the app to work even without the AI chat feature
  if (!process.env.NEXT_PUBLIC_COPILOT_API_KEY) {
    console.log("CopilotKit API key not found, rendering without AI chat");
    return <>{children}</>;
  }

  return (
    <CopilotKit publicApiKey={process.env.NEXT_PUBLIC_COPILOT_API_KEY}>
      {children}
    </CopilotKit>
  );
}
