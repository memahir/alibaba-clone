import { ReactNode } from "react";

interface NavbarItemProps {
  children: ReactNode;
}

export default function NavbarItem({ children }: NavbarItemProps) {
  return <div className="hover:text-blue-500">{children}</div>;
}
