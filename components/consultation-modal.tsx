"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import Button from "./common/button";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const approvalOptions = [
  "Land Due Diligence",
  "Change of Land Use",
  "Building Plan Approval",
  "Environmental Clearance",
  "Fire Safety Approval",
  "Occupancy Certification",
  "Tool And Prototype Design",
];

const DROPDOWN_PLACEHOLDER = "Consultation Required For";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  message: "",
};

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [selectedApproval, setSelectedApproval] =
    useState<string>(DROPDOWN_PLACEHOLDER);
  const [formData, setFormData] = useState(initialFormData);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const resetForm = () => {
    setFormData(initialFormData);
    setSelectedApproval(DROPDOWN_PLACEHOLDER);
    setOpenDropdown(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      resetForm();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close dropdown when clicking outside of it, without changing the selection
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          approvalRequirement: selectedApproval,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {
        alert("Message Sent Successfully");
        resetForm();
        onClose();
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Server Error");
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/20 backdrop-blur-xs"
          />

          <div
            className="container relative z-10 px-0! lg:px-4! mx-auto flex h-full items-center justify-center lg:justify-end"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#0c1520] border border-white/10 rounded-xl p-5 md:p-6 shadow-2xl overflow-y-auto max-h-[85vh] custom-scrollbar"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/5"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              <div className="mb-5 pr-6">
                <h3 className="text-xl md:text-2xl font-fraunces font-medium text-white mb-1">
                  Schedule a Consultation
                </h3>
                <p className="text-white/50 text-xs md:text-sm">
                  Fill out the form below and our experts will connect with you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full rounded-md border border-white/10 bg-white/5 px-3.5 py-2.5 text-white outline-none focus:border-white/30 transition placeholder:text-white/20 text-xs md:text-sm"
                  />
                </div>

                <div className="grid gap-3.5 md:grid-cols-2">
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-md border border-white/10 bg-white/5 px-3.5 py-2.5 text-white outline-none focus:border-white/30 transition placeholder:text-white/20 text-xs md:text-sm"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-md border border-white/10 bg-white/5 px-3.5 py-2.5 text-white outline-none focus:border-white/30 transition placeholder:text-white/20 text-xs md:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Company Name"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    className="w-full rounded-md border border-white/10 bg-white/5 px-3.5 py-2.5 text-white outline-none focus:border-white/30 transition placeholder:text-white/20 text-xs md:text-sm"
                  />
                </div>

                <div className="relative" ref={dropdownRef}>
                  <input
                    type="text"
                    required
                    value={
                      selectedApproval === DROPDOWN_PLACEHOLDER
                        ? ""
                        : selectedApproval
                    }
                    onChange={() => {}}
                    className="absolute inset-0 h-full w-full pointer-events-none opacity-0"
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="flex w-full items-center justify-between rounded-md border border-white/10 bg-white/5 px-3.5 py-2.5 text-left text-white focus:border-white/30 transition text-xs md:text-sm"
                  >
                    <span
                      className={
                        selectedApproval === DROPDOWN_PLACEHOLDER
                          ? "text-white/20"
                          : "text-white"
                      }
                    >
                      {selectedApproval}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 text-white/50 ${openDropdown ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full z-20 mt-1 w-full overflow-hidden rounded-md border border-white/10 bg-[#0c1520] shadow-xl max-h-40 overflow-y-auto"
                      >
                        {approvalOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setSelectedApproval(option);
                              setOpenDropdown(false);
                            }}
                            className="block w-full px-3.5 py-2 text-left text-xs md:text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-md border border-white/10 bg-white/5 px-3.5 py-2.5 text-white outline-none focus:border-white/30 transition placeholder:text-white/20 text-xs md:text-sm resize-none"
                  />
                </div>

                <div className="pt-1">
                  <Button
                    className="w-full justify-between!"
                    type="submit"
                    text="Click To Connect"
                  />
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
