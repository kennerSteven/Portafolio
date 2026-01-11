import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

import styles from "./MainTitle.module.css";
import Button from "../../components/Button/Button";

import { CV } from "../../components/icons/Cv";
import { Projects } from "../../components/icons/Projects";
import { Github } from "../../components/icons/GitHub";
import { Gmail } from "../../components/icons/Gmail";

export default function App() {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, set] = useState<string[]>([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#4988C4",
    },
    enter: [
      { opacity: 1, height: 70, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#1C4D8D" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#1C4D8D" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#4988C4" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(
        () => set(["I am kenner", "Frontend Developer", "From colombia"]),
        50
      )
    );
    ref.current.push(
      setTimeout(() => set(["I am kenner", "Developer", "From colombia"]), 5000)
    );
    ref.current.push(
      setTimeout(
        () => set(["I am kenner", "Web developer", "From colombia"]),
        8000
      )
    );
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  return (
    <div
      className={`${styles.container} d-flex flex-column align-items-center `}
    >
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            className={styles.transitionsItem}
            style={rest}
            onClick={reset}
          >
            <animated.div style={{ overflow: "hidden", height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
      <div style={{ marginTop: "50px" }}>
        <div className="d-flex gap-3 ">
          <Button Outline={false} label="See my projects" icon={<Projects />} />
          <Button Outline={true} label="Download my CV" icon={<CV />} />
        </div>
        <div className="d-flex justify-content-center mt-4 gap-2">
          <Github />
          <Gmail />
        </div>
      </div>
    </div>
  );
}
