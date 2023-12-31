"use client";

import { MouseEventHandler } from "react";
import { IoWarning } from "react-icons/io5";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export const NotFoundSection = () => {
  const router = useRouter();

  const handleBack: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <>
      <IoWarning className="text-5xl mx-auto" />
      <h1 className="text-4xl font-bold">Ooopss!</h1>
      <p className="text-xl font-medium mt-2">
        The page you are looking for does not exist.
      </p>
      <Button size="sm" className="mt-5" onClick={handleBack}>
        Go back
      </Button>
    </>
  );
};
