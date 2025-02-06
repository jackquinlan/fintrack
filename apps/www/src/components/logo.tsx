import * as React from "react";
import Link from "next/link";

import { WalletIcon } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 self-center font-medium">
      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <WalletIcon className="size-4" />
      </div>
      Fintrack
    </Link>
  );
}
