"use client";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/input";
import { cn } from "@/lib/utils";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

export function ContactForm() {
  const to = useRef<HTMLInputElement>(null);
  const subject = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<string>('Let get in touch');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    console.log(status);
    try {
      const formData = {
        to: to.current?.value,
        subject: subject.current?.value,
        message: message.current?.value,
      };
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        // Clear form fields if needed
        if (to.current) to.current.value = '';
        if (subject.current) subject.current.value = '';
        if (message.current) message.current.value = '';
      } else {
        const data = await response.json();
        setStatus(`error: ${data.error}, ${data.details}`);
      }
    } catch (error) {
      console.log(error);
      setStatus(`fetch error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // const handleToChange = (e: ChangeEvent<HTMLInputElement>) => setTo(e.target.value);
  // const handleSubjectChange = (e: ChangeEvent<HTMLInputElement>) => setSubject(e.target.value);
  // const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

  return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input border border-white/[0.1] z-10"
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="to">Email</Label>
          <Input id="to" placeholder="xxx@yyy.zzz" type="email" ref={to}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Enter Subject" type="text" ref={subject}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input id="message" placeholder="Enter your Message" type="message" ref={message}/>
        </LabelInputContainer>
        <div className="flex justify-center items-center">
          <MagicButton
            title={status}
            type="submit"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

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
