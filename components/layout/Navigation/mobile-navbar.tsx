import React, { useState } from "react";
import Link from "next/link";

interface MenuItem {
  label: string;
  href?: string;
  subMenu?: { label: string; href: string }[];
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems, onClose }) => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  return (
    <div
      className={`fixed inset-0 z-20 w-full bg-white px-5 py-16 lg:hidden transition-transform transform ${"translate-x-0"}`}
    >
      <ul className="grid divide-y divide-gray-20">
        {menuItems.map((item, index) => (
          <li key={index} className="py-3">
            <div
              className="overflow-hidden"
              style={{
                height:
                  openSubMenuIndex === index
                    ? "auto"
                    : item.subMenu
                    ? "0px"
                    : "auto",
              }}
            >
              <div className="h-max">
                {item.subMenu ? (
                  <>
                    <button
                      className="flex w-full justify-between"
                      onClick={() => toggleSubMenu(index)}
                    >
                      <p className="font-semibold text-black">{item.label}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-chevron-down h-5 w-5 text-gray-500 transition-all dark:text-white/50 ${
                          openSubMenuIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                    <div className="grid gap-4 overflow-hidden py-4">
                      {item.subMenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          passHref
                          className="flex w-full space-x-2 text-gray-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 128"
                            fill="none"
                            className="h-5 w-5 text-gray-500 dark:text-white/80 py-0.5 group-hover:text-[#3178C6]"
                          >
                            {/* SVG path here */}
                          </svg>
                          <span className="text-sm">{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    passHref
                    className="flex w-full justify-between text-black" 
                  >
                    <p className="font-semibold">{item.label}</p>
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
