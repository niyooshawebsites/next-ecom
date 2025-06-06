"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
  },
  {
    name: "Categories",
    href: "/dashboard/categories",
  },
  {
    name: "Products",
    href: "/dashboard/products",
  },
];

const DashboardNavigation = () => {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`px-3 ${cn(
            link.href === pathName
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default DashboardNavigation;
