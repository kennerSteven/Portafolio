import { AboutmeItems } from "../../data/AboutmeItems";
import { Teamwork } from "../icons/AboutmeIcons/TeamWork";
import "../Card/CardAboutme.css";
import type React from "react";

interface props {
  icon: React.ReactNode;
  label: string;
}

export default function CardAboutme({ icon, label }: props) {
  return (
   
      <div className="d-flex  gap-2 containerAboutmeCard align-items-center">
        <div className="containerIcon">{icon}</div>
        <div className="containerLabel">
          <h6 className="fw-bold text-muted">{label}</h6>
        </div>
      </div>
 
  );
}
