import { authOptions } from "../../../app/api/auth/[...nextauth]/options";
import Navbar from "./navbar";
import { getServerSession } from "next-auth/next";

import { Session } from "next-auth";

const session: Session | null = null; // Replace with actual session


const navLinks = [
  {
    href: "/about",
    label: "About",
    submenu: [
      { href: "/about/team", label: "Team" },
      { href: "/about/company", label: "Company" },
    ],
  },
  {
    href: "/products",
    label: "Products",
    submenu: [
      { href: "/products/software", label: "Software" },
      { href: "/products/hardware", label: "Hardware" },
    ],
  },
  {
    href: "/solutions",
    label: "Solutions",
    submenu: [
      { href: "/solutions/cloud", label: "Cloud" },
      { href: "/solutions/on-premise", label: "On-Premise" },
    ],
  },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return <Navbar session={session} navLinks={navLinks} />;
}
