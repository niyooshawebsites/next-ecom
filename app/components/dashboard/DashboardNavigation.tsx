import Link from "next/link";
import React from "react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/dashbaord/orders",
  },
  {
    name: "Categories",
    href: "/dashbaord/categories",
  },
  {
    name: "Products",
    href: "/dashbaord/products",
  },
];

const DashboardNavigation = () => {
  return (
    <>
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="px-3">
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default DashboardNavigation;
