import React from "react";

import { Html } from "../components/icons/TechnologiesIcons/Html";
import { LogosReact } from "../components/icons/TechnologiesIcons/React";
import { Javascript } from "../components/icons/TechnologiesIcons/JavaScript";
import { Typescript } from "../components/icons/TechnologiesIcons/TypeScript";
import { CSS } from "../components/icons/TechnologiesIcons/CSS";
import { Bootstrap } from "../components/icons/TechnologiesIcons/Bootstrap";
import { Tailwind } from "../components/icons/TechnologiesIcons/Tailwind";
import { Git } from "../components/icons/TechnologiesIcons/Git";
import { Github } from "../components/icons/TechnologiesIcons/GitHub";
import { Astro } from "../components/icons/TechnologiesIcons/Astro";

interface Props {
  description: string;
  category: string;
  nameSkill: string;
  iconSkill: React.ReactNode;
}

export const ItemSkills: Props[] = [
  {
    nameSkill: "HTML5",
    category: "Frontend",
    description: "Structures web content in a clear and semantic way.",
    iconSkill: <Html />,
  },
  {
    nameSkill: "CSS3",
    category: "Frontend",
    description: "Styles and designs modern, responsive interfaces.",
    iconSkill: <CSS />,
  },
  {
    nameSkill: "Bootstrap",
    category: "Frontend",
    description: "Builds fast, responsive layouts with prebuilt components.",
    iconSkill: <Bootstrap />,
  },
  {
    nameSkill: "Tailwind",
    category: "Frontend",
    description: "Creates custom designs using utility-first classes.",
    iconSkill: <Tailwind />,
  },
  {
    nameSkill: "JavaScript",
    category: "Frontend",
    description: "Adds interactivity and dynamic behavior to websites.",
    iconSkill: <Javascript />,
  },
  {
    nameSkill: "TypeScript",
    category: "Frontend",
    description: "Improves JavaScript with strong typing and scalability.",
    iconSkill: <Typescript />,
  },
  {
    nameSkill: "React",
    category: "Frontend",
    description: "Builds reusable and interactive user interfaces.",
    iconSkill: <LogosReact />,
  },
  {
    nameSkill: "Astro",
    category: "Frontend",
    description: "Creates fast and optimized static and hybrid websites.",
    iconSkill: <Astro />,
  },
  {
    nameSkill: "Git",
    category: "Tools",
    description: "Manages version control efficiently.",
    iconSkill: <Git />,
  },
  {
    nameSkill: "GitHub",
    category: "Tools",
    description: "Hosts projects and supports team collaboration.",
    iconSkill: <Github />,
  },
];
