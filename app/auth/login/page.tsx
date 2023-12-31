"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <Button
      variant="outline"
      onClick={() => signIn("github", { callbackUrl: "/" })}
    >
      Login with github
    </Button>
  );
};

export default LoginPage;
