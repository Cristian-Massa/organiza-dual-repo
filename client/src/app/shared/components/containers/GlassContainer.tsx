import { ReactNode } from "react";
import { OneToTenRange } from "@/src/types/ranges";

interface GlassContainerProps {
  ligthness: OneToTenRange;
  children: ReactNode;
}

export function GlassContainer({ ligthness, children }: GlassContainerProps) {
  return <div>{children}</div>;
}
