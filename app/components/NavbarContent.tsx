import { ReactNode } from "react";

interface NavbarContentProps {
  children: ReactNode;
}

export default function NavbarContent({ children }: NavbarContentProps) {
  return <div className="flex space-x-4">{children}</div>;
}
