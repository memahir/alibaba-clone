import { ReactNode } from "react";

interface NavbarBrandProps {
  children: ReactNode;
}

export default function NavbarBrand({ children }: NavbarBrandProps) {
  return <div className="text-xl font-bold">{children}</div>;
}
