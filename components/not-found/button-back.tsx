"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

export const ButtonBack = () => {
  const router = useRouter();

  const handleBack: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <Button size="sm" className="mt-5" onClick={handleBack}>
      Go back
    </Button>
  );
};
