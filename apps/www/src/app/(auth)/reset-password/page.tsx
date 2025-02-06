import * as React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { ResetPasswordForm } from "@/components/reset-password-form";
import { Alert } from "@repo/ui/components/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import { validateResetToken } from "@repo/auth/lib/reset-token";
import { Logo } from "@/components/logo";

export default async function ResetPasswordPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { token } = await props.searchParams;
  if (!token || !(typeof token === "string")) {
    return redirect("/");
  }
  const validToken = await validateResetToken(token);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <Logo />
        <div className="flex flex-col gap-3">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Reset your password</CardTitle>
              <CardDescription className="pb-2">
                Please enter the new password you would like to use
              </CardDescription>
              <hr />
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 -mt-4">
                {validToken.error ? (
                  <div className="flex flex-col gap-3 space-y-2">
                    <Alert variant="destructive">{validToken.error}</Alert>
                    <Button asChild className="w-full">
                      <Link href="/">Back</Link>
                    </Button>
                  </div>
                ) : (
                  <ResetPasswordForm token={token} />
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
