import * as React from "react";

import { ForgotPasswordCard } from "@/components/forgot-password-card";
import { Logo } from "@/components/logo";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <Logo />
        <ForgotPasswordCard />
      </div>
    </div>
  );
}
