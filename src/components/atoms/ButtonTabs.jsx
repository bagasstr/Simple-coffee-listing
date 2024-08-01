import React from "react";
import { useTabs } from "../../utils/context/TabActive";
import "../../index.css";
import { useEffect } from "react";

export default function ButtonTabs({ title }) {
  const { isActive, setIsActive } = useTabs();
  useEffect(() => {
    const button = document.querySelectorAll("button");
    button.forEach((btn) => {
      const active =
        (isActive && btn.textContent === "All Products") ||
        (!isActive && btn.textContent === "Available Now");
      btn.classList.toggle("active-tab", active);
    });
  }, [isActive]);

  return (
    <button className={``} onClick={() => setIsActive(!isActive)}>
      {title}
    </button>
  );
}
