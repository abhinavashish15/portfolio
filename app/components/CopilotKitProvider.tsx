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
  if (!process.env.NEXT_PUBLIC_COPILOT_API_KEY) {
    return <>{children}</>;
  }

  return (
    <CopilotKit
      publicApiKey={process.env.NEXT_PUBLIC_COPILOT_API_KEY}
      chatApiEndpoint="/api/copilotkit"
    >
      {children}
    </CopilotKit>
  );
}
