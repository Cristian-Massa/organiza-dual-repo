"use client";

import { Button } from "@/src/app/shared/components/buttons/Button";
import { ReactNode } from "react";
import { redirectAction } from "@/src/app/shared/actions/redirectAction";
interface RedirectionButton {
  children: ReactNode;
  path: string;
}

export function RedirectionButton({ children, path }: RedirectionButton) {
  return <Button onClick={() => redirectAction(path)}>{children}</Button>;
}
