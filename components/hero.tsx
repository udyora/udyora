"use client";
import type { NextPage } from "next";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Navbar } from "./common/navbar";
import Button from "./common/button";
import { ConsultationModal } from "./consultation-modal";

const Header: NextPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "30%"],
  );

  return (
    <>
      <main ref={containerRef} className="text-dark overflow-x-hidden relative">
        <Navbar />

        <section className="relative min-h-screen flex flex-col justify-end pb-16 pt-32 overflow-hidden">
          <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10">
            <img
              src="/hero-one.webp"
              alt="India's Project Approval Intelligence Platform - Udyora Ventures"
              className="w-full h-full object-cover object-bottom scale-110"
              loading="eager"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark/95 via-dark/65 to-dark/30" />
          </motion.div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-white/5 rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="flex flex-col justify-center gap-6">
            <div className="p-6 w-full bg-[#122130]/50 backdrop-blur-xs border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <div className="container max-lg:px-0! relative z-1 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end w-full text-center lg:text-left">
                  <div className="lg:col-span-4 h-full">
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="text-white font-fraunces font-medium leading-[1.15] text-4xl tracking-tight"
                    >
                      One Window. <br className="md:block" /> Every Approval.{" "}
                      <br />
                      <span className="text-white/80">Zero Hassle.</span>
                    </motion.h1>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="lg:col-span-8 flex flex-col items-center lg:items-start gap-8 xl:pl-19"
                  >
                    <p className="text-white font-normal leading-relaxed  max-sm:font-semibold text-lg">
                      We simplify complex regulatory processes by delivering
                      end-to-end approvals and compliance services for
                      industrial, commercial, institutional, and infrastructure
                      projects. From land due diligence to occupancy
                      certification, Udyora manages every critical approval
                      through a single point of coordination.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
            <div
              className="flex container justify-center lg:justify-end"
              onClick={() => setIsModalOpen(true)}
            >
              <Button text="Consult Now" />
            </div>
          </div>
        </section>
      </main>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;
