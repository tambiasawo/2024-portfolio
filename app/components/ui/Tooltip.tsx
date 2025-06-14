"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const Tooltip = ({
  id,
  content,
  children,
}: {
  //items: {
  id: number;
  content: string;
  children: React.ReactNode;
  /*  title: string;
    des: string;
    img: string;
    iconLists: Array<string>;
    link: string;
    githubLink: string; */
  // }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      <div
        className="group relative -mr-4"
        onMouseEnter={() => setHoveredIndex(id)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence mode="popLayout">
          {hoveredIndex === id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: 0,// id % 2 === 1 ? -200 : 200, //translateX,
                translateY: -120,
                zIndex:99999,
                rotate: rotate,
                //whiteSpace: "nowrap",
                position:'absolute'
              }}
            >
              <div className="text-md !max-w-md rounded-lg px-5 py-4  bg-black-100 ">
                {content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div onMouseMove={handleMouseMove}>{children}</div>
      </div>
    </>
  );
};
