import type React from "react";
import "../Button/Button.css";

interface props {
  Outline: boolean;
  label: string;
  icon?: React.ReactNode;
}

export default function Button({ Outline, label, icon }: props) {
  return (
    <button className={`${Outline ? "outlineButton btnBasicStyle" : "button btnBasicStyle "} d-flex align-items-center gap-2`}>
        {icon}
      {label}
    </button>
  );
}
