"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollTextHighlightProps {
  text: string;
}

export const ScrollTextHighlight: React.FC<ScrollTextHighlightProps> = ({
  text,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const words = text.split(" ");

  return (
    <div className="container mt-24">
      <div className="rounded-md border border-white/10 p-4 sm:p-6">
        <div ref={containerRef} className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl font-medium text-white font-fraunces leading-140 tracking-tight flex flex-wrap justify-center gap-x-3 gap-y-0"
            aria-label={text}
          >
            <span aria-hidden="true" className="contents">
              {words.map((word, index) => {
                const start = index / words.length;
                const end = (index + 1) / words.length;

                return (
                  <Word
                    key={index}
                    progress={scrollYProgress}
                    range={[start, end]}
                  >
                    {word}
                  </Word>
                );
              })}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.55, 1]);

  return (
    <motion.span style={{ opacity }} className="text-white leading-[120%]!">
      {children}
    </motion.span>
  );
};
