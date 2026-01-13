import Comunication from "../components/icons/AboutmeIcons/Comunication";
import { Teamwork } from "../components/icons/AboutmeIcons/TeamWork";
import { Creative } from "../components/icons/AboutmeIcons/Creative";
import { Knowledge } from "../components/icons/AboutmeIcons/KnowLedge";
interface props {
  icon: React.ReactNode;
  name: string;
}

export const AboutmeItems: props[] = [
  {
    name: "Creative",
    icon : <Creative />,
  },
  {
    name: "Knowledge",
    icon : <Knowledge />,
  },
  {
    name: "TeamWork",
    icon : <Teamwork />,
  },
  {
    name: "Comunication",
    icon : <Comunication />,
  },
];
