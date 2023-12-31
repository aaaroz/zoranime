import { options } from "@/app/api/auth/[...nextauth]/options";
import { type ClassValue, clsx } from "clsx";
import { getServerSession } from "next-auth";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removePath(path: string[], pathToRemove: string): string[] {
  return path.filter((pathname) => pathname !== pathToRemove);
}

export const authUserSession = async () => {
  const auth = await getServerSession(options);
  return auth?.user;
};
