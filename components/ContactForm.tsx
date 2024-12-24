"use client";
import React, { FormEvent, useRef, useState } from "react";
import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/input";
import { cn } from "@/lib/utils";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

export function ContactForm() {
  const to = useRef<HTMLInputElement>(null);
  const subject = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<string>("Let get in touch");
  const [errors, setErrors] = useState<{ to?: string; subject?: string; message?: string }>({});

  const validateForm = () => {
    const newErrors: { to?: string; subject?: string; message?: string } = {};

    if (!to.current?.value) {
      newErrors.to = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(to.current.value)) {
      newErrors.to = "Enter a valid email address";
    }

    if (!subject.current?.value) {
      newErrors.subject = "Subject is required";
    }

    if (!message.current?.value) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");
    try {
      const formData = {
        to: to.current?.value,
        subject: subject.current?.value,
        message: message.current?.value,
      };
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        if (to.current) to.current.value = "";
        if (subject.current) subject.current.value = "";
        if (message.current) message.current.value = "";
      } else {
        const data = await response.json();
        setStatus(`error: ${data.error}, ${data.details}`);
      }
    } catch (error) {
      // setStatus(`fetch error: ${error instanceof Error ? error.message : String(error)}`);
      setStatus("Please retry!")
    } finally {
      setStatus("Lets get in touch");
    }
  };

  return (
    <div
      className="max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input border border-white/[0.1] z-10"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="to">Email</Label>
          <Input id="to" placeholder="xxx@yyy.zzz" type="email" ref={to} />
          {errors.to && <p className="text-red-500 text-sm">{errors.to}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Enter Subject" type="text" ref={subject} />
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input id="message" placeholder="Enter your Message" type="text" ref={message} />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </LabelInputContainer>
        <div className="flex justify-center items-center">
          <MagicButton title={status} type="submit" icon={<FaLocationArrow />} position="right" />
        </div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
