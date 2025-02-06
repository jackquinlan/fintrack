"use client";

import React from "react";
import Link from "next/link";

import { signOut } from "next-auth/react";
import { GalleryVerticalEnd } from "lucide-react";

import { Alert } from "@repo/ui/components/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import { Logo } from "@/components/logo";

export function VerifyEmailCard({ error }: { error?: string }) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6">
      <div className="flex w-full max-w-md flex-col gap-6">
        <Logo />
        <div className="flex flex-col gap-3">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Verify your email</CardTitle>
              <CardDescription className="pb-2">
                Please verify your email address before signing in
              </CardDescription>
              <hr />
            </CardHeader>
            <CardContent className="pt-0">
              {error ? (
                <div className="flex flex-col gap-3 space-y-2">
                  <Alert variant="destructive">{error}</Alert>
                  <Button asChild className="w-full">
                    <Link href="/login">Sign in</Link>
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-3 space-y-2">
                  <Alert variant="success">Your email has been verified!</Alert>
                  <Button
                    onClick={() => signOut({ redirectTo: "/login" })}
                    className="w-full"
                  >
                    Sign in with verified email
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
