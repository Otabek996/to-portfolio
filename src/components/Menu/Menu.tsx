"use client";

import React, { useState } from "react";

type Category = "All" | "About" | "Projects" | "Media" | "Contacts";

interface MenuProps {
  initialTab?: Category;
  onTabChange?: (tab: Category) => void;
}

const Menu: React.FC<MenuProps> = ({
  initialTab = "All",
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState<Category>(initialTab);

  const categories: Category[] = [
    "All",
    "About",
    "Projects",
    "Media",
    "Contacts",
  ];

  const handleTabChange = (category: Category) => {
    setActiveTab(category);
    if (onTabChange) {
      onTabChange(category);
    }
  };

  return (
    <nav className="flex justify-center w-full py-15">
      <div className="flex items-center justify-center bg-transparent rounded-3xl border-2 border-[rgb(48,54,61)] shadow-md p-[5]">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => handleTabChange(category)}
            className={`px-4 py-2 text-sm font-medium rounded-2xl cursor-pointer ${
              activeTab === category
                ? "bg-[rgb(48,54,61)] text-[rgb(240, 242, 248)] transition-text duration-250 hover:text-[#90949B]"
                : "text-[rgb(240, 242, 248)] transition-opacity duration-250 hover:opacity-50"
            }`}
          >
            {category}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Menu;
