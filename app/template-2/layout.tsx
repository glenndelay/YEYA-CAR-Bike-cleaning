import type { ReactNode } from "react";
import { TemplateTwoFooter, TemplateTwoNav } from "@/components/template-two";

export default function TemplateTwoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#1f2926]">
      <TemplateTwoNav />
      {children}
      <TemplateTwoFooter />
    </div>
  );
}
